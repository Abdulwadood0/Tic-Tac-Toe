import './App.css';
import Header from './components/Header';
import Grid1 from './components/Grid1';
import { GameProvider } from './contexts/GameContext';

//mui:
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ["PixelifySans"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#424242", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
        <Container maxWidth="sm" sx={{ backgroundColor: "#212121", width: "100%", height: "auto", minHeight: "93vh", borderRadius: "20px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Header />
          <GameProvider>
            <Grid1 />
          </GameProvider>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
