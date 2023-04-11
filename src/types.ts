import { PieceDescription, Rank, Team } from './enum';

export interface Piece { color?: Team; description?: PieceDescription; symbol?: string; startRank: Rank; startFile: string; };
export interface Square { color: Team, piece?: Piece, rank: Rank, file: string };
type Board = Square[];
export default Board;
