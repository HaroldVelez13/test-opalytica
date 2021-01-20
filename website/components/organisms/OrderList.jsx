import { Row, Col } from "reactstrap";
import OrderListItem from '../molecules/OrderListItem'
import OrderListCreate from '../molecules/OrderListCreate';


export default function OrderList({ orders }) {
  return (
    <Row>
        <Col sm='12' md='6' lg='4' className='my-2'>
        <OrderListCreate />

        </Col>
      {orders.map((order) => (
        <Col key={order.pk} sm='12' md='6' lg='4' className='my-2'>
            <a href={`/orders/${order.pk}`} className="link" >
            <OrderListItem order={order}/>
            </a>
        </Col>
      ))}
    </Row>
  );
}
