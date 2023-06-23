import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home.jsx';
const SedeCuba = lazy(() => import('./pages/SedeCuba.jsx'));
const SedeDosq = lazy(() => import('./pages/SedeDosq.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Routes
        path="/evolution_cuba"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ScrollToTop />
            <SedeCuba />
          </Suspense>
        }
      />
      <Route
        path="/evolution_dosquebradas"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ScrollToTop />
            <SedeDosq />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;