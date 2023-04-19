import { Col, Row } from "react-bootstrap";
import StoreNavBar from "../components/StoreNavbar";
import cpuItems from "../data/cpu.json";
import gpuItems from "../data/gpu.json";
import storageItems from "../data/storage.json";
import memoryItems from "../data/memory.json";
import motherboardItems from "../data/motherboard.json";
import powerSupplyItems from "../data/power-supply.json";
import caseItems from "../data/case.json";
import coolingItems from "../data/cooling.json";
import StoreItem from "../components/StoreItem";

const storeItems = [
  ...cpuItems,
  ...gpuItems,
  ...storageItems,
  ...memoryItems,
  ...motherboardItems,
  ...powerSupplyItems,
  ...caseItems,
  ...coolingItems,
];

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
