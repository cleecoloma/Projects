import { Button, Stack } from "react-bootstrap";
import { useShoppingBag } from "../context/ShoppingBagContent";
import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type BagItemProps = {
  id: number;
  quantity: number;
}

function BagItem({ id, quantity }: BagItemProps) {
  const { removeFromBag } = useShoppingBag()
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromBag(item.id)}>&times;</Button>
    </Stack>
  );
}

export default BagItem