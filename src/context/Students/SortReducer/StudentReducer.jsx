export const StudentReducerSort = (state, action) => {
    switch (action.type) {
        case 'ChangeMobile':
            return { ...state, mobile: action.mobile }
        case 'ChangeBAF':
            return { ...state, baseAndFieldId: action.baseAndFieldId }

        case 'ChangeAccademy':
            return { ...state, schoolId: action.schoolId }

        default:
            return state
    }
}

export const StudentInitialStateSort = {
    mobile: '',
    baseAndFieldId: 0,
    schoolId: 0,
}