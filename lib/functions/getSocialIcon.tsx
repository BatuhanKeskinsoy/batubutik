import { ReactElement } from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

export function getSocialIcon(platform: string): ReactElement {
  switch (platform) {
    case "Facebook":
      return <CiFacebook />;
    case "Twitter":
      return <CiTwitter />;
    case "İnstagram":
      return <CiInstagram />;
    case "Youtube":
      return <CiYoutube />;
    default:
      return <CiFacebook />;
  }
}
