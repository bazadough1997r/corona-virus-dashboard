import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import { getSearchByCountryResultsActions } from "../store/Actions";

export const SearchForm = ({ countries }) => {
  const dispatch = useDispatch();

  const [countrySearch, setCountrySearch] = useState("World Wide");
  const clickHandler = ({ e, country }) => {
    e.preventDefault();
    dispatch(getSearchByCountryResultsActions(country));
    setCountrySearch(country);
  };
  return (
    <DropdownButton
      style={{ margin: "10px" }}
      variant="outline-secondary"
      title={countrySearch}
      id="input-group-dropdown-1"
    >
      {countries.map((country) => (
        <Dropdown.Item
          key={country.Country}
          href={country.Country}
          onClick={clickHandler}
        >
          {country.Country}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SearchForm;
