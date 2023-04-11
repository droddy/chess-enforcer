import { GetNewBoard, MovePiece } from "./board-commands";
import { Team } from "./enum";
import Board, { Square } from "./types";
let board = GetNewBoard();
let a6 = board.find((square) => square.file === 'a' && square.rank === 6);
let a7 = board.find((square) => square.file === 'a' && square.rank === 7);
let a8 = board.find((square) => square.file === 'a' && square.rank === 8);
let b2 = board.find((square) => square.file === 'b' && square.rank === 2);
let b3 = board.find((square) => square.file === 'b' && square.rank === 3);
let b4 = board.find((square) => square.file === 'b' && square.rank === 4);
let b5 = board.find((square) => square.file === 'b' && square.rank === 5);
let b6 = board.find((square) => square.file === 'b' && square.rank === 6);
let b7 = board.find((square) => square.file === 'b' && square.rank === 7);
let b8 = board.find((square) => square.file === 'b' && square.rank === 8);
let c6 = board.find((square) => square.file === 'c' && square.rank === 6);
let c8 = board.find((square) => square.file === 'c' && square.rank === 8);
let d5 = board.find((square) => square.file === 'd' && square.rank === 5);
let d7 = board.find((square) => square.file === 'd' && square.rank === 7);
let e2 = board.find((square) => square.file === 'e' && square.rank === 2);
let e4 = board.find((square) => square.file === 'e' && square.rank === 4);
let e5 = board.find((square) => square.file === 'e' && square.rank === 5);
let e6 = board.find((square) => square.file === 'e' && square.rank === 6);
let e7 = board.find((square) => square.file === 'e' && square.rank === 7);
let f1 = board.find((square) => square.file === 'f' && square.rank === 1);
let f2 = board.find((square) => square.file === 'f' && square.rank === 2);
let f3 = board.find((square) => square.file === 'f' && square.rank === 3);
let f4 = board.find((square) => square.file === 'f' && square.rank === 4);
let f7 = board.find((square) => square.file === 'f' && square.rank === 7);
let h2 = board.find((square) => square.file === 'h' && square.rank === 2);
let h3 = board.find((square) => square.file === 'h' && square.rank === 3);
let h4 = board.find((square) => square.file === 'h' && square.rank === 4);

const printBoard = () => {
    let boardCopy = [[], [], [], [], [], [], [], []];

    board.forEach((square) => {
        let piece = square.piece ? square.piece : undefined;
        // console.debug(`piece: ${JSON.stringify(piece)}`)
        if (!!piece) {
            // console.debug(`targeting boardcopy[${square.rank - 1}]`)
            boardCopy[Math.abs(square.rank - 8)].push(`${piece.symbol}`)
        } else {
            // console.debug(`targeting boardcopy[${square.rank - 1}]`)
            boardCopy[Math.abs(square.rank - 8)].push(`${square.file}${square.rank}`)
        }
    });
    console.table(boardCopy);
}

printBoard();


let newBoard: Board

// WHITE TURN
console.log('app -- e2-e4 -- Legal');
newBoard = MovePiece(e2, e4, board, Team.white) // this should work as the first move of white 
if (!!newBoard) {
    board = newBoard;
}
printBoard();

