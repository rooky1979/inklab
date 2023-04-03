import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "@/styles/globals.css";

library.add(faFacebook, faInstagram, faTiktok, faYoutube);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
