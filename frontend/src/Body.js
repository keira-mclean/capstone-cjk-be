import React from "react";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";

export default function Body(props) {
  const pages = {
    Home: <Home setPage={props.setPage} />,
    Sell: <Sell setPage={props.setPage} />,
    Buy: <Buy setPage={props.setPage} />,
    Contact: <Contact setPage={props.setPage} />
  };

  return (
    <>
      <div>{pages[props.page]}</div>
    </>
  );
}
