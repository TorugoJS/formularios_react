
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">

      <h2>Forms</h2>

      <MyForm user={{name:"Victor", email:"victor@gmail.com"}} />
      
    </div>
  );
}

export default App;
