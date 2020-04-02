import React from 'react'

// importando componentes
import Home from './pages/Home'
import Busca from './pages/Busca'
import Ajuda from './pages/Ajuda'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Parceiro from './pages/Parceiro'

// trabalhando com as rotas de cada componente
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/Busca"><Busca /></Route>
          <Route exact path="/Ajuda"><Ajuda /></Route>
          <Route exact path="/Contato"><Contato /></Route>
          <Route exact path="/Sobre"><Sobre /></Route>
          <Route exact path="/Parceiro"><Parceiro /></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
