import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface IProps {
    clearGame?: any;
    newGame?: any;
    solveGame?: any;
}

interface IState {
    open: any;
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose} >
          <div style={{top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
            <Typography variant="title" id="modal-title" style={{color: '#ffffff'}}>
              {"Congrats!"}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description" style={{color: '#ffffff'}}>
            <br/>
                {"You solved the game successfully!"}
            </Typography>
            <br/>
            <Button variant="contained" color="primary" onClick={this.facebookSharePopup}>Share the Game on Facebook</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;