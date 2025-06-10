// import Layout from "@/components/layout/Layout";
// import Banner from "@/components/sections/home1/Banner";
// import Welcome from "@/components/sections/home1/Welcome";
// import About from "@/components/sections/home1/About";
// import Testimonial from "@/components/sections/home1/Testimonial";
// import Cta from "@/components/sections/home1/Cta";
// import Blog from "@/components/sections/home1/Blog";
// import Found from "@/components/sections/home1/Found";
// import Donation from "@/components/sections/home1/Donation";
// import Donate from "@/components/sections/home1/Donate";
// import Who from "@/components/sections/home1/Who";
// import Event from "@/components/sections/home1/Event";
// import Country from "@/components/sections/home1/Country";

// export default function Home() {
//   return (
//     <>
//       <Layout headerStyle={1} footerStyle={1}>
//         <Banner />
//         <Welcome />
//         <About />
//         <Found />
//         <Donation />
//         <Donate />
//         <Who />
//         <Event />
//         <Testimonial />
//         <Blog />
//         <Country />
//         <Cta />
//       </Layout>
//     </>
//   );
// }

import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home4/About";
import Banner from "@/components/sections/home4/Banner";
import Blog from "@/components/sections/home4/Blog";
import Slogan from "@/components/sections/home4/Slogan";
import Mission from "@/components/sections/home4/Mission";
import Donation from "@/components/sections/home4/Donation";
import Who from "@/components/sections/home4/Who";
import Country from "@/components/sections/home4/Country";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={3}>
        <Banner />
        <About />
        <Slogan />
        <Mission />
        <Donation />
        <Who />
        <Blog />
        <Country />
      </Layout>
    </>
  );
}
