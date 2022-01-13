
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import HomePage from './HomePage/HomePage';
import SourcePage from './SourcePage/SourcePage';
import TablePage from './TablePage/TablePage';

function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/airboxr/home" element={<HomePage />} />
              <Route path="/airboxr/source" element={<SourcePage />} />
              <Route path="/airboxr/table/:source" element={<TablePage />} />
              <Route path="*" element={<div>Invalid Route</div>} />
            </Routes>
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            transition={Zoom}
            closeButton={false}
          />
        </div>
    );
}

export default App;
