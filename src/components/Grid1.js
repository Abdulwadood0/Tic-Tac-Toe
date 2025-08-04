import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useGame } from '../contexts/GameContext';

import { Typography } from '@mui/material';

export default function Grid1() {
    const { game, dispatch } = useGame();


    function handelRestartGame() {
        dispatch({
            type: "resetGame",

        })
    }
    function handelClick(index) {

        dispatch({
            type: "makeMove",
            payload: {
                index: index
            }
        })
    }

    return (
        <div className='grid' style={{ marginTop: "50px" }}>
            <Dialog

                open={game.dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ width: "400px", height: "50px", color: "green", backgroundColor: "black", textAlign: "center" }}>
                    {game.winner}
                </DialogTitle>


                <DialogActions style={{ textAlign: "center", backgroundColor: "black" }} >
                    <Button style={{ textAlign: "center" }} onClick={handelRestartGame} autoFocus>
                        Restart game
                    </Button>
                </DialogActions>
            </Dialog >

            <Typography variant='h3' style={{
                color: "#9fa8da",
                textAlign: "center",
                marginTop: "-30px",
                marginBottom: "30px"

            }}>{game.player1.turn ? "X" : "O"} turn</Typography>


            <Grid container spacing={2} style={{ color: "white", textAlign: "center" }}>

                {game.board.map((value, index) => (
                    <Grid item xs={4} key={index}>
                        <Button onClick={() => handelClick(index)} color="secondary" style={{
                            height: "120px",
                            width: "100%",
                            backgroundColor: "#4a148c",
                            fontSize: "100px"
                        }}>{value}</Button>

                    </Grid>
                ))}

            </Grid>
        </div>
    )
}