import { useContext, createContext, useReducer } from "react";
import GameReducer from "../reducers/GameReducer";

const initialState = {
    player1: {
        sympol: "X",
        turn: true
    },

    player2: {
        sympol: "O",
        turn: false
    },

    board: Array(9).fill(null),

    dialog: false,

    winner: null,


}

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
    const [game, dispatch] = useReducer(GameReducer, initialState)

    return (
        <GameContext.Provider value={{ game, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => {
    return useContext(GameContext);
}

