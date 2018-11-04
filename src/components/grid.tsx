import * as React from 'react';

interface IProps {
    matrix: number[][];
}

interface IState {
    empty?: any;
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
                cells.push(<td key={"cell " + i + j}><input type='number' defaultValue={this.props.matrix[i][j].toString()} min={1} max={9} onChange={cellValueChanged} /></td>);
            }
            table.push(<tr key={"row " + i}>{cells}</tr>);
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