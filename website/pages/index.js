import Head from 'next/head'
import OrderList from '../components/organisms/OrderList';

function Orders({orders}) {
  return (
    <div >
      <Head>
        <title>Opatlytica - Orders</title>
      </Head>   
      <OrderList orders={orders}/>   
    </div>
  )
}

Orders.getInitialProps = async (ctx) => {
  let url = `${process.env.URL_API}/orders/`;
  const res = await fetch(url)
  const orders = await res.json()
  return { orders:orders }
}

export default Orders
