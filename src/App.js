import './App.css';
import { ProgramarCirugia, Header } from './componentes/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgramarCirugia />
      <ion-icon name="lock-closed-outline"></ion-icon>
      <ion-icon name="person-circle-outline"></ion-icon>
    </div>
  );
}

export default App;
