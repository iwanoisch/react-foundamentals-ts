import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {Confirm} from "./components/Confirm";

class AppContent extends React.Component{

  private  handleOkClick = () => {
    console.log('Ok clicked');
  };

  private handleCancelClick= () => {
    console.log('Cancel clicked');
  };

  render(): React.ReactNode {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Confirm title="React and TypeScript"
                   content="Are you sure you want to learn React and TypeScript?"
                   cancelCaption="No way"
                   okCaption="Yes please!"
                   onCancelClick={this.handleCancelClick}
                   onOkClick={this.handleOkClick}
          />
        </div>
    )
  }
}

export const App = () => {
  return(
      <AppContent />
  )
};

// const App: React.FC = () => {
//   return (
//
//   );
// };
//
// export default App;
