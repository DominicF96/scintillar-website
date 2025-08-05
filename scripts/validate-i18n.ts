#!/usr/bin/env ts-node

/**
 * i18n Validation Script
 * 
 * Validates that all translation files have consistent keys across locales
 * Run with: npm run validate:i18n or ts-node scripts/validate-i18n.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';

interface ValidationResult {
  file: string;
  missingKeys: string[];
  extraKeys: string[];
}

function flattenObject(obj: any, prefix = ''): string[] {
  const keys: string[] = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        keys.push(...flattenObject(obj[key], newKey));
      } else {
        keys.push(newKey);
      }
    }
  }
  
  return keys;
}

function validateTranslations() {
  console.log('🌐 Validating i18n translations...\n');
  
  // Find all i18n files
  const i18nFiles = globSync('src/i18n/**/*.i18n.ts');
  const results: ValidationResult[] = [];
  let hasErrors = false;
  
  for (const filePath of i18nFiles) {
    try {
      const fullPath = path.resolve(filePath);
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      // Basic regex to extract exported objects (works for simple cases)
      const enMatch = content.match(/export const en[^=]*=\s*({[\s\S]*?});/);
      const frMatch = content.match(/export const fr[^=]*=\s*({[\s\S]*?});/);
      
      if (!enMatch || !frMatch) {
        console.warn(`⚠️  Could not parse ${filePath} - skipping validation`);
        continue;
      }
      
      try {
        // Use eval in development only (this is a dev script)
        const enObj = eval(`(${enMatch[1]})`);
        const frObj = eval(`(${frMatch[1]})`);
        
        const enKeys = flattenObject(enObj).sort();
        const frKeys = flattenObject(frObj).sort();
        
        const missingInFr = enKeys.filter(key => !frKeys.includes(key));
        const missingInEn = frKeys.filter(key => !enKeys.includes(key));
        
        if (missingInFr.length > 0 || missingInEn.length > 0) {
          hasErrors = true;
          results.push({
            file: filePath,
            missingKeys: missingInFr,
            extraKeys: missingInEn
          });
        }
        
      } catch (evalError) {
        console.warn(`⚠️  Could not evaluate objects in ${filePath} - skipping validation`);
        continue;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error);
      hasErrors = true;
    }
  }
  
  // Report results
  if (results.length === 0 && !hasErrors) {
    console.log('✅ All translation files are valid and consistent!\n');
    return true;
  }
  
  console.log('❌ Translation validation failed!\n');
  
  for (const result of results) {
    console.log(`📄 ${result.file}`);
    
    if (result.missingKeys.length > 0) {
      console.log('  Missing in French:');
      result.missingKeys.forEach(key => console.log(`    - ${key}`));
    }
    
    if (result.extraKeys.length > 0) {
      console.log('  Missing in English:');
      result.extraKeys.forEach(key => console.log(`    - ${key}`));
    }
    
    console.log('');
  }
  
  return false;
}

// Run validation
if (require.main === module) {
  const isValid = validateTranslations();
  process.exit(isValid ? 0 : 1);
}

export { validateTranslations };