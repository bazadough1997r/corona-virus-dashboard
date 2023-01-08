import CountryCard from "./layouts/CountryCard";
import Header from "./layouts/Header";
import HomeCards from "./layouts/HomeCards";
import Map from "./layouts/Map";

const App = () => {
  return (
    <>
      <Header />
      <HomeCards />
      <Map/>
      <CountryCard />
    </>
  );
};

export default App;
