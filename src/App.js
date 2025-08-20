
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo/>
     <Form/>
    </div>
  );
}

export default App;

function Logo(){
  return(
    <div className='logo-container'>
      <h1> what do you need for the trip ✈️  </h1>
    </div>
  )
}

function Form(){
  return(
    <div className='form-container'>
      <h1> Trip Packing List🧳</h1>
      <input type='text' placeholder='..item'/>
      <select>
         <option>1</option>
         <option>2</option>
         <option>3</option>
      </select>
      <button>Add</button>
    </div>
  )
}

