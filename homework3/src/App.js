import "./App.css";
import { useState } from "react";

import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
function App() {
  const darkMode = () => {
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    ></div>;
  };
  const lightMode = () => {
    <div
      style={{
        backgroundColor: "darkMode",
        color: "black",
      }}
    ></div>;
  };
  const [styleMode, setStyleMode] = useState(lightMode);

  const toggleStyle = () => {
    setStyleMode((prevStyleMode) =>
      prevStyleMode === lightMode ? darkMode : lightMode
    );
  };

  return (
    <div style={{ styleMode }}>
      <>
        <div>
          <button onClick={toggleStyle}>styleMode</button>

          <header>
            <Header styleMode={styleMode} />
          </header>
          <main>
            <Content styleMode={styleMode} />
          </main>
          <footer>
            <Footer styleMode={styleMode} />
          </footer>
        </div>
      </>
    </div>
  );
}

export default App;
