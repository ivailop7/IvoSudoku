import * as React from 'react';
import './App.css';
import Controls from './components/controls/controls';
import Footer from './components/footer/footer';
import Grid from './components/grid/grid';
import Header from './components/header/header';

class App extends React.Component {
  
  public matrix = this.gridGenerator();

  public gridGenerator(): number[][] {
    const matrix: number[][] = [[1,2,3,4,5,6,7,8,9],
                                [2,3,4,5,6,7,8,9,1],
                                [3,4,5,6,7,8,9,1,2],
                                [4,5,6,7,8,9,1,2,3],
                                [5,6,7,8,9,1,2,3,4],
                                [6,7,8,9,1,2,3,4,5], 
                                [7,8,9,1,2,3,4,5,6], 
                                [8,9,1,2,3,4,5,6,7],
                                [9,1,2,3,4,5,6,7,8]];
    return matrix;
  }
  
  public render() {
    console.log(this.matrix);
    return (
      <div className="App">
        <Header/>
        <br/>
        <Grid matrix={this.matrix} />
        <br/>
        <Controls/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
