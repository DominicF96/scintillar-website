export interface I18n {
  title: string;
  description: string;
  coming_soon: string;
  features: {
    title: string;
    procedural_stocks: string;
    procedural_stocks_desc: string;
    real_time_data: string;
    real_time_data_desc: string;
    trading_simulation: string;
    trading_simulation_desc: string;
    market_analysis: string;
    market_analysis_desc: string;
  };
}

export const en: I18n = {
  title: "Stock Market",
  description: "A procedural stock market simulation with real-time trading and market analysis.",
  coming_soon: "Coming Soon",
  features: {
    title: "Features",
    procedural_stocks: "Procedural Stock Generation",
    procedural_stocks_desc: "Dynamically generated companies and stock prices based on market conditions.",
    real_time_data: "Real-Time Market Data",
    real_time_data_desc: "Live stock prices, market trends, and trading volumes.",
    trading_simulation: "Trading Simulation",
    trading_simulation_desc: "Buy and sell stocks with realistic market mechanics.",
    market_analysis: "Market Analysis Tools",
    market_analysis_desc: "Charts, indicators, and analysis tools for informed trading decisions.",
  },
};

export const fr: I18n = {
  title: "Bourse",
  description: "Une simulation de bourse procédurale avec trading en temps réel et analyse de marché.",
  coming_soon: "Bientôt Disponible",
  features: {
    title: "Fonctionnalités",
    procedural_stocks: "Génération Procédurale d'Actions",
    procedural_stocks_desc: "Entreprises et prix d'actions générés dynamiquement selon les conditions du marché.",
    real_time_data: "Données de Marché en Temps Réel",
    real_time_data_desc: "Prix d'actions en direct, tendances du marché et volumes de trading.",
    trading_simulation: "Simulation de Trading",
    trading_simulation_desc: "Achetez et vendez des actions avec des mécaniques de marché réalistes.",
    market_analysis: "Outils d'Analyse de Marché",
    market_analysis_desc: "Graphiques, indicateurs et outils d'analyse pour des décisions de trading éclairées.",
  },
};