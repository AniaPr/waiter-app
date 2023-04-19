import { API_URL } from '../config';

// selectors
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

//acction
const createActionName = (actionName) => `app/tables/${actionName}`;
const GET_TABLES = createActionName('GET_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

//action creators
export const getTables = (payload) => ({ type: GET_TABLES, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(getTables(tables)))
      .catch((error) => console.error(error));
  };
};

export const updateTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables/${newTable.id}`, options)
      .then((res) => res.json())
      .then(() => dispatch(updateTable(newTable)));
  };
};

export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });
export const removeTableRequest = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(console.log('deleted!'))
      .then(() => dispatch(removeTable(id)))
      .catch((error) => console.error(error));
  };
};

export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const addTableRequest = (id) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        status: 'Free',
        peopleAmount: 0,
        maxPeopleAmount: 0,
        bill: 0,
      }),
    };
    fetch(`${API_URL}/tables`, options)
      .then((res) => res.json())
      .then(() => dispatch(addTable(id)))
      .catch((error) => console.error(error));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload ? { ...table, ...action.payload } : table
      );
    case REMOVE_TABLE:
      return [...statePart.filter((table) => table.id !== action.payload)];
    case ADD_TABLE:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
};

export default tablesReducer;
