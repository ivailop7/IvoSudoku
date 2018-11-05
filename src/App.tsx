import * as React from 'react';
import Controls from './components/controls';
import Footer from './components/footer';
import Grid from './components/grid';
import Header from './components/header';

class App extends React.Component {
  
  public matrix: number[][];
  public gridRef: any;

  constructor(props: any) {
    super(props);
    this.matrix = this.gridGenerator();
    this.gridRef = React.createRef();
  }
  
  

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
        <Grid matrix={this.matrix} ref={this.gridRef}/>
        <Controls newGameFunc={this.gridRef.newGame} resetGridFunc={} solveGameFunc={} />
        <Footer/>
      </div>
    );
  }
}

export default App;
