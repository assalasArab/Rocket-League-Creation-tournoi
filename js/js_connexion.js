document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.querySelector('input[name="username"]');
    const captchaInput = document.getElementById('captcha');
    const loginForm = document.getElementById('login-form');
    const usernameError = document.getElementById('username-error');
    const captchaError = document.getElementById('captcha-error');

    function validateForm(event) {
        const username = usernameInput.value.trim();
        const captcha = captchaInput.value.trim();
        const regex = /^[a-zA-Z0-9_]+$/; // Autorise uniquement les lettres, les chiffres et le caractère underscore (_)
        const expectedCaptcha = 'smwm';

        let hasError = false;

        if (!regex.test(username)) {
            usernameError.textContent = "Le nom d'utilisateur ne doit contenir que des lettres, des chiffres ou des underscores (_).";
            hasError = true;
        } else {
            usernameError.textContent = "";
        }

        if (captcha !== expectedCaptcha) {
            captchaError.textContent = "Le captcha est incorrect.";
            hasError = true;
        } else {
            captchaError.textContent = "";
        }

        if (hasError) {
            event.preventDefault(); // Empêche l'envoi du formulaire si une erreur est présente
        }
    }

    loginForm.addEventListener('submit', validateForm);

    // Masquer les messages d'erreur lorsque l'utilisateur commence à saisir dans les champs
    usernameInput.addEventListener('input', function() {
        usernameError.textContent = "";
    });

    captchaInput.addEventListener('input', function() {
        captchaError.textContent = "";
    });
});
