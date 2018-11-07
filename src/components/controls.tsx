import * as React from 'react';
import eraseImg from '../assets/eraser_white.png';
import restartImg from '../assets/restart_white.png';
import solveImg from '../assets/solve_white.png';

interface IProps {
    triggerNew: any;
    triggerSolve: any;
    triggerReset: any;
}

interface IState {
    empty?: any;
}

function stylePainter(col : number): any {
    const styleObj = {
        borderBottomLeftRadius: '',
        borderBottomRightRadius: '',
        borderTopLeftRadius: '',
        borderTopRightRadius: '',
    };
    if (col === 0) {
        styleObj.borderTopLeftRadius = '20px';
        styleObj.borderBottomLeftRadius = '20px';
    }
    if (col === 2) {
        styleObj.borderTopRightRadius = '20px';
        styleObj.borderBottomRightRadius = '20px';
    }
    return styleObj;
}

class Controls extends React.Component<IProps, IState> {

    public renderControls() {
        const imageSrc = [eraseImg, solveImg, restartImg];
        const imageFunc = [this.props.triggerReset, this.props.triggerSolve, this.props.triggerNew]
        const keypad = [['R','S','N']];
        const table = [];
        for (let i = 0; i < keypad.length; ++i) {
            const cells = [];
            for (let j = 0; j < keypad[i].length; ++j) {
                cells.push(<td key={"control " + i + j}><input type={"image"} src={imageSrc[j]} style={stylePainter(j)} onClick={imageFunc[j]} /></td>);
            }
            table.push(<tr key={"controlRow " + i}>{cells}</tr>);
        }
        return table;
    }
    
    
    public render() {
        return <div className='Controls'>
            <table>
                <tbody>
                    {this.renderControls()}
                </tbody>
            </table>
        </div>
    };
}

export default Controls;