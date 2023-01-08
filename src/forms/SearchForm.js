import Form from "react-bootstrap/Form";

export const SearchForm = ({ changeHandler }) => {
  return (
    <div style={{ margin: "10px" }}>
      <Form.Label>Search by country:</Form.Label>
      <Form.Control onChange={changeHandler} type="text" />
    </div>
  );
};

export default SearchForm;
