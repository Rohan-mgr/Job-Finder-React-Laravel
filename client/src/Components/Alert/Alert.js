import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function DismissableAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p style={{ padding: "0", margin: "0" }}>{props.children}</p>
      </Alert>
    );
  }
}

export default DismissableAlert;
