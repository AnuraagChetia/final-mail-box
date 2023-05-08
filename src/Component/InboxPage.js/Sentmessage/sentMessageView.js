import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SentMessageView = (props) => {
  const mymailmessageView = useSelector((state) => state.mymail.messageView);
  return (
    <React.Fragment>
      <Card className="mt-3">
        <Card.Header>
          <h3>{mymailmessageView.subject}</h3>
        </Card.Header>
        <Card.Body>
          <p className="mb-5">{mymailmessageView.text}</p>
        </Card.Body>
        <Card.Footer>
          <h6>{mymailmessageView.email}</h6>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
};

export default SentMessageView;
