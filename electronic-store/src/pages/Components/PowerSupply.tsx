import React from 'react';
import StoreNavBar from "../../components/StoreNavbar";
import { Col, Row } from "react-bootstrap";
import storeItems from "../../data/power-supply.json";
import StoreItem from "../../components/StoreItem";

function PowerSupply() {
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

export default PowerSupply
