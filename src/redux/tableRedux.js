// selectors
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

//acction
const createActionName = (actionName) => `app/tables/${actionName}`;
const GET_TABLES = createActionName('GET_TABLES');

//action creators
export const getTables = (payload) => ({ type: GET_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(getTables(tables)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
