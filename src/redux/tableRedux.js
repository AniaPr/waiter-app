// selectors

//acction
const createActionName = (actionName) => `app/tables/${actionName}`;

//actioncreators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default tablesReducer;
