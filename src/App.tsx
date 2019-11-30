import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {Confirm} from "./components/Confirm";

interface State {
    confirmOpen: boolean;
    confirmMessage: string;
    confirmVisible: boolean,
    countDown: number;
}

class AppContent extends React.Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            confirmOpen: false,
            confirmMessage: 'Please hit the confirm button',
            confirmVisible: true,
            countDown: 10,
        }
    }

    private timer: number = 0;
    private renderCount = 0;

    public componentDidMount() {
        this.timer = window.setInterval(() => this.handleTimerTick(), 1000)
    }

    public handleTimerTick() {
        this.setState({confirmOpen: false,
            confirmMessage: `Please hit the confirm button ${this.state.countDown} sec to go`,
            countDown: this.state.countDown -1 },
            () => {
                if(this.state.countDown <= 0) {
                    clearInterval(this.timer);
                    this.setState({
                        confirmMessage: "Too late to confirm!",
                        confirmVisible: false
                    })
                }
            }
        );
    }

    private handleConfirmClick= () => {
      this.setState({confirmOpen: true});
      clearInterval(this.timer);
  };

    private handleOkConfirmClick= () => {
        this.setState({confirmOpen: false, confirmMessage: 'Cool, carry on reading!'});
        clearInterval(this.timer);
    };

    private handleCancelConfirmClick  = () => {
        this.setState({confirmOpen: false, confirmMessage: 'Take a break, I\'m sure you will later ...'});
        clearInterval(this.timer);
    };

    public componentWillUnmount() {
        clearInterval(this.timer);
    }

    // viene invocato ogni voltaviene reso un componente.
    // Può essere usatoper cambiare stato quando cambiano determinati oggetti di scena.
    // Questo è un metodo statico in una classe di componenti che restituisce lo stato
    // modificato o null se non sono presenti modifiche allo stato.
    public static getDerivedStateFromProps(props: {}, state: State) {
            console.log('getDerivedStateFromProps', props, state);
            return null;
    }

    // getSnapshotBeforeUpdateviene chiamato poco primail DOM viene aggiornato.
    // Il valore cheviene restituito da getSnapshotBeforeUpdateviene passato a componentDidUpdate.

    public getSnapshotBeforeUpdate(prevProps: {}, prevState: State){
        this.renderCount +=1 ;
        console.log("getSnapshotBeforeUpdate", prevProps, prevState, {
            renderCount: this.renderCount
        });
        return this.renderCount;
    }

    // componentDidUpdate si chiama non appena il DOM viene aggiornato.
    // Ridimensionare la finestradurante il rendering è un esempio di
    // quando getSnapshotBeforeUpdatepuò essere utile.
    public componentDidUpdate(prevProps: {}, prevState: {}, snapshot: number) {
        console.log("componentDidUpdate", prevProps, prevState,
            snapshot, {
                renderCount: this.renderCount
            });
    }
    // viene invocato poco primail rendering avviene.
    // Restituisce un booleanovalore che determina se il rendering deve avvenire.
    // Può essere utilizzato per ottimizzare le prestazioni, evitando cicli di rendering non necessari.
    public shouldComponentUpdate(nextProps: {}, nextState: State, nextContext: any) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }


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
