import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Grades } from './pages/Grades';
import { Payments } from './pages/Payments';
import { Jobs } from './pages/Jobs';
import { Header } from './components/Header';
import { MobileNavbar } from './components/MobileNavbar/MobileNavbar';
import { DesktopNavbar } from './components/DesktopNavbar/DesktopNavbar';

function App() {
  return (
    <>
    <Header/>
    <MobileNavbar/>
    <DesktopNavbar/>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Profile/>}
        />
        <Route
          path="/grades"
          element={<Grades/>}
        />
        <Route
          path="/payments"
          element={<Payments/>}
        />
        <Route
          path="/jobs"
          element={<Jobs/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
