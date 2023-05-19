import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Questions(props) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <Container>
      <Header>
        <p>{props.faq.header}</p>
        <Add onClick={handleClick}>{show ? <span>&#215;</span> : "+"}</Add>
      </Header>
      {show && (
        <Details>
          <p>{props.faq.body}</p>
        </Details>
      )}
    </Container>
  );
}

const Container = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #303030;
  font-size: 25px;
  padding: 1rem 1rem 1rem 2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  p {
    color: white;
    font-weight: 100;
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    p {
      font-size: 2rem;
    }
  }
`;

const Add = styled.div`
  font-size: 40px;
  padding: 1rem;
  cursor: pointer;
  color: white;
`;

const Details = styled.div`
  background-color: #303030;
  font-size: 25px;
  padding: 35px;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 2px;
  line-height: 1.7;
  transition: all 2s;
  p {
    color: white;
    font-weight: 100;
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 500px) and (max-width: 1024px) {
    p {
      font-size: 2rem;
    }
  }
`;