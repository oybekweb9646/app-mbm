
import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import ServicesPage from "./components/ServicesPage";
import AboutUs from "./components/AboutUs";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";


function App(props) {
  return (
    <div>

<BrowserRouter>
<Switch>
<Route exact path="/" component={MainPage} />
<Route exact path="/services" component={ServicesPage} />
<Route exact path="/ourTeam" component={AboutUs} />
<Route exact path="/portfolio" component={PortfolioPage} />
<Route exact path="/contact" component={ContactPage} />
</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
