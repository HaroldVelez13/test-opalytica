import App from 'next/app';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store';
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import NavBar from "../components/atoms/NavBar";
import { Container } from "reactstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


class MyApp extends App {
  render(){
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
      <div style={{backgroundColor:'#eef3f5'}}>
        <NavBar />
        <Container fluid>
          <Component {...pageProps} />
        </Container>
      </div>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp);
