import React from 'react';
import Champions from './components/Champions';
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-size: 3rem;
`

function App() {
  return (
    <div className="App">
      <Title>League of Legends Champions</Title>
      <Champions />
    </div>
  );
}

export default App;