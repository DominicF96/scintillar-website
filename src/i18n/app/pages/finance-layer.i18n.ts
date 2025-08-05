export interface I18n {
  title: string;
  description: string;
  comingSoon: string;
  sections: {
    coreFeatures: {
      title: string;
    };
    marketData: {
      title: string;
      description: string;
    };
    portfolioTracking: {
      title: string;
      description: string;
    };
    riskAnalysis: {
      title: string;
      description: string;
    };
    tradingSimulation: {
      title: string;
      description: string;
    };
    advancedFeatures: {
      title: string;
    };
    algorithmicTrading: {
      title: string;
      description: string;
    };
    macroeconomicAnalysis: {
      title: string;
      description: string;
    };
    alternativeAssets: {
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
  title: "Finance Layer",
  description: "Comprehensive financial data analysis, market monitoring, and investment tracking across global markets and asset classes.",
  comingSoon: "Advanced financial analytics coming soon...",
  sections: {
    coreFeatures: {
      title: "Core Features"
    },
    marketData: {
      title: "Market Data",
      description: "Real-time stock prices, market indices, currency exchange rates, and comprehensive financial data from global exchanges."
    },
    portfolioTracking: {
      title: "Portfolio Tracking",
      description: "Monitor investment portfolios, track performance metrics, and analyze asset allocation across multiple accounts and strategies."
    },
    riskAnalysis: {
      title: "Risk Analysis",
      description: "Advanced risk assessment tools including VAR calculations, stress testing, and portfolio volatility analysis."
    },
    tradingSimulation: {
      title: "Trading Simulation",
      description: "Paper trading environment for testing strategies, backtesting historical performance, and risk-free experimentation."
    },
    advancedFeatures: {
      title: "Advanced Features"
    },
    algorithmicTrading: {
      title: "Algorithmic Trading",
      description: "Automated trading strategies, quantitative analysis, and algorithmic execution with customizable parameters."
    },
    macroeconomicAnalysis: {
      title: "Macroeconomic Analysis",
      description: "Economic indicators, central bank policies, inflation data, and macroeconomic trend analysis."
    },
    alternativeAssets: {
      title: "Alternative Assets",
      description: "Cryptocurrency tracking, commodities analysis, REITs, and other alternative investment monitoring."
    },
    realTimeStatus: {
      title: "Real-time Market Status",
      description: "Live market conditions, trading session status, and real-time financial data streams across global markets."
    }
  }
};

export const fr: I18n = {
  title: "Couche Financière",
  description: "Analyse complète des données financières, surveillance des marchés et suivi des investissements sur les marchés mondiaux et classes d'actifs.",
  comingSoon: "Analyses financières avancées bientôt disponibles...",
  sections: {
    coreFeatures: {
      title: "Fonctionnalités Principales"
    },
    marketData: {
      title: "Données de Marché",
      description: "Prix des actions en temps réel, indices de marché, taux de change et données financières complètes des bourses mondiales."
    },
    portfolioTracking: {
      title: "Suivi de Portefeuille",
      description: "Surveillez les portefeuilles d'investissement, suivez les métriques de performance et analysez l'allocation d'actifs sur plusieurs comptes et stratégies."
    },
    riskAnalysis: {
      title: "Analyse de Risque",
      description: "Outils d'évaluation des risques avancés incluant les calculs VAR, les tests de stress et l'analyse de volatilité du portefeuille."
    },
    tradingSimulation: {
      title: "Simulation de Trading",
      description: "Environnement de trading virtuel pour tester des stratégies, backtester les performances historiques et expérimenter sans risque."
    },
    advancedFeatures: {
      title: "Fonctionnalités Avancées"
    },
    algorithmicTrading: {
      title: "Trading Algorithmique",
      description: "Stratégies de trading automatisées, analyse quantitative et exécution algorithmique avec paramètres personnalisables."
    },
    macroeconomicAnalysis: {
      title: "Analyse Macroéconomique",
      description: "Indicateurs économiques, politiques des banques centrales, données d'inflation et analyse des tendances macroéconomiques."
    },
    alternativeAssets: {
      title: "Actifs Alternatifs",
      description: "Suivi des cryptomonnaies, analyse des matières premières, REITs et surveillance d'autres investissements alternatifs."
    },
    realTimeStatus: {
      title: "État des Marchés en Temps Réel",
      description: "Conditions de marché en direct, statut des sessions de trading et flux de données financières en temps réel sur les marchés mondiaux."
    }
  }
};