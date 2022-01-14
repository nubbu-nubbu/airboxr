
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loadable from 'react-loadable';
import { FixedHeaderBar, HeaderChatButton, PageContainer } from './LayoutComponents/LayoutHeader';
import { openToast } from './Toasts';
import { CircularProgress } from '@material-ui/core';

const loading = () => (
  <div className='loader-wrap'>
    <CircularProgress />
  </div>
);

const HomePage = Loadable({
  loader: () => import('./HomePage/HomePage'),
  loading,
});

const SourcePage = Loadable({
  loader: () => import('./SourcePage/SourcePage'),
  loading,
});

const TablePage = Loadable({
  loader: () => import('./TablePage/TableWrap'),
  loading,
});

function App() {

    const headerChatButton: HeaderChatButton = {
        type: 'chat',
        onClick: () => {
            openToast('info', 'Chat Clicked!')
        },
    };
    return (
        <div className="App">
          <PageContainer>
            <BrowserRouter>
              <FixedHeaderBar
                  chatButton={headerChatButton}
              />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/airboxr/home" element={<HomePage />} />
                <Route path="/airboxr/source" element={<SourcePage />} />
                <Route path="/airboxr/table/:source" element={<TablePage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
          </PageContainer>
          <ToastContainer
            position="top-center"
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
