import React from "react";
import { createContext, useContext, useReducer } from "react";
import { StudentInitialStateSort, StudentReducerSort } from "./SortReducer/StudentReducer";

const StudentContext = createContext()


const StudentContextProvider = ({ children }) => {
    const [SortStudentState, dispatchSortStudent] = useReducer(StudentReducerSort, StudentInitialStateSort);

    return (
        <StudentContext.Provider value={{
            SortStudentState
            ,dispatchSortStudent
        }}>
            {children}
        </StudentContext.Provider>
    )
}
export const useStudentContext = () => {
    return useContext(StudentContext)
}

export default StudentContextProvider

