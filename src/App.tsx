import React from 'react';
//packages
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ThemeProvider } from "styled-components"
//style
import { GlobalStyles } from './GlobalStyle/GlobalStyles';
//components
import { Header } from './Components/Header';
import { Home } from './routes/Home';

function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const theme = {
    //colors:
    primaryColor: "#1C1C1C",
    defaultColor: "#0D3D66",
    hoverColor: "#F76A40",
    ligthText: "#4d4d4d",
    darkText: "#333",

    //fonts:
    primaryFont: 'Roboto, sans-serif',
    secondaryFont: 'Open Sans, sans serif'
  }

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>

        </Route>
      </Router >
    )
  }


  return (
    <React.Fragment>

      <Router>

        <ThemeProvider theme={theme}>

          <GlobalStyles />

          <Header isOpen={isOpen} setIsOpen={setIsOpen} />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </ThemeProvider>

      </Router>


    </React.Fragment>
  );
}

export default App;
