import React from "react"
import { AppContext } from "../../../Context"

const ComponenteContexto = () => {
    const context = React.useContext(AppContext)

    const handleClick = () => {
        context.setEstadoPorContexto("Estado cambiado por contexto")
    }

    return(
        <div>
            <p>{context.estadoPorContexto}</p>
            <button onClick={handleClick}>
                Cambiar estado
            </button>
        </div>
    )
}

export { ComponenteContexto } 