const UsersCard = ({item}) => {
    return(
        <div>
            <p>Nombre: {item.nombre}</p>
            <p>Apellido: {item.apellido}</p>
            <p>Telefono: {item.telefono}</p>
            <p>Cedula: {item.cedula}</p>
        </div>
    )
}

export { UsersCard };