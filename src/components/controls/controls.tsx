import * as React from 'react';

function renderControls() {
    const digits = [[1,2,3],[4,5,6],[7,8,9]];
    const table = [];
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
        <div className='Controls-Style' id='Controls' style={{ marginLeft: "46%"}}>
            <table>
                <tbody>
                    {renderControls()}
                </tbody>
            </table>
        </div>
    );
};

export default controls;