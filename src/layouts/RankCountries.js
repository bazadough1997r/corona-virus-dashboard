import Button from "react-bootstrap/Button";
import { Card, CardGroup } from "react-bootstrap";

export const RankCountries = ({ highestBtnHandler, lowestBtnHandler }) => {
  return (
    <Card
      bg="dark"
      key="dark"
      text="white"
      className="text-center"
      style={{ margin: "10px" }}
    >
      <CardGroup style={{ margin: "10px" }}>
        <Button
          style={{ margin: "0px 10px" }}
          onClick={lowestBtnHandler}
          variant="success"
        >
          Lowest to highest
        </Button>
        <Button
          style={{ margin: "0px 10px" }}
          onClick={highestBtnHandler}
          variant="danger"
        >
          Highest to lowest
        </Button>
      </CardGroup>
    </Card>
  );
};

export default RankCountries;
