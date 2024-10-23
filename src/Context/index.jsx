import React from "react";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [estadoPorContexto, setEstadoPorContexto] = React.useState("Este es un estado que utiliza el contexto")

    return(
        <AppContext.Provider
            value={{
                estadoPorContexto,
                setEstadoPorContexto
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }