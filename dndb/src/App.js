import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}


export default App;
