import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTO LA MIA NAVBAR

import NavBar from "./Components/NavBar";

// IMPORTO I COMPONENTI DA REACT-BOOTSTRAP

import { Container, Row } from "react-bootstrap";

// IMPORTO I MIEI COMPONENTI JSX CON LE RISPETTIVE CATEGORIE DI FILMS

import FilmsPixar from "./Components/FilmsPixar";
import FilmsDisney from "./Components/FilmsDisney";
import FilmsMarvel from "./Components/FilmsMarvel";

// IMPORTO IL MIO FOOTER
import Footer from "./Components/Footer";

// IMPLEMENTO LA STRUTTURA DELLA MIA PAGINA HOME

function App() {
  return (
    <div className="App" d-flex>
      <NavBar fluid />
      <Container fluid>
        <FilmsPixar />
        <FilmsDisney />
        <FilmsMarvel />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
