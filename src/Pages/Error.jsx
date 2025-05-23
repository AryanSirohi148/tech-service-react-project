import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
        
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 90 rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
`;

export default Error;