import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export const RankCountries = ({searchResults,countries}) => {
  const lowestBtnHandler = () => {
    let sortedResults =
      searchResults.length !== 0
        ? searchResults.sort((c1, c2) => c1.TotalConfirmed - c2.TotalConfirmed)
        : searchResults.sort((c1, c2) => c1.TotalConfirmed - c2.TotalConfirmed);

    console.log(sortedResults, "hi");
  };

  const highestBtnHandler = () => {
    let sortedResults =
      searchResults.length !== 0
        ? searchResults.sort((c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed)
        : searchResults.sort((c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed);

    console.log(sortedResults, "hello");
  };

  console.log({ searchResults, countries });

  return (
    <InputGroup className="mb-3" style={{ margin: "10px" }}>
      <Button onClick={lowestBtnHandler} variant="outline-success">
        Lowest to highest
      </Button>
      <Button onClick={highestBtnHandler} variant="outline-danger">
        Highest to lowest
      </Button>
    </InputGroup>
  );
};

export default RankCountries;
