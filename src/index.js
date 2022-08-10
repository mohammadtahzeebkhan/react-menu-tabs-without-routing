import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import Tabs from "./Tabs";
import { MemoryRouter, Switch, Route } from "react-router";
import Component1 from "./component1";
import "./styles.css";

function App() {
  const [active, setActive] = useState(0);

  const handleChange = (newActive) => setActive(newActive);

  return (
    <MemoryRouter>
      <div className="App">
        <Tabs active={active} onChange={handleChange}>
          <Tab title="Tab1">
            <Component1 />
          </Tab>
          <Tab title="Tab2">Paragraph yyyyyyy</Tab>
          <Tab title="Tab3">Paragraph zzzzzzz</Tab>
        </Tabs>
      </div>
    </MemoryRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
