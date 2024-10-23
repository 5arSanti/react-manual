const PropsComponent = ({titulo, funcionDeEstados}) => {

    const hacerClick = () => {
        funcionDeEstados(0);
    }

    return(
        <div>
            <h1>{titulo}</h1>
            <p>Este es el componente que recibe propiedades o tambien conocidad como props</p>
            
            
            <button onClick={hacerClick}>
                Este es un boton capaz de cambiar el valor de los estados
            </button>
        </div>
    );
}

export { PropsComponent }