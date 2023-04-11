import { PieceDescription, Rank, Team } from './enum';

export interface Piece { color?: Team; description?: PieceDescription; symbol?: string; startRank: Rank; startFile: string; };
export interface Square { color: Team, piece?: Piece, rank: Rank, file: string };
type Board = Square[];
export default Board;
// export type MoveHistory = { fromSquare: Square, toSquare: Square }[];
// export type RowProps = {
//     row: Square[],
//     rowIndex: number,
//     holdPiece: (piece: Piece) => void,
//     heldPiece: Piece | undefined,
//     movePiece: (fromSquare: Square, toSquare: Square) => void,
//     moveHistory: { fromSquare: Square, toSquare: Square }[]
// };
// export type SquareProps = {
//     square: Square,
//     holdPiece: (piece: Piece) => void,
//     heldPiece: Piece | undefined,
//     movePiece: (fromSquare: Square, toSquare: Square) => void,
//     rowIndex: number,
//     columnIndex: number
// };
// export type PieceProps = {
//     className: string,
//     symbol: string
// };
// export type TroughProps = {
//     moveHistory: { fromSquare: Square, toSquare: Square }[]
// }

