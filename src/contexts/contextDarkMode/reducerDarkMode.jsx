
export const reducerDarkMode = (state, action) => {

    switch (action.mode) {
        case true:
            
            return { dark: true };

        case false:
            
            return { dark: false };
    
        default:
            return state;
    }
}