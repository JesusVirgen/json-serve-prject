import { getCustomers, deleteCustomer } from './API.js'

(function() {
    const list = document.querySelector('#list-customers');
    debugger

    document.addEventListener('DOMContentLoaded', showCustomers);

    list.addEventListener('click', confirmDelete);

    async function showCustomers() {
        debugger
        const customers = await getCustomers();

        console.log(customers)
    }

    function confirmDelete(e) {
        if(e.target.classList.contains('delete')) {
            const customerId = parseInt(e.target.dataset.customer);

            const confirm = confirm('¿Deseas eliminar este registro?');

            if(confirm) {
                deleteCustomer(customerId);
            }
        }
    }
});