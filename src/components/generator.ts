// Works only for 9x9 matrix and a sub-box of 3
export class GridGenerator {

	private grid: number[];
	private correctOrder:string; 

	constructor() {
		this.grid = Array.apply(null, Array(9 * 9)).map(Number.prototype.valueOf, 0);
		this.correctOrder = [1,2,3,4,5,6,7,8,9].join();
		this.populateStartGrid();
		this.populateRemainingGrid();
	}

	public getMatrix = () => {
		const matrix = []; 
		for (let i=0, j = this.grid.length; i<j; i += 9) {
			const temp = this.grid.slice(i, i + 9);
			matrix.push(temp);
		}
		return matrix;
	}

	private shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// We can populate boxes 0,4,8 irrespective of how numbers end up positioned.
	// To reduce population time for the remaining cells
	// I'll just list them, as it will take me longer to do generation loops
	private populateStartGrid = () => {
		const box0 = [0,1,2,9,10,11,18,19,20];
		const box4 = [30,31,32,39,40,41,48,49,50];
		const box8 = [60,61,62,69,70,71,78,79,80];
		const cellPos = [box0, box4, box8];
		cellPos.forEach(arrayOfCellIds => {
			const shuffledVals = this.shuffleArray([1,2,3,4,5,6,7,8,9]);
			arrayOfCellIds.forEach((id,idx) => {
				this.grid[id] = shuffledVals[idx];
			});
		});
	}

	private populateRemainingGrid = () => {
		const saved = [];
		const currentGridState = [];
		let next;
		while (!this.isDone()) {
			next = this.resolvesToSingleValue();
			if (!next) {
				next = saved.pop();
				this.grid = currentGridState.pop();
			}
			const numberToTest = this.pickRandomNumber(next);
			const tryToPopulate = this.determineRandomPossibleValue(next, numberToTest);
			if (next[numberToTest].length>1) {
				next[numberToTest] = this.deleteTry(next[numberToTest], tryToPopulate);
				saved.push(next.slice());
				// Create a deep copy of the grid so far
				currentGridState.push(this.grid.slice());
			}		
			this.grid[numberToTest] = tryToPopulate;
		}
	}

	private getBox = (cell) => {
		return Math.floor((Math.floor(cell / 9)) / 3) * 3 + Math.floor((cell % 9) / 3);
	}

	private isValidRow = (num, row) => {
		for (let i = 0; i < 9; ++i) {
			if (this.grid[row * 9 + i] === num) {			
				return false;
			}
		}
		return true;
	}

	private isValidColumn = (num, col) => {
		for (let i=0; i < 9; ++i) {
			if (this.grid[col + 9 * i] === num) {			
				return false;
			}
		}
		return true;
	}

	private isValidBox = (num, box) => {
		for (let i=0; i < 9; ++i) {
			if (this.grid[Math.floor(box / 3) * 27 + i%3 + 9 * Math.floor(i / 3) + 3 * (box % 3)] === num) {			
				return false;
			}
		}
		return true;
	}

	private isValidPosition = (cell,num) => {
		return this.isValidRow(num, Math.floor(cell / 9)) && 
			   this.isValidColumn(num, cell % 9) && 
			   this.isValidBox(num, this.getBox(cell));
	}

	private isRowOk = (row) => {
		const rowTemp = [];
		for (let i=0; i < 9; ++i) {		
			rowTemp[i] = this.grid[row * 9 + i];
		}
		return rowTemp.sort().join() === this.correctOrder;
	}

	private isColumnOk = (col) => {
		const colTemp = [];
		for (let i=0; i < 9; ++i) {		
			colTemp[i] = this.grid[col + i * 9];
		}
		return colTemp.sort().join() === this.correctOrder;
	}

	private isBoxOk = (box) => {
		const boxTemp = [];
		for (let i=0; i < 9; ++i) {
			boxTemp[i] = this.grid[Math.floor(box / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (box % 3)];
		}
		return boxTemp.sort().join() === this.correctOrder;
	}

	private isDone = () => {
		for (let i=0; i < 9; ++i) {
			if (!this.isRowOk(i) || !this.isBoxOk(i) || !this.isColumnOk(i)) {			
				return false;
			}
		}
		return true;
	}

	private getPossibleNumbers = (cell) => {
		const possible = [];
		for (let i=1; i<=9; ++i) {
			if (this.isValidPosition(cell,i)) {			
				possible.push(i);
			}
		}
		return possible;
	}

	private determineRandomPossibleValue = (possible, cell) => {
		const randomPicked = Math.floor(Math.random() * possible[cell].length);
		return possible[cell][randomPicked];
	}
	
	private resolvesToSingleValue = () => {
		const possible = [];
		for (let i=0; i < 9 * 9; ++i) {
			if (this.grid[i] === 0) {
				possible[i] = [];
				possible[i] = this.getPossibleNumbers(i);
				if (possible[i].length===0) {
					return false;			
				}
			}
		}
		return possible;
	}

	private deleteTry = (attemptArray, num) => {
		const newArray = [];
		for (let i=0; i < attemptArray.length; ++i) {
			if (attemptArray[i] !== num) {		
				newArray.push(attemptArray[i]);
			}
		}
		return newArray;
	}

	private pickRandomNumber = (possible) => {
		let max = 9;
		let minChoices = 0;
		for (let i=0; i < 9 * 9; ++i) {
			if (possible[i] && (possible[i].length <= max) && (possible[i].length > 0)) {
				max = possible[i].length;
				minChoices = i;			
			}
		}
		return minChoices;
	}
}

export default GridGenerator;