// script.js
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#sudoku-grid input');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (!/^[1-9]$/.test(value)) {
                e.target.value = '';
            }
        });
    });
});
