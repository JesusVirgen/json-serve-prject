const url = 'http://localhost:4000/customers';

export const newCustomer = async customer => {
    debugger
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( customer ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        debugger
        window.location.pathname = '/index.html';
    } catch (error) {
        console.log(error)
    }
}
