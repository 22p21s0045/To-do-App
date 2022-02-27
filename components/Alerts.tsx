import React from "react";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import {useEffect} from "react";
function Alerts(props: any) {
  const [Status, setStatus] = useState(props.status);
  const [Message, setMessage] = useState(props.message);
  useEffect(() => {
    setStatus(props.status);
    setMessage(props.message);
  }, [props.status, props.message]);
  return (
    <div >
      <Alert severity={Status}>{Message} </Alert>
    </div>
  );
}
Alerts.defaultProps = {
  status: "info",
  message: "Ready for submit 🐱",
};

export default Alerts;
