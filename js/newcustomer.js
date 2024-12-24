import { showAlert, validInputs } from './functions.js';
import { newCustomer } from './API.js';

(function() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', validCustomer);

    function validCustomer(e) {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const org = document.querySelector('#org').value;

        const customer = {
            name,
            email,
            phone,
            org
        }

        if(validInputs(customer)) {
            showAlert('Todos los campos son obligatorios');
            return;
        }

        newCustomer(customer);
    }
})();