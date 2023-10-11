//get clients
export async function getClients(){
    const  response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()

    return result

}
//get client
export async function getClient(id){
    const  response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()

    return result

}
// create
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
// update
export async function updateClient(id,data){
    
    try {
        const resp = await fetch(
            `${import.meta.env.VITE_API_URL}/${id}`,
            {
                method: 'PUT',
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
// remove client
export async function removeClient(id){
    try {
        const resp = await fetch(
            `${import.meta.env.VITE_API_URL}/${id}`,
            {
                method: 'DELETE'
            })
            await resp.json()

    } catch (error) {
        console.log(error)
    }
}