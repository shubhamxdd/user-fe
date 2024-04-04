import "./App.css";
import { available, domains, gender } from "./lib/constants";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "@/types/index";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import { useDebounce } from "use-debounce";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsers,
  setQuery,
  setGenderFilter,
  setAvailableFilter,
  setDepartmentFilter,
} from "./redux/actions";
import SearchBar from "@/components/SearchBar";
import FilterDropdown from "@/components/FilterDropdown";
import UserList from "@/components/UserList";
import ShowSelectedUsers from "@/components/ShowSelectedUsers";

function App() {
  const [selectedUsers, setSelectedUsers] = useState<User[] | []>([]);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const query = useSelector((state) => state.query);
  const genderFilter = useSelector((state) => state.genderFilter);
  const availableFilter = useSelector((state) => state.availableFilter);
  const departmentFilter = useSelector((state) => state.departmentFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [debouncedValue] = useDebounce(query, 500);

  const fetchUsers = async () => {
    const url = `http://192.168.1.10:8000/api/users?page=${currentPage}&limit=21&domain=${
      departmentFilter ? departmentFilter : ""
    }&gender=${genderFilter ? genderFilter : ""}&available=${
      availableFilter ? availableFilter : ""
    }&search=${debouncedValue}`;
    // const url = `https://user-backend-4wri.onrender.com/api/users?page=${currentPage}&limit=21&domain=${
    //   departmentFilter ? departmentFilter : ""
    // }&gender=${genderFilter ? genderFilter : ""}&available=${
    //   availableFilter ? availableFilter : ""
    // }&search=${debouncedValue}`;

    const res = await axios.get(url);
    const data = (await res.data) as User[];
    dispatch(setUsers(data.users));

    setTotalPages(res.data.totalPages);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  const handleGenderFilterChange = (newFilter) => {
    dispatch(setGenderFilter(newFilter));
  };

  const handleAvailableFilterChange = (newFilter) => {
    dispatch(setAvailableFilter(newFilter));
  };

  const handleDepartmentFilterChange = (newFilter) => {
    dispatch(setDepartmentFilter(newFilter));
  };

  useEffect(() => {
    fetchUsers();
  }, [
    debouncedValue,
    genderFilter,
    availableFilter,
    departmentFilter,
    currentPage,
  ]);

  const handleUserSelect = (user) => {
    if (
      !selectedUsers.find((u) => u._id === user._id) &&
      !selectedUsers.find((u) => u.domain === user.domain) &&
      user.available
    ) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-20 lg:px-32 py-5">
        <div className="flex my-5 justify-center flex-wrap items-center">
          <SearchBar query={query} handleQueryChange={handleQueryChange} />
          <div className="flex gap-4 mx-4 max-sm:mt-4">
            <FilterDropdown
              title="Department"
              items={domains}
              handleFilterChange={handleDepartmentFilterChange}
            />
            <FilterDropdown
              title="Available"
              items={available}
              handleFilterChange={handleAvailableFilterChange}
            />
            <FilterDropdown
              title="Gender"
              items={gender}
              handleFilterChange={handleGenderFilterChange}
            />
          </div>
        </div>
        <UserList
          users={users}
          selectedUsers={selectedUsers}
          onUserSelect={handleUserSelect}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
