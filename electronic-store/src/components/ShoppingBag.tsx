import { Offcanvas } from "react-bootstrap"
import { useShoppingBag } from "../context/ShoppingBagContent";

type ShoppingBagProps = {
  isOpen: boolean;
}

function ShoppingBag({ isOpen } : ShoppingBagProps) {
  const { closeBag } = useShoppingBag()
  return (
    <Offcanvas show={isOpen} onHide={closeBag} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Bag</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}

export default ShoppingBag