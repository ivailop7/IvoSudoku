import * as React from 'react';

function renderMasterButtons() {
    const table = [];
    const cells = [];
    cells.push(<td key={"new_game"}><input type='button' value='R'/></td>);
    cells.push(<td key={"solve"}><input type='button' value='S'/></td>);
    cells.push(<td key={"restart"}><input type='button' value='N'/></td>);
    table.push(<tr key={"master_game_buttons"}>{cells}</tr>);
    return table;
}

function renderKeypad() {
    const digits = [[1,2,3],[4,5,6],[7,8,9]];
    const table = [];
    table.push(renderMasterButtons());
    for (let i = 0; i < digits.length; ++i) {
        const cells = [];
        for (let j = 0; j < digits[i].length; ++j) {
            cells.push(<td key={"control " + i + j}><input type='button' value={digits[i][j]}/></td>);
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