export const AppReducer = (state, action ) => {
    switch(action.type){
        case 'GigaMenuDrawer' :
            return {...state , gigaMenu: !state.gigaMenu}

        default:
            return state
    }
}