
const DataFormTest = {
  expireDate:'',
  registerDate:'',
  startDate:'',
  testDetails:[],
}
function reducerTest(state, action) {
  switch (action.type) {
    case 'exDate':
      return {
        expireDate: action.data, ...state
      };
    case 'stDate':
      return {
        startDate: action.data, ...state
      };
    case 'regDate':
      return {
        registerDate: action.data, ...state
      };
    case 'testDetails':
      return {
        testDetails: action.data, ...state
      };
    default:
      return state
  }
}

export  {DataFormTest , reducerTest}