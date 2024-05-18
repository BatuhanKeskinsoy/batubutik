export function getSocialIcon(platform: string): string {
  switch (platform) {
    case "Facebook":
      return "facebook";
    case "Twitch":
      return "twitch";
    case "Youtube":
      return "youtube";
    case "Instagram":
      return "instagram";
    case "LinkedIn":
      return "linkedin";
    case "Snapchat":
      return "snapchat";
    case "Medium":
      return "medium";
    case "Reddit":
      return "reddit";
    case "Discord":
      return "discord";
    case "Tiktok":
      return "tiktok";
    case "Spotify":
      return "spotify";
    case "Twitter":
      return "twitter";
    default:
      return "no-image";
  }
}
