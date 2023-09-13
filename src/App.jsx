import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import theme from './configs/theme';
import AppShell from './containers/AppShell/AppShell';
import Home from './routes/FeatureRoutes/Home';

const App = () => {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route element={<AppShell/>}>
                {/* to be added later, should come here when the user is logged */}
                <Route exact path="/hubble-monolith-hero-banner-application-nicholson" element={<Home />} />
              </Route>
          </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
