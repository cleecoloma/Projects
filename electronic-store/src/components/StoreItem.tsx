import { Card, Button } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingBag } from "../context/ShoppingBagContent";
import ImageSlide from "./ImageSlide";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseBagQuantity,
    decreaseBagQuantity,
    removeFromBag,
  } = useShoppingBag();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <ImageSlide imgUrl={imgUrl} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseBagQuantity(id)}>
              + Add to Bag
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-cente justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseBagQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity} </span>
                  in Bag
                </div>
                <Button onClick={() => increaseBagQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromBag(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
