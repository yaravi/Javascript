import './App.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import React from 'react';
import Foto from './Components/Foto';
import AcercaDeMi from './Components/AcercaDeMi';

function App() {
  return (
    <React.StrictMode>
    <Header />
    <Formulario />
    <main>
      <Foto bgColor="grey" srcFoto="https://scontent.fmex11-1.fna.fbcdn.net/v/t39.30808-6/240657734_10158329301671370_6230772969085813165_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oEmgo4MlT3sAX-7GJjf&_nc_ht=scontent.fmex11-1.fna&oh=64b0496095bacabdfefc03eb1edc01f2&oe=61877D71"/>
    <AcercaDeMi />
    </main>
    </React.StrictMode>
  );
}

export default App;
