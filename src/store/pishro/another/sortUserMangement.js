import { create } from 'zustand';

const sortUserMangementA = (set, get) => ({
  data: {
    userName: '',
    mobile: ''
  },
  actions: {
    changeUserName: (newUserName) => {
      set((state) => ({ ...state, data: { ...state.data, userName: newUserName } }));
    },
    changeMobile: (newMobile) => {
      set((state) => ({ ...state, data: { ...state.data, mobile: newMobile } }));
    }
  }
})

const sortUserMangement = create(sortUserMangementA)

export default sortUserMangement