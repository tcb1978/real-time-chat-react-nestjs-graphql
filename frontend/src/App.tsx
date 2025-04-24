import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Container } from '@mui/system';
import { RouterProvider } from 'react-router-dom';
import Auth from './components/auth/Auth';
import router from './components/Routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router} />
        <main>
          <Auth submitLabel="Login" onSubmit={() => { }} />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
