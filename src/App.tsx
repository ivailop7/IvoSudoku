import * as React from 'react';
import Controls from './components/controls';
import Footer from './components/footer';
import Grid from './components/grid';
import Header from './components/header';

class App extends React.Component {

  public child: any;

  constructor(props: any) {
    super(props);
    this.child = React.createRef<Grid>();
  }
  
  public appNew = () => { this.child.current.newGame(); }
  public appSolve = () => { this.child.current.solveGame(); }
  public appReset = () => { this.child.current.clearGame(); }
  
  public render() {
    return (
      <div className="App">
        <Header/>
        <Grid ref={this.child} />
        <Controls triggerNew={this.appNew} triggerSolve={this.appSolve} triggerReset={this.appReset} />
        <Footer/>
      </div>
    );
  }
}

export default App;
