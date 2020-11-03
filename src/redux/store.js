import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //middleware
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddlleware from 'redux-saga';
import {fetchCollectionsStart} from './shop/shop.sagas';
const sagaMiddleware = createSagaMiddlleware();
const middlewares = [sagaMiddleware];

if( process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);
export const persistor = persistStore(store);

export default {store,persistor};