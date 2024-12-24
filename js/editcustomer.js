import { getCustomerEdit, updateCustomer } from './API.js'
import { validInputs } from './functions.js'

(function() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const orgInput = document.querySelector('#org');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const urlParams = new URLSearchParams(window.location.search);

        const idCustomer = urlParams.get('id');

        const customer = await getCustomerEdit(idCustomer);
        showCustomerEdit(customer);

        const form = document.querySelector('#form');
        form.addEventListener('submit', validCustomer)
    });

    function showCustomerEdit(customer) {
        const { name, email, phone, org, id } = customer;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        orgInput.value = org;
        idInput.value = id;
    }

    function validCustomer(e) {
        e.preventDefault();

        const customer = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            org: orgInput.value,
            id: idInput.value
        }

        if(validInputs(customer)) {
            showAlert('Todos los campos son obligatorios');
            return;
        }

        updateCustomer(customer);
    }
})();