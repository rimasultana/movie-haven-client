import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FeaturedMovies from "../components/FeaturedMovies";
import PopularCategories from "../components/PopularCategories";
import Sponser from "../components/Spnser";

export default function Home() {
  return (
    <>
      <div className="py-5">
        <Banner />
      </div>
      <div>
        <FeaturedMovies />
      </div>
      <div>
        <PopularCategories />
      </div>
      <div className="py-5">
        <Sponser />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}
