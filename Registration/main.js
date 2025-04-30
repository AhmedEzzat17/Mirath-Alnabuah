document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Login form submitted');
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                alert('يرجى ملء جميع حقول تسجيل الدخول.');
                return;
            }

            alert('تم تسجيل الدخول بنجاح (محاكاة)! سيتم تحويلك الى الصفحة الرئيسية للموقع');
            window.location.href = '../index.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Signup form submitted');

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsCheck = document.getElementById('termsCheck').checked;

            if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
                alert('يرجى ملء جميع الحقول المطلوبة.');
                return;
            }

            if (password !== confirmPassword) {
                alert('كلمتا المرور غير متطابقتين.');
                return;
            }

            if (!termsCheck) {
                alert('يجب الموافقة على الشروط والأحكام.');
                return;
            }

            alert('تم إنشاء الحساب بنجاح (محاكاة)! سيتم توجيهك لصفحة تسجيل الدخول.');
            window.location.href = 'login.html';
        });
    }
});

