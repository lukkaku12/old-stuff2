import useInitialState from '@hooks/useInitialState'
import React, { createContext } from 'react';

export const Appcontext = createContext({});


const AppContext = ({children}) => {
    
    const initialState = useInitialState();

    return (
        <Appcontext.Provider value = {initialState}>
            {children}
        </Appcontext.Provider>
    );
}

export default AppContext;
