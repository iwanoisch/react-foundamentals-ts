import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {Confirm} from "./components/Confirm";

interface State {
    confirmOpen: boolean;
    confirmMessage: string;
}

class AppContent extends React.Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            confirmOpen: true,
            confirmMessage: 'Please hit the confirm button',
        }
    }

    private handleOkConfirmClick= () => {
        this.setState({confirmOpen: false, confirmMessage: 'Cool, carry on reading!'});
    };

    private handleCancelConfirmClick  = () => {
        this.setState({confirmOpen: false, confirmMessage: 'Take a break, I\'m sure you will later ...'});
    };

    private handleConfirmClick= () => {
      this.setState({confirmOpen: true});
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
            <p>{this.state.confirmMessage}</p>
            <button onClick={this.handleConfirmClick}>Confirm</button>
          <Confirm
              open={this.state.confirmOpen}
              title="React and TypeScript"
              content="Are you sure you want to learn React and TypeScript?"
              cancelCaption="No way"
              okCaption="Yes please!"
              onCancelClick={this.handleCancelConfirmClick}
              onOkClick={this.handleOkConfirmClick}
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
