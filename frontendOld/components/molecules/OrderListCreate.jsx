import { Card,  CardTitle, CardText  } from "reactstrap";

const OrderListCreate = ({ order }) => {
  return (
      <a href="/orders/create/" className="link">
      <Card body className="text-center">
        <CardTitle tag="h5"> <i className="fas fa-plus-circle"></i></CardTitle>
        <CardText>
          Create new Order
        </CardText>
      </Card>
      </a>
  );
};



export default OrderListCreate;
