import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

import { HeaderProvider } from "./header-context";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Archivo:500,700&display=swap');
  body {
    font-family: 'Archivo', sans-serif;
    color: #31211B;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "hero",
      toggleMode: mode => {
        this.setState({
          mode
        });
      }
    };
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Helmet>
          <title>ByrdMR</title>
        </Helmet>
        <HeaderProvider value={this.state}>
          <Header />
          <Hero />
          <Contact />
        </HeaderProvider>
      </div>
    );
  }
}

export default App;
