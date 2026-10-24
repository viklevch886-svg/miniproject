
// ========================================
// ELEMENTS
// ========================================

const form = document.querySelector('#loginForm');
const formName = document.querySelector('.form-name');
const formPassword = document.querySelector('.form-password');
const eyeButton = document.querySelector('.form-eye-button');
const formEye = document.querySelector('.form-eye');
const formMessage = document.querySelector('.form-message');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


// ========================================
// LOGIN DATA
// ========================================

const myName = 'admin';
const myPass = 'qwerty';


// ========================================
// BURGER MENU
// ========================================

if (burger && menu) {
    burger.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('active');

        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
        burger.setAttribute(
            'aria-label',
            isOpen ? 'Close menu' : 'Open menu'
        );
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Open menu');
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            menu.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Open menu');
        }
    });
}


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

if (eyeButton && formPassword && formEye) {
    eyeButton.addEventListener('click', function () {
        const showPassword = formPassword.type === 'password';

        formPassword.type = showPassword ? 'text' : 'password';

        formEye.src = showPassword
            ? './torch-on.png'
            : './torch-off.png';

        eyeButton.setAttribute(
            'aria-label',
            showPassword ? 'Hide password' : 'Show password'
        );

        eyeButton.setAttribute(
            'aria-pressed',
            String(showPassword)
        );
    });
}


// ========================================
// LOGIN FORM
// ========================================

if (form && formName && formPassword) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const enteredName = formName.value.trim();
        const enteredPassword = formPassword.value;

        if (enteredName === myName && enteredPassword === myPass) {
            if (formMessage) {
                formMessage.textContent = 'Success! The portal is opening...';
                formMessage.classList.add('success');
            }

            window.location.href = './treasure.html';
        } else {
            if (formMessage) {
                formMessage.textContent =
                    'Incorrect name or secret spell. Try again!';

                formMessage.classList.remove('success');
            } else {
                alert('Невірне заклинання! Портал заблоковано');
            }
        }
    });
}
