import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../components/organisms/OrderList';
import {fetchOrders} from '../store/actions/orderActions'

function Orders() {
  const dispatch = useDispatch();
  const {orders} = useSelector(state=>state.order);

  useEffect(()=>{
    dispatch(fetchOrders());
  },[])

  return (
    <div >
      <Head>
        <title>Opatlytica - Orders</title>
      </Head>   
      <OrderList orders={orders}/>   
    </div>
  )
}

/* Orders.getInitialProps = async (ctx) => {
  let url = `${process.env.URL_API}/orders/`;
  const res = await fetch(url)
  const orders = await res.json()
  return { orders:orders }
} */

export default Orders
