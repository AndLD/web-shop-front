export function fetchRequest(address, method, body, headers = {'Content-Type': 'application/json;charset=utf-8'}) {

    let methodsList = ['POST', 'GET', 'DELETE', 'UPDATE', 'PUT', 'PATCH']

    if(!methodsList.includes(method.toUpperCase())) {
        console.error("Нет такого метода или следует его добавить в функцию fetchRequest: ", method)
    } else {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/${address}`, {
                    method: method,
                    headers: headers,
                    body: await JSON.stringify(body)
                })
                
                resolve(await response.json())
    
                } catch (error) { 
                    reject(error)
                }
        })
    }
}
