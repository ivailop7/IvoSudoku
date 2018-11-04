import * as React from 'react';

interface IProps {
    matrix: number[][];
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

function cellValueChanged() {
    console.log("value Changed");
    return true;    
}

class Grid extends React.Component<IProps, IState> {

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
        </div>);
    }
}

export default Grid;