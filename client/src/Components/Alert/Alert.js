import React from "react";
import Alert from "react-bootstrap/Alert";

function DismissableAlert(props) {
  if (props.error) {
    return (
      <Alert
        variant={props.Success ? "success" : "danger"}
        onClose={() => props.SetError(null)}
        dismissible
      >
        <p style={{ padding: "0", margin: "0" }}>{props.children}</p>
      </Alert>
    );
  }
}

export default DismissableAlert;
