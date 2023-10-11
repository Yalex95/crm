export async function getClients(){
    const  response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()

    return result

}
export async function getClient(id){
    const  response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()

    return result

}

export async function addClient(data){
    try {
        const resp = await fetch(
            import.meta.env.VITE_API_URL,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await resp.json()

    } catch (error) {
        console.log(error)
    }
}