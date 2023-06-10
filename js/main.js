const elements = document.querySelector('.intro_btn')
for (let elem of elements) {
    elements.onclick = function () {
        document.querySelector('.toast').classList.add('toast__add');
        setTimeout(function () {
            document.querySelector('.toast').classList.remove('toast__add');
        }, 2500);
    };
}