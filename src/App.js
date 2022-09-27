import { Component, tags } from "@odoo/owl";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

const APP_TEMPLATE = tags.xml/*xml*/ `
<main>
  <Home/>
  <Footer/>
</main>
`;

export class App extends Component {
  static components = { Navbar, Footer, Home };
  static template = APP_TEMPLATE;
}
