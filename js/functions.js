export function showAlert(msg) {
    const alert = document.querySelector('.bg-red-100');

    if(!alert) {
        const alert = document.createElement('P');

        alert.classList.add('big-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'reounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${msg}</span>
        `;

        const form = document.querySelector('#form');
        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}