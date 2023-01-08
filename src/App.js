import CountryCard from "./layouts/CountryCard";
import Header from "./layouts/Header";
import HomeCards from "./layouts/HomeCards";
import Map from "./layouts/Map";
import ScrollToTop from "./layouts/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <HomeCards />
      <Map />
      <CountryCard />
      <ScrollToTop />
    </>
  );
};

export default App;
