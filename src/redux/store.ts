import { createStore } from "redux";

const initialState = {
  users: [],
  query: "",
  genderFilter: "",
  availableFilter: true,
  departmentFilter: "",
};
function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_GENDER_FILTER":
      return { ...state, genderFilter: action.payload };
    case "SET_AVAILABLE_FILTER":
      return { ...state, availableFilter: action.payload };
    case "SET_DEPARTMENT_FILTER":
      return { ...state, departmentFilter: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
