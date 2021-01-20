import { Row, Col } from 'reactstrap';
import OrderForm from '../../components/organisms/OrderForm'
import Head from 'next/head'


export default function create() {
  

  return (
    <div>
        <Head>
        <title>Opatlytica - Create Order</title>
        <Row className="row justify-content-center">
        <Col sm='10' md='6' lg='4'>
            <OrderForm />
        </Col>
    </Row>
      </Head>  
    </div>
    
  );
}
