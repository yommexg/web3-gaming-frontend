import FAQ from "./faq";
import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import RoadMap from "./road-map";
import Teams from "./teams";
import WhoWeAre from "./who-we-are";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Features />
      <RoadMap />
      <Teams />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
