const rootReducer = require('./reducer.js').default;
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const store = createStore(rootReducer); // Create the Redux store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);