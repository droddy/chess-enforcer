export enum Rank { one = 1, two = 2, three = 3, four = 4, five = 5, six = 6, seven = 7, eight = 8 }

export const File = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h'
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

const fetchOpts: RequestInit = {
    mode: "no-cors"
}

/**
 * @returns A board with all pieces in starting configuration
 */
export const GetNewBoard = async (): Promise<Board> => {
    const res = await fetch('https://us-central1-chess-enforcer-firebase.cloudfunctions.net/getNewChessBoard', fetchOpts)
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
        ...fetchOpts,
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