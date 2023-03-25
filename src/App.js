import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import { useState } from 'react';
import MyComponent from "./components/MyComponent";



const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [counter, setCount] = useState(0);

  function handleClick() {
    setCount(counter+1);
    console.log(counter);
  }

  return (
    <div className="App">
      <MyButton count={counter} onclick={handleClick}/>
      <MyButton count={counter} onclick={handleClick}/>
      <Profile/>
      <MyComponent></MyComponent>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header> */}
    </div>

  );
}

const MyButton = ({count, onclick}) => {

  return (
    <div>
      <button onClick={onclick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  )
}

const Profile = () => {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height:user.imageSize
        }}
      />
    </>
  )
}

export default App;
