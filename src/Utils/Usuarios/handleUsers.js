const handleUsers = async (setUsuarios) => {
    const response = await fetch("http://localhost:3080/")
    const data = await response.json()

    console.log(data)
    setUsuarios(data)
}

export { handleUsers }