export enum Rank { one = 1, two = 2, three = 3, four = 4, five = 5, six = 6, seven = 7, eight = 8 }

export enum File {
    a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e',
    f = 'f',
    g = 'g',
    h = 'h'
}

export enum Team { black = 'black', white = 'white' }
export enum PieceDescription {
    rook = 'rook',
    pawn = 'pawn',
    knight = 'knight',
    bishop = 'bishop',
    king = 'king',
    queen = 'queen'
}

export interface Piece { color?: Team; description?: PieceDescription; symbol?: string; startRank: Rank; startFile: string; };
export interface Square { color: Team, piece?: Piece, rank: Rank, file: string };
export type Board = Square[];
export type Board2d = {[key: string]: Square}[]

/**
 * @returns A board with all pieces in starting configuration
 */
export const GetNewBoard = async (): Promise<Board> => {
    const res = await fetch('https://us-central1-chess-enforcer-firebase.cloudfunctions.net/getNewChessBoard')
    const board:Board = await res.json()
    return board
}

/**
 * Moves a piece from a given starting square to a given ending square.
 * 
 * @remarks
 * Returns `undefined` if the given move is illegal.
 * 
 * @param fromSquare - The square on which the piece to be moved is located; the starting square
 * @param toSquare - The square to which the piece is to be moved; the ending square
 * @param board - The current board state
 * @param currentTeam - The team whose turn it currently is
 * @returns The new board after successfully moving the piece
 */
export const MovePiece = async (fromSquare: Square, toSquare: Square, board: Board, currentTeam: Team) => {
    const res = await fetch('https://us-central1-chess-enforcer-firebase.cloudfunctions.net/moveChessPiece', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fromSquare: fromSquare,
            toSquare: toSquare,
            board: board,
            currentTeam: currentTeam
        })
    })
    return await res.json()
}

export const toBoard2d = (board: Board): Board2d => {
    const output: Board2d = []
    let i = -1
    board.forEach((square, index) => {
        if(index % 8 == 0) {
            output.push({})
            i++
        }
        let file: File
        switch(index % 8) {
            case 0: file = File.a; break;
            case 1: file = File.b; break;
            case 2: file = File.c; break;
            case 3: file = File.d; break;
            case 4: file = File.e; break;
            case 5: file = File.f; break;
            case 6: file = File.g; break;
            case 7: file = File.h; break;
        }
        output[i][File[file]] = square
    })
    return output
}