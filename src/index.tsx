import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import RootComponent from './RootComponent/RootComponent';

ReactDOM.render(
    <Provider store={store}>
        <RootComponent>
            <App />
        </RootComponent>
    </Provider>,
    document.getElementById('root'),
);
