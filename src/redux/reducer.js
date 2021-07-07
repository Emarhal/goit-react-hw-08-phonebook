import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  filterChange,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./actions";

const loading = createReducer(false, {
  [getAllContactsRequest]: () => true,
  [getAllContactsSuccess]: () => false,
  [getAllContactsError]: () => false,
  [addNewContactsRequest]: () => true,
  [addNewContactsSuccess]: () => false,
  [addNewContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

const items = createReducer([], {
  [getAllContactsSuccess]: (_, action) => action.payload,
  [addNewContactsSuccess]: (state, action) => [action.payload, ...state],
  [removeContactsSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filter = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const mainReducer = combineReducers({
  items,
  filter,
  loading,
});

export default mainReducer;

// import { addNewToList, deletedItem, filterChange } from "./actions";

// const initialState = {
//   items: [],
//   filter: "",
// };

// const mainReducer = createReducer(initialState, {
//   [addNewToList]: (state, action) => ({
//     ...state,
//     items: [action.payload, ...state.items],
//   }),
//   [deletedItem]: (state, action) => ({
//     ...state,
//     items: state.items.filter((item) => item.id !== action.payload),
//   }),
//   [filterChange]: (state, action) => ({
//     ...state,
//     filter: action.payload,
//   }),
// });

// export default mainReducer;
