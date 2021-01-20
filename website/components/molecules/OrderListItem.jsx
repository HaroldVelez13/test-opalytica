import { Card,  CardTitle, CardText } from "reactstrap";
import NumberFormat from "react-number-format";

const OrderListItem = ({ order }) => {
  return (
    
      <Card body className="pointer">
        <CardTitle tag="h5"> <strong>Company - </strong> {order.company}</CardTitle>
        <CardText>
        <strong>Quantity - </strong>
          <NumberFormat
            value={order.quantity}
            displayType={"text"}
            thousandSeparator={true}
          />
        </CardText>
      </Card>
  );
};



export default OrderListItem;
