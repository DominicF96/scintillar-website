#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ValidationResult {
  missingKeys: { file: string; locale: string; key: string }[];
  extraKeys: { file: string; locale: string; key: string }[];
  malformedFiles: { file: string; error: string }[];
}

class TranslationValidator {
  private i18nDir = path.join(process.cwd(), 'i18n');
  
  async validateTranslations(): Promise<ValidationResult> {
    const result: ValidationResult = {
      missingKeys: [],
      extraKeys: [],
      malformedFiles: []
    };

    // Find all .i18n.ts files
    const translationFiles = await glob('**/*.i18n.ts', { cwd: this.i18nDir });
    
    for (const file of translationFiles) {
      try {
        await this.validateFile(path.join(this.i18nDir, file), result);
      } catch (error) {
        result.malformedFiles.push({
          file,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return result;
  }

  private async validateFile(filePath: string, result: ValidationResult): Promise<void> {
    // Dynamic import the translation file
    const translations = await import(filePath);
    
    // Extract locales (assuming en and fr)
    const locales = ['en', 'fr'];
    const availableLocales = locales.filter(locale => translations[locale]);
    
    if (availableLocales.length < 2) {
      result.malformedFiles.push({
        file: filePath,
        error: `Missing locale exports. Found: ${availableLocales.join(', ')}`
      });
      return;
    }

    // Compare structures
    const [baseLocale, ...otherLocales] = availableLocales;
    const baseStructure = this.getTranslationKeys(translations[baseLocale]);
    
    for (const locale of otherLocales) {
      const localeStructure = this.getTranslationKeys(translations[locale]);
      
      // Find missing keys
      for (const key of baseStructure) {
        if (!localeStructure.includes(key)) {
          result.missingKeys.push({
            file: filePath,
            locale,
            key
          });
        }
      }
      
      // Find extra keys
      for (const key of localeStructure) {
        if (!baseStructure.includes(key)) {
          result.extraKeys.push({
            file: filePath,
            locale,
            key
          });
        }
      }
    }
  }

  private getTranslationKeys(obj: any, prefix = ''): string[] {
    const keys: string[] = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        keys.push(...this.getTranslationKeys(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    
    return keys;
  }

  async generateReport(result: ValidationResult): Promise<string> {
    let report = '# Translation Validation Report\n\n';
    
    if (result.missingKeys.length > 0) {
      report += '## Missing Keys\n\n';
      for (const { file, locale, key } of result.missingKeys) {
        report += `- **${file}** (${locale}): \`${key}\`\n`;
      }
      report += '\n';
    }
    
    if (result.extraKeys.length > 0) {
      report += '## Extra Keys\n\n';
      for (const { file, locale, key } of result.extraKeys) {
        report += `- **${file}** (${locale}): \`${key}\`\n`;
      }
      report += '\n';
    }
    
    if (result.malformedFiles.length > 0) {
      report += '## Malformed Files\n\n';
      for (const { file, error } of result.malformedFiles) {
        report += `- **${file}**: ${error}\n`;
      }
      report += '\n';
    }
    
    if (result.missingKeys.length === 0 && result.extraKeys.length === 0 && result.malformedFiles.length === 0) {
      report += '✅ All translations are valid!\n';
    }
    
    return report;
  }
}

// CLI execution
if (require.main === module) {
  const validator = new TranslationValidator();
  
  validator.validateTranslations()
    .then(result => validator.generateReport(result))
    .then(report => {
      console.log(report);
      process.exit(0);
    })
    .catch(error => {
      console.error('Validation failed:', error);
      process.exit(1);
    });
}

export { TranslationValidator };