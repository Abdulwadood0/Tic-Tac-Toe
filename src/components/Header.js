import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Header() {

    return (
        <div style={{}}>

            <Grid container spacing={2} style={{ color: "#6a1b9a", textAlign: "center" }}>
                <Grid item xs={12} >
                    <Typography style={{

                    }} variant='h2'>Tic Tac Toe</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>Player 1: X</Typography>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>Player 2: O</Typography>

                </Grid>

            </Grid>



        </div>
    )
}