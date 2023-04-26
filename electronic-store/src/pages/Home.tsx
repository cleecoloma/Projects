import React from "react";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <div>
      <>
        <Card style={{ width: "38rem" }} className="p-3">
          <Card.Text>
            <p style={{fontSize: 24}}>
              Welcome to our PC component e-commerce website! We offer a wide
              range of high-quality computer components at competitive prices.
              From CPUs and GPUs to motherboards and RAM, we have everything you
              need to build or upgrade your PC. Our user-friendly interface
              makes it easy to navigate and find the components you need, and
              our fast and reliable shipping ensures that your order will arrive
              quickly. Shop with us today and take your PC to the next level!
            </p>
          </Card.Text>
        </Card>
      </>
    </div>
  );
}

export default Home;
