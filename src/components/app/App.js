import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ScrollUpButton from "react-scroll-up-button";

import Toc from "../toc/Toc";
import Section from "../section/Section";

import "./App.css";
import data from "./sources.json";

class App extends Component {
  render() {
    const dataMap = new Map(Object.entries(data));
    const arrayValues = [...dataMap.values()];
    return (
      <Container>
        <ScrollUpButton />
        <h1>From ES2015 to ESNext</h1>
        <Toc sourceMap={dataMap} />
        <Section data={arrayValues} />
      </Container>
    );
  }
}

export default App;
