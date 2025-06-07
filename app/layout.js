import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dmSans, libreBaskerville } from "@/lib/font";
export const metadata = {
  title: "NTTP-Nepal Transition To Peace",
  description:
    "Nepal Transition to Peace Institute (NTTP-I) is a peace research institute founded upon the history of decade-long engagement in Nepal’s political transition as a credible and Track 1.5 peace process for mediation, facilitation, and dialogue among the political parties of Nepal since 2005. As a trusted forum for informal dialogues among the political parties, NTTP Forum has been functioning to resolve political standoffs, thaw stalemates and promote peaceful engagement among the political parties even in critical times in a low key and trusted setting.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${dmSans.variable} ${libreBaskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
