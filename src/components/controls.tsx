import * as React from 'react';
import eraseImg from '../assets/eraser_white.png';
import restartImg from '../assets/restart_white.png';
import solveImg from '../assets/solve_white.png';

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
    if(col === 2 && row === 0) {
        styleObj.borderTopRightRadius = '20px';
    }
    if(col === 0 && row === 3) {
        styleObj.borderBottomLeftRadius = '20px';
    }
    if(col === 2 && row === 3) {
        styleObj.borderBottomRightRadius = '20px';
    }
    return styleObj;
}

function renderKeypad() {
    const imageSrc = [eraseImg, solveImg, restartImg];
    const keypad = [['R','S','N'],[1,2,3],[4,5,6],[7,8,9]];
    const table = [];
    for (let i = 0; i < keypad.length; ++i) {
        const cells = [];
        for (let j = 0; j < keypad[i].length; ++j) {
            cells.push(<td key={"control " + i + j}><input type={i === 0 ? "image" : "button"} src={i === 0 ? imageSrc[j] : ''} value={i === 0 ? '' : keypad[i][j]} id={"btnGame" + i + j} style={stylePainter(i,j)}/></td>);
        }
        table.push(<tr key={"controlRow " + i}>{cells}</tr>);
    }
    return table;
}

const controls = () => {
    return(
        <div className='Controls'>
            <table>
                <tbody>
                    {renderKeypad()}
                </tbody>
            </table>
        </div>
    );
};

export default controls;