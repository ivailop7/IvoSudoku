import Button from '@material-ui/core/Button';
import * as React from 'react';

interface IProps {
    clearGame?: any;
    newGame?: any;
    solveGame?: any;
}

interface IState {
    open?: any;
}

    

class SimpleModal extends React.Component<IProps, IState> {
  public componentDidMount() {
      this.handleOpen();
  }
  public handleOpen = () => {      
    this.setState({ open: true });
  }
  public handleClose = () => {
    this.setState({ open: false });
  }
  
  public facebookSharePopup = () => {
    window.open(
        `http://www.facebook.com/sharer.php?u=http://sudoku.ivaylopavlov.com`,
        'facebook-share-dialog',
        'width=626,height=436');
  }
  
  public render() {
    return (
      <div>     
          <div style={{backgroundColor: '#034D00', boxShadow: '#333333', top: `50%`, left: `50%`}}>
              <h3>{"Congrats!"}</h3>
            <br/>
              <h4>{"You solved the game successfully!"}</h4>
            <br/>
            <Button variant="contained" color="primary" onClick={this.facebookSharePopup}>Share the Game on Facebook</Button>
          </div>
      </div>
    );
  }
}
export default SimpleModal;