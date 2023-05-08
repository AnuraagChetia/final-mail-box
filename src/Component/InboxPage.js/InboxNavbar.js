import React from "react";
import "./Inbox.css";
import { Container, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { AuthsliceAction } from "../../Store/Auth";
import { useDispatch } from "react-redux";
const InboxNavbar = () => {
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthsliceAction.Login());
  };
  return (
    <>
      <Navbar className="border-bottom border-primary mb-1">
        <Container fluid>
          <div>
            <h1>Mail Box Client</h1>
          </div>
        </Container>
        <Button variant="warning" onClick={logoutHandler}>
          LogOut
        </Button>
      </Navbar>
    </>
  );
};
export default InboxNavbar;
