import * as React from 'react';
import checkmarkImg from '../assets/checkmark_white_shadow.png';
import crossmarkImg from '../assets/crossmark_white_shadow.png';

interface IProps {
    matrix: number[][];
    ref: any;
    // clearGrid: any;
    // newGame: any;
    // solveGame: any;
}

interface IState {
    empty?: any;
}

function stylePainter(row: number, col : number): any {
    const styleObj = {
        borderBottom: '',
        borderBottomLeftRadius: '',
        borderBottomRightRadius: '',
        borderRight: '',
        borderTopLeftRadius: '',
        borderTopRightRadius: '',
    };
    if ([2,5].indexOf(row) > -1) {
        styleObj.borderBottom = "1px solid aliceblue";
    }
    if ([2,5].indexOf(col) > -1) {
        styleObj.borderRight = "1px solid aliceblue";
    }
    if(col === 0 && row === 0) {
        styleObj.borderTopLeftRadius = '20px';
    }
    if(col === 8 && row === 0) {
        styleObj.borderTopRightRadius = '20px';
    }
    if(col === 0 && row === 8) {
        styleObj.borderBottomLeftRadius = '20px';
    }
    if(col === 8 && row === 8) {
        styleObj.borderBottomRightRadius = '20px';
    }
    return styleObj;
}

function renderStatus(matrix: number[][]) {
    const isOK = <img src={checkmarkImg} width="16px" height="16px"/>;
    const notOK = <img src={crossmarkImg} width="16px" height="16px"/>;
   
    const horizontalOK = matrix.map(row => {
        return (new Set(row)).size === row.length;
    }).indexOf(false) < 0;
    
    const verticals = [];
    for (let i = 0; i < matrix.length; i++) {
        const a = [];
        for (let j = 0; j < matrix[i].length; j++) {
            a.push(matrix[j][i]);
        }
        verticals.push(a);        
    }

    const verticalOK = verticals.map(row => {
        return (new Set(row)).size === row.length;
    }).indexOf(false) < 0;

    let box1 = [];
    let box2 = [];
    let box3 = [];
    const boxValues = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i <= 2 || (i >= 3 && i <= 5) || (i >= 6 && i <= 8)) {
                if(j >= 0 && j <= 2) {
                    box1.push(matrix[i][j]);
                }
                if(j >= 3 && j <= 5) {
                    box2.push(matrix[i][j]);
                }
                if(j >= 6 && j <= 8) {
                    box3.push(matrix[i][j]);
                }
            }
            if ([2,5,8].indexOf(i) > -1 && j === 8) {
                boxValues.push(box1,box2,box3);
                box1=[];
                box2=[];
                box3=[];
            }
        }
    }

    const boxOK = boxValues.map(row => {
        return (new Set(row)).size !== row.length;
    }).some(tf => tf === false);

    return <p>Boxes {boxOK ? isOK : notOK} Verticals {verticalOK ? isOK : notOK} Horizontals {horizontalOK ? isOK : notOK}</p>;
}

class Grid extends React.Component<IProps, IState> {
    public clearGrid() {
        console.log("Clear Grid to Start");
    }
    
    public newGame() {
        console.log("New Game");
    }
    
    public solveGame() {
        console.log("Solution");
    }
    
    public cellValueChanged() {
        console.log("value Changed");
        return true;    
    }

    public renderGrid() {
        const table = [];
        for (let i = 0; i < 9; ++i) {
            const cells = [];
            for (let j = 0; j < 9; ++j) {
                cells.push(<td key={"cell " + i + j}><input type='tel' defaultValue={this.props.matrix[i][j].toString()} min={1} max={9} onChange={cellValueChanged} id={"cell" + i + j} style={stylePainter(i,j)}/></td>);
            }
            table.push(<tr key={"row " + i} >{cells}</tr>);
        }
        return table;
    }
    
    public render() { 
        console.log(this.props);
        return (<div className='Grid'>
            <table>
                <tbody>
                    {this.renderGrid()}
                </tbody>
            </table>
            <div className="Status">
                {renderStatus(this.props.matrix)}
            </div>
        </div>);
    }
}

export default Grid;