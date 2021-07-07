import axios from "axios";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./actions";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const addNewContacts = (contact) => async (dispatch) => {
  dispatch(addNewContactsRequest());
  try {
    const { data } = await axios.post(
      "https://connections-api.herokuapp.com/contacts",
      contact
    );
    dispatch(addNewContactsSuccess(data));
  } catch (error) {
    dispatch(addNewContactsError(error));
  }
};

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get(
      "https://connections-api.herokuapp.com/contacts"
    );
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsError(error));
  }
};

const removeContacts = (id) => async (dispatch) => {
  dispatch(removeContactsRequest());
  try {
    await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
    dispatch(removeContactsSuccess(id));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

export { addNewContacts, getAllContacts, removeContacts };
