import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingBag } from "../context/ShoppingBagContent";
import BagItem from "./BagItem";
import formatCurrency from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingBagProps = {
  isOpen: boolean;
};

function ShoppingBag({ isOpen }: ShoppingBagProps) {
  const { closeBag, bagItems } = useShoppingBag();
  return (
    <Offcanvas show={isOpen} onHide={closeBag} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Bag</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {bagItems.map((item) => (
            <BagItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              bagItems.reduce((total, bagItem) => {
                const item = storeItems.find((i) => i.id === bagItem.id);
                return total + (item?.price || 0) * bagItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingBag;
