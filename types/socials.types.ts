export type SupportedSocial =
  | "bluesky"
  | "discord"
//   | "facebook"
  | "github"
//   | "instagram"
//   | "linkedin"
//   | "telegram"
//   | "tiktok"
//   | "twitter"
//   | "whatsapp"
  | "youtube";

export type Social = { key: SupportedSocial; url: string };
