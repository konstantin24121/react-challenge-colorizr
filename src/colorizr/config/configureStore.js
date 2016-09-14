import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '@colorizr/reducers';

const middleware = [
	thunkMiddleware
]

export const configureStore = function(initialState) {
	const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

	if (module.hot) {
		module.hot.accept('@colorizr/reducers', () => {
			const nextRootReducer = require('@colorizr/reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
