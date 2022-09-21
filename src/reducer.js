const initialState = {value:0};
const reducer = (state = initialState,action)=>{
  switch(action.type){
    case 'inc':
      return {
        ...state,
        value:state.value + 1
      };
      case 'dec':
        return {
          ...state,
          value:state.value - 1
        };
        case 'rnd':
          return  {
            ...state,
            value:state.value * action.payload
          };
      default:
        return state;
  }
}
export default reducer;