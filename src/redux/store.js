import { createStore} from "redux";
import rootReducer from "./reducers/main";

const persistedState =  window.localStorage.getItem('store');

const store = createStore(rootReducer, JSON.parse(persistedState) || undefined)
store.subscribe(() => window.localStorage.setItem("store",JSON.stringify(store.getState())));
export default store;

// function saveToLocalStorage(store) {
//     try {
//         const serializedStore = JSON.stringify(store);
//         window.localStorage.setItem('store', serializedStore);
//     } catch(e) {
//         console.log(e);
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const serializedStore = window.localStorage.getItem('store');
//         if(serializedStore === null) return undefined;
//         return JSON.parse(serializedStore);
//     } catch(e) {
//         console.log(e);
//         return undefined;
//     }
// }

// // const persistedState = loadFromLocalStorage();

// // const store = createStore(reducer, persistedState);

// store.subscribe(() => saveToLocalStorage(store.getState()));