
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ExamplePage from './Example/ExamplePage';

function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/example" element={<ExamplePage />} />
              <Route index element={<div>Invalid Route</div>} />
            </Routes>
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            style={{ zIndex: 9999999999999 }}
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
