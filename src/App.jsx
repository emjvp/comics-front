import React from 'react'
import CustomNavBar from "./components/CustomNavbar";
import Comics from './pages/Comics';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <CustomNavBar />
      <Container>      
        <div style={{ marginTop: '70px'}}>
          <Comics/>
        </div>
      </Container>
    </>
  );
}

export default App;
