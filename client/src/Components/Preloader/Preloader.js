import React, { useState, useEffect, useRef } from "react";
import "./Preloader.css";
import { CSSTransition } from "react-transition-group";

function Preloader(props) {
  const nodeRef = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7700);
    return () => clearTimeout();
  }, []);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={loading}
      timeout={300}
      onExiting={() => props.setAnimatedPage(false)}
      unmountOnExit
    >
      <div id="preloader"></div>
    </CSSTransition>
  );
}

export default Preloader;
