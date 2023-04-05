import { Card } from "react-bootstrap"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}


function StoreItem({id, name, price, imgUrl} : StoreItemProps) {
  return (
    <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"}} />
  )
}

export default StoreItem