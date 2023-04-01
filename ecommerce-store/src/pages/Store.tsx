import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function Store() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    })
      .catch(e => console.log(e))
    .finally(() => setLoading(false))
  },[])

  return (
    <div className="item-list">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {data.map((product) => (
        <Card className="card-item" style={{ width: "16em" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <Pdescription />
            </Card.Text>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Store;
