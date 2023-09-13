import './App.css';
import AppShell from './containers/AppShell/AppShell';
import Home from './routes/FeatureRoutes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<AppShell {...theme}/>}>
            {/* to be added later, should come here when the user is logged */}
            <Route exact path="/hubble-monolith-hero-banner-application-nicholson" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
