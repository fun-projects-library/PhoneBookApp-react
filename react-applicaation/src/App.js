// import logo from './logo.svg';
import "./App.css";
import Blog from "./components/blog";

/* const user = {
  name: "John",
  lastName: "Doe",
  age: 45,
  email: "jdoe@email.com",
  isActive: true,
}; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 id="title">User Info</h1>
        <h3>Name: {user.name}</h3>
        <h3>LastName: {user.lastName}</h3>
        <h3>Age: {user.age}</h3>
        <h3>Email: {user.email}</h3>
        <h3>isActive: {String(user.isActive)}</h3>
        {user.isActive ? (
          <p>How are you, {user.name}!</p>
        ) : (
          <p>How are you, guest!</p>
        )} */}

        <Blog />
        <hr />
        <Blog />
        <hr />
        <Blog />

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
