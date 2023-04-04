import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Pdescription from "../components/Pdescription";
import formatCurrency from "../utilities/formatCurrency";

function Store() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="item-list">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {data.map((product) => (
        <Card
          className="card-item m-2"
          style={{ width: "22em", position: "relative" }}
        >
          <Card.Img
            style={{ height: "20rem" }}
            variant="top"
            src={product.image}
          />
          <Card.Body style={{ height: "18rem" }}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <Pdescription description={product.description} />
            </Card.Text>
            <Card.Text>
              <span>{formatCurrency(product.price)}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Store;
