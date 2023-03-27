// selectors
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

//acction
const createActionName = (actionName) => `app/tables/${actionName}`;
const GET_TABLES = createActionName('GET_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

//action creators
export const getTables = (payload) => ({ type: GET_TABLES, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(getTables(tables)));
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
    fetch(`http://localhost:3131/tables/${newTable.id}`, options).then(() =>
      dispatch(updateTable(newTable))
    );
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
    default:
      return statePart;
  }
};

export default tablesReducer;
