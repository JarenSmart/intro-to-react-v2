// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { Router, Link } from "@reach/router";
// import Details from "./Details";
// import SearchParams from "./SearchParams";
// import ThemeContext from "./ThemeContext";

// const App = () => {
//   const theme = useState("darkblue");
//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <header>
//           <Link to="/">Adopt Me!</Link>
//         </header>
//         <Router>
//           <SearchParams path="/" />
//           <Details path="/details/:id" />
//         </Router>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Charlotte",
      animal: "Dog",
      breed: "Pug",
    }),
    React.createElement(Pet, {
      name: "Stella",
      animal: "Dog",
      breed: "Lab",
    }),
    React.createElement(Pet, {
      name: "Hobbes",
      animal: "Cat",
      breed: "Orange Tabby",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
