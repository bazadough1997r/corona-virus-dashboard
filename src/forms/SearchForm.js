import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { getSearchByCountryResultsActions } from "../store/Actions";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(getSearchByCountryResultsActions(event.target.value));
  };

  return (
    <div style={{ margin: "10px" }}>
      <Form.Label>Search by country</Form.Label>
      <Form.Control onChange={changeHandler} type="text" />
    </div>
  );
};

export default SearchForm;
