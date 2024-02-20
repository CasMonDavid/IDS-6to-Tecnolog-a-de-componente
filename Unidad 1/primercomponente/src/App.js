import logo from './logo.svg';
import './App.css';
import CustomInput from './CustomInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomInput label={"Nombre"} disabled={false} />
        <CustomInput label={"Apellido"} disabled={false}/>
        <CustomInput label={"Contraseña"} disabled={false}/>
        <button variant="outlined">Enviar</button>
      </header>
    </div>
  );
}

export default App;
