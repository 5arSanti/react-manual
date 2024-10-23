import React from "react"
import { UsersCard } from "../UsersCard"

import "./styles.css"
import { handleUsers } from "../../../Utils/Usuarios/handleUsers"

const UsersContainer = () => {
    const [usuarios, setUsuarios] = React.useState(null)

    React.useEffect(() => {
        handleUsers(setUsuarios)
    }, [])

    return(
        <div className="users-container">
            {usuarios?.map((usuario, index) => (
                <UsersCard key={index} item={usuario}/>
            ))}
        </div>
    )
}

export { UsersContainer }