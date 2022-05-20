import { store } from 'app/store';
import { loadProductsAsync } from 'features/product/productsSlice';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import './App.css';
import { AppRouter } from './containers/router';

function App() {
  useEffect(() => { store.dispatch(loadProductsAsync()) }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
