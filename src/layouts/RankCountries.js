import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export const RankCountries = ({ highestBtnHandler, lowestBtnHandler }) => {
  return (
    <InputGroup className="mb-3" style={{ margin: "10px", width: "99%" }}>
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
