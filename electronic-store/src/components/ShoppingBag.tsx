import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingBag } from "../context/ShoppingBagContent";
import BagItem from "./BagItem";

type ShoppingBagProps = {
  isOpen: boolean;
}

function ShoppingBag({ isOpen } : ShoppingBagProps) {
  const { closeBag, bagItems } = useShoppingBag()
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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingBag