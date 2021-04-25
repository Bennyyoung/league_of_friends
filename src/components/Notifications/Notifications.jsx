import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "context";

export const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )} 
    </div>
  );
};

