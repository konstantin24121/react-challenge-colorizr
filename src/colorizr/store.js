import {configureStore} from './config/configureStore';
import {getSavedData} from '@colorizr/utils/dataLoader';

const savedState = getSavedData();

const store = configureStore(savedState);

export default store;