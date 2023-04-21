import { Col, Row } from "react-bootstrap";
import StoreNavBar from "../components/StoreNavbar";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

function Store() {
  return (
    <>
      <StoreNavBar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
