import logo from './logo.svg';
import './App.css';
import Todo from './componets/Todo';
import TodoProducts from './componets/TodoProducts';

function App() {
  return (
    <div className="App">
          
      {/* <Headers/> */}
      <TodoProducts/>
      <Todo/>  
    </div>
  );
}

export default App;
