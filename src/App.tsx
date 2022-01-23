import React, { useState } from 'react';
import styled from "styled-components"

const Wrapper = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Text = styled.h1 `
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-family: sans-serif;
  font-size: 30px;
  margin-right: 50px;
`;

const Cent = styled.div `
  justify-content: center;
  align-items: center;
`;
function App() {
  const [value, Setvalue] = useState<string>("")
  const [greeting, Setgreeting] = useState<string>("HELLO")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    Setvalue(value)
    // console.log(event.currentTarget.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let greeting = 'Hello ' + value
    Setgreeting(greeting)
    console.log('Hello', value)
  }

  return (
    <Wrapper>
      <Cent>
        <Text>{greeting}</Text>
        <form onSubmit={onSubmit}>
          <input value={value} onChange={onChange} type="text" placeholder='username' />
          <button>Log In</button>
        </form>
      </Cent>
    </Wrapper>
  );
}

export default App;
