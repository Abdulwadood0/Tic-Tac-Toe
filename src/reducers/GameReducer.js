



export default function reducer(state, action) {


    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left
            [2, 4, 6], // Diagonal from top-right
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;

            if (board[a] && board[a] === board[b] && board[a] == board[c]) {
                return { ...state, dialog: true, winner: state.player1.turn ? "X is the winner" : "O is the winner" }
            }

        }

        if (board.every(cell => cell !== null)) {
            return { ...state, dialog: true, winner: "Draw" }

        }

        return null;
    }



    switch (action.type) {
        case "makeMove":
            if (state.board[action.payload.index]) {
                return state

            }
            const newBoard = [...state.board];
            const currentPlayer = state.player1.turn ? state.player1 : state.player2;



            newBoard[action.payload.index] = currentPlayer.sympol;

            const newPlayer1 = { ...state.player1, turn: !state.player1.turn };
            const newPlayer2 = { ...state.player2, turn: !state.player2.turn };




            const newState = checkWinner(newBoard)

            if (newState) {
                return {
                    ...state,
                    player1: newPlayer1,
                    player2: newPlayer2,
                    board: newBoard,
                    dialog: newState.dialog,
                    winner: newState.winner
                }
            }

            return {
                ...state,
                player1: newPlayer1,
                player2: newPlayer2,
                board: newBoard

            }
        case "resetGame":
            return {
                ...state,
                player1: { ...state.player1, turn: true },
                player2: { ...state.player2, turn: false },
                board: Array(9).fill(null),
                dialog: false, // Close the dialog
                winner: null,  // Clear winner info
            };

        default:
            return state;
    }

}