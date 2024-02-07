
import { Helmet } from "react-helmet";
import BannerSection from "./BannerSection";
import FeaturedRooms from "./FeaturedRooms ";
import HomeOfferBanner from "./HomeOfferBanner";
import HomeTestimonial from "./HomeTestimonial";
// import MapComponent from "./MapComponent ";
import NewsletterSignup from "./NewsletterSignup";


const Home = () => {
  return (
    <div>

      <div>
        <Helmet>
          <title>Home | BookBliss</title>
          <meta name="description" content="This is my awesome app." />
        </Helmet>


      </div>

      <BannerSection></BannerSection>
      <FeaturedRooms></FeaturedRooms>

      <HomeOfferBanner></HomeOfferBanner>
      <NewsletterSignup></NewsletterSignup>
      {/* <MapComponent></MapComponent> */}

      <HomeTestimonial></HomeTestimonial>


    </div>
  );
};

export default Home;