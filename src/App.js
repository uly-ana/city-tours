import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
     </React.Fragment>
    );
  }
}
export default App;
