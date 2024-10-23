import React from "react";

import "./styles.css"

const ConditionalComponent = () => {
  const [condicional, setCondicional] = React.useState(true);


    const manejarCondicional = (value) => {
        if (!value) {
            return "Inactivo"
        }

        return "Activo";
    }

    return(
        <div className="main-container">
            <h1>Condicion</h1>
            <p className={`${condicional ? "green-value" : "red-value"}`}>
                {manejarCondicional(condicional)}
            </p>
            
            <button 
                className={`main-button ${condicional ? "hover-green-value" : "hover-red-value"}`}
                onClick={() => setCondicional(!condicional)}
            >
                    Cambiar valor del estado
            </button>
        </div>
    )
}

export { ConditionalComponent };