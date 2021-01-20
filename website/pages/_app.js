import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import NavBar from "../components/atoms/NavBar";
import { Container } from "reactstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{backgroundColor:'#eef3f5'}}>
      <NavBar />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
