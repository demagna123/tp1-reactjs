// import { Fragment, useState } from "react";
import { Fragment, useState } from "react";
import "./App.css";
import Router from "./Providers/RouterProvider/Router";

function App() {
  // const [count, setCount] = useState<string>("1");

  // const increment = () => {
  //   setCount((count) => count + 1);
  // };


  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}

export default App;
