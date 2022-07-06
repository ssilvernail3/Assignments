import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
            <p className="font-weight-bold">
            <small><i>Current Number of Snacks: {snacks.length}</i></small>
            </p>
            <p className="font-weight-bold">
              <small><i>Current Number of Drink: {drinks.length}</i></small>
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
