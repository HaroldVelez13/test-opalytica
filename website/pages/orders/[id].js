import Head from "next/head";
import { Row, Col } from "reactstrap";
import OrderListItem from "../../components/molecules/OrderListItem";
import ProcessListItem from "../../components/molecules/ProcessListItem";

function OrderDetail({ order }) {
  return (
    <div>
      <Head>
        <title>Opatlytica - Order Detail</title>
      </Head>
      <Row className="row justify-content-between">
        <Col sm="12" md="4">
          <a href={`/`} className="link">
            <OrderListItem order={order} />
          </a>
        </Col>
        <Col sm="12" md="6" className="mr-5">
          <Row>
            {order.process.map((proc) => (
              <Col xs="12" className="my-2" key={proc.pk}>
                <ProcessListItem process={proc} />{" "}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

OrderDetail.getInitialProps = async (ctx) => {
  let id = ctx.query.id;
  if (id) {
    let url = `${process.env.URL_API}/orders/${id}/`;
    const res = await fetch(url);
    const order = await res.json();
    return { order: order };
  }
};

export default OrderDetail;
