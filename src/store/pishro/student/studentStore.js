import { create } from 'zustand';
const StudentsData = (set , get) => ({
    data: 10,
    actions: {
        changeData: (newData) => {
            set((state) => ({ ...state, data: newData.map(e => e.id) }))
        }
    }
})

const useStudentData = create(StudentsData)

export default useStudentData