import { getCustomerEdit } from './API.js'

(function() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const orgInput = document.querySelector('#org');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const urlParams = new URLSearchParams(window.location.search);

        const idCustomer = parseInt(urlParams.get('id'));

        const customer = await getCustomerEdit(idCustomer);
        showCustomerEdit(customer);
    });

    function showCustomerEdit(customer) {
        debugger
        const { name, email, phone, org, id } = customer;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        orgInput.value = org;
        idInput.value = id;
    }
})