// ILLEGAL TURN
console.log('');
console.log('app -- f2-f4 -- ILLEGAL - Wrong Team');
newBoard = MovePiece(f2, f4, board, Team.black) // this should not work because the turn should be black 
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// BLACK TURN
console.log('');
console.log('app -- e7-e5 -- Legal');
newBoard = MovePiece(e7, e5, board, Team.black) // this should work for black's first move
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL WHITE TURN
console.log('');
console.log('app -- e4-e5 -- ILLEGAL - pawn, capture not diagonal');
newBoard = MovePiece(e4, e5, board, Team.white) // this should not work for white pawn to capture straight ahead
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// WHITE TURN
console.log('');
console.log('app -- b2-b3 -- Legal');
newBoard = MovePiece(b2, b3, board, Team.white) // this should work for white pawn to move one space forward
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// BLACK TURN
console.log('');
console.log('app -- a7-a6 -- Legal');
newBoard = MovePiece(a7, a6, board, Team.black) // this should work for black pawn to move one space forward
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL WHITE TURN
console.log('');
console.log('app -- b3-b5 -- ILLEGAL - pawn, 2 spaces from not start');
newBoard = MovePiece(b3, b5, board, Team.white) // this should not work for white pawn to move two spaces forward from non-start position
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL WHITE TURN
console.log('');
console.log('app -- b3-b4 -- Legal');
newBoard = MovePiece(b3, b4, board, Team.white) // this should not work for white pawn to move two spaces forward from non-start position
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// BLACK TURN
console.log('');
console.log('app -- d7-d5 -- Legal');
newBoard = MovePiece(d7, d5, board, Team.black) // this should work for black pawn to move two spaces forward
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// WHITE TURN
console.log('');
console.log('app -- e4-d5 -- Legal');
newBoard = MovePiece(e4, d5, board, Team.white) // this should work for white pawn to capture black pawn on the diagonal
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL BLACK TURN
console.log('');
console.log('app -- b7-a6 -- ILLEGAL - cannot capture own team');
newBoard = MovePiece(b7, a6, board, Team.black) // this should NOT work for black pawn to capture black pawn
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL BLACK TURN
console.log('');
console.log('app -- b7-c6 -- ILLEGAL - diagonal pawn must be a capture');
newBoard = MovePiece(b7, c6, board, Team.black) // this should NOT work for black pawn to move on the diagonal without capture
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL BLACK TURN
console.log('');
console.log('app -- f7-f4 -- ILLEGAL - pawn more than 2 spaces');
newBoard = MovePiece(f7, f4, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL BLACK TURN
console.log('');
console.log('app -- e5-e6 -- ILLEGAL - cannot move backwards');
newBoard = MovePiece(e5, e6, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL BLACK TURN
console.log('');
console.log('app -- b8-b6 -- ILLEGAL - knight must L');
newBoard = MovePiece(b8, b6, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL BLACK TURN
console.log('');
console.log('app -- b8-c6 -- LEGAL - black knight');
newBoard = MovePiece(b8, c6, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL WHITE TURN
console.log('');
console.log('app -- h2-h3 -- LEGAL - white pawn');
newBoard = MovePiece(h2, h3, board, Team.white)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL BLACK TURN
console.log('');
console.log('app -- c6-b4 -- LEGAL - black knight captures');
newBoard = MovePiece(c6, b4, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL WHITE TURN
console.log('');
console.log('app -- h3-h4 -- LEGAL - white pawn');
newBoard = MovePiece(h3, h4, board, Team.white)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL Black TURN
console.log('');
console.log('app -- c8-c6 -- ILLEGAL - black bishop not diag');
newBoard = MovePiece(c8, c6, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL Black TURN
console.log('');
console.log('app -- a8-a7 -- LEGAL - black rook attacks!');
newBoard = MovePiece(a8, a7, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL WHITE TURN
console.log('');
console.log('app -- f1-h3 -- ILLEGAL - bishop move blocked');
newBoard = MovePiece(f1, h3, board, Team.white)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL WHITE TURN
console.log('');
console.log('app -- f2 -f3 -- LEGAL ');
newBoard = MovePiece(f2, f3, board, Team.white)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// LEGAL Black TURN
console.log('');
console.log('app -- b7 -b6 -- LEGAL ');
newBoard = MovePiece(b7, b6, board, Team.black)
if (!!newBoard) {
    board = newBoard;
}
printBoard();


// ILLEGAL WHITE TURN
console.log('');
console.log('app -- f1-f2 -- ILLEGAL - bishop move not diagonal');
newBoard = MovePiece(f1, f2, board, Team.white)
if (!!newBoard) {
    board = newBoard;
}
printBoard();

