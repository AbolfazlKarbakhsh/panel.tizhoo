import { create } from 'zustand';

const ActiveTab = (set, get) => ({
    data: 0,
    actions: {
        changeData: (newData) => {
            set((state) => ({ ...state, data: newData }));

        }
    }
})

const CActiveTab = create(ActiveTab)

export default CActiveTab