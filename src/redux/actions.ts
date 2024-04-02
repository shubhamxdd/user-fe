import { User } from "@/types";

export function setUsers(users: User[]) {
  return { type: "SET_USERS", payload: users };
}

export function setQuery(query: string) {
  return { type: "SET_QUERY", payload: query };
}

export function setGenderFilter(filter: string) {
  return { type: "SET_GENDER_FILTER", payload: filter };
}

export function setAvailableFilter(filter: string) {
  return { type: "SET_AVAILABLE_FILTER", payload: filter };
}

export function setDepartmentFilter(filter: string) {
  return { type: "SET_DEPARTMENT_FILTER", payload: filter };
}
