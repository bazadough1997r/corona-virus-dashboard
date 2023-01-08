import SearchForm from "./forms/SearchForm";
import CountryCard from "./layouts/CountryCard";
import HomeCards from "./layouts/HomeCards";

const App = () => {
  return (
    <>
      <HomeCards />
      <SearchForm/>
      <CountryCard />
    </>
  );
};

export default App;
