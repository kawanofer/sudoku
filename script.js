const rows = 9;
const cols = 9;
let currentCol = 0;

function checkCol(numbers) {
  console.log(currentCol, "new numbers: ", numbers);
  for (let i = 0; i < cols; i++) {
    if (matrix[currentCol][i] === numbers[i]) {
      console.log(
        matrix[currentCol][i],
        numbers[i],
        "===",
        matrix[currentCol][i] === numbers[i]
      );
      matrix[currentCol][i + 1] = numbers[i + 1];
      matrix[currentCol][i] = numbers[i];
      break;
    } else {
      matrix[currentCol][i] = numbers[i];
    }
  }
  generatingSudokuNumbers();
  console.log(" MATRIX: ", matrix);
}

function checkGroup() {}
let numbersList = [];

function generatingSudokuNumbers() {
  console.log("+++ Generating Sudoku Numbers +++");
  document.addEventListener("DOMContentLoaded", function () {
    const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    currentCol++;
    checkCol(numbers);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cellValue = matrix[row][col];
        // Do something with the cell value, for example, log it to the console
        // console.log(`Matrix[${row}][${col}] = ${cellValue}`);
      }
    }
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// GENERATING THE BASIC SUDOKU`S GRID
function generateSudokuGrid() {
  document.addEventListener("DOMContentLoaded", function () {
    const sudokuContainer = document.getElementById("sudoku");

    const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log("FIRST LINE: ", numbers);

    if (numbersList.length === 0) {
      matrix[0] = item;
    }
    console.log("M ", matrix);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cellValue = matrix[row][col];
        // Do something with the cell value, for example, log it to the console
        console.log(`${row}-${col} - Matrix[${row}][${col}] = ${cellValue}`);

        const item = document.createElement("div");
        item.className = "item";

        const input = document.createElement("input");
        input.id = cellValue;
        input.value = cellValue;
        input.disabled = false;
        item.appendChild(input);
        sudokuContainer.appendChild(item);
      }
    }
  });
}

// CREATING THE BASIC MATRIX
function createMatrix(rows, cols, initialValue = 0) {
  return Array.from({ length: rows }, () => Array(cols).fill(initialValue));
}

// Initializing 9x9 Matrix
const matrix = createMatrix(rows, cols);
generateSudokuGrid();
generatingSudokuNumbers();
