const url = 'http://localhost:4000/customers';

export const newCostumer = async customer => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( customer ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}