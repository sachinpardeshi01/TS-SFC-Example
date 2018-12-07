import * as React from 'react';
import './App.css';

// Components
import Hello from "./components/Hello";

class App extends React.Component {
  public render() {
    return (
          <Hello name="sachin"/>
      );
  }
}

export default App;
