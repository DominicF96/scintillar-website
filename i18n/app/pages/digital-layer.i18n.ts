export interface I18n {
  title: string;
  description: string;
  comingSoon: string;
  sections: {
    coreFeatures: {
      title: string;
    };
    networkMapping: {
      title: string;
      description: string;
    };
    deviceDiscovery: {
      title: string;
      description: string;
    };
    trafficAnalysis: {
      title: string;
      description: string;
    };
    securityMonitoring: {
      title: string;
      description: string;
    };
    advancedFeatures: {
      title: string;
    };
    cloudInfrastructure: {
      title: string;
      description: string;
    };
    apiMonitoring: {
      title: string;
      description: string;
    };
    performanceMetrics: {
      title: string;
      description: string;
    };
    realTimeStatus: {
      title: string;
      description: string;
    };
  };
}

export const en: I18n = {
  title: "Digital Layer",
  description: "Monitor and analyze digital infrastructure, network topology, and cybersecurity metrics across your entire digital environment.",
  comingSoon: "Advanced monitoring tools coming soon...",
  sections: {
    coreFeatures: {
      title: "Core Features"
    },
    networkMapping: {
      title: "Network Mapping",
      description: "Visualize network topology, device connections, and infrastructure relationships in real-time with interactive network diagrams."
    },
    deviceDiscovery: {
      title: "Device Discovery",
      description: "Automatically discover and catalog all connected devices, IoT sensors, and network endpoints with detailed metadata."
    },
    trafficAnalysis: {
      title: "Traffic Analysis",
      description: "Monitor network traffic patterns, bandwidth usage, and data flow analysis to optimize network performance."
    },
    securityMonitoring: {
      title: "Security Monitoring",
      description: "Real-time threat detection, vulnerability scanning, and security incident tracking across your digital infrastructure."
    },
    advancedFeatures: {
      title: "Advanced Features"
    },
    cloudInfrastructure: {
      title: "Cloud Infrastructure",
      description: "Monitor cloud services, container orchestration, and serverless architectures across multiple providers."
    },
    apiMonitoring: {
      title: "API Monitoring",
      description: "Track API performance, response times, error rates, and usage patterns for all connected services."
    },
    performanceMetrics: {
      title: "Performance Metrics",
      description: "Comprehensive system performance monitoring including CPU, memory, storage, and application metrics."
    },
    realTimeStatus: {
      title: "Real-time Digital Health",
      description: "Live monitoring dashboard showing the current status of all digital systems, services, and infrastructure components."
    }
  }
};

export const fr: I18n = {
  title: "Couche Numérique",
  description: "Surveillez et analysez l'infrastructure numérique, la topologie réseau et les métriques de cybersécurité dans tout votre environnement numérique.",
  comingSoon: "Outils de surveillance avancés bientôt disponibles...",
  sections: {
    coreFeatures: {
      title: "Fonctionnalités Principales"
    },
    networkMapping: {
      title: "Cartographie Réseau",
      description: "Visualisez la topologie réseau, les connexions d'appareils et les relations d'infrastructure en temps réel avec des diagrammes réseau interactifs."
    },
    deviceDiscovery: {
      title: "Découverte d'Appareils",
      description: "Découvrez et cataloguez automatiquement tous les appareils connectés, capteurs IoT et points de terminaison réseau avec des métadonnées détaillées."
    },
    trafficAnalysis: {
      title: "Analyse du Trafic",
      description: "Surveillez les modèles de trafic réseau, l'utilisation de la bande passante et l'analyse des flux de données pour optimiser les performances réseau."
    },
    securityMonitoring: {
      title: "Surveillance de Sécurité",
      description: "Détection de menaces en temps réel, analyse de vulnérabilités et suivi des incidents de sécurité dans votre infrastructure numérique."
    },
    advancedFeatures: {
      title: "Fonctionnalités Avancées"
    },
    cloudInfrastructure: {
      title: "Infrastructure Cloud",
      description: "Surveillez les services cloud, l'orchestration de conteneurs et les architectures serverless sur plusieurs fournisseurs."
    },
    apiMonitoring: {
      title: "Surveillance API",
      description: "Suivez les performances des API, les temps de réponse, les taux d'erreur et les modèles d'utilisation pour tous les services connectés."
    },
    performanceMetrics: {
      title: "Métriques de Performance",
      description: "Surveillance complète des performances système incluant CPU, mémoire, stockage et métriques d'application."
    },
    realTimeStatus: {
      title: "Santé Numérique en Temps Réel",
      description: "Tableau de bord de surveillance en direct montrant l'état actuel de tous les systèmes numériques, services et composants d'infrastructure."
    }
  }
};