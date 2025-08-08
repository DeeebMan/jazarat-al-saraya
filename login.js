// بيانات تسجيل الدخول (يمكن تخزينها في قاعدة بيانات لاحقاً)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'sarayadeeb'
};

// عناصر DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const loading = document.getElementById('loading');

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من حالة تسجيل الدخول السابقة
    if (isLoggedIn()) {
        // إذا كان المستخدم مسجل دخول بالفعل، انتقل لصفحة الإدارة
        window.location.href = 'admin.html';
        return;
    }
    
    // التركيز على حقل اسم المستخدم
    usernameInput.focus();
    
    // إضافة مستمع للنموذج
    loginForm.addEventListener('submit', handleLogin);
    
    // إضافة مستمعي أحداث للحقول
    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            passwordInput.focus();
        }
    });
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    });
    
    // إخفاء الرسائل عند بدء الكتابة
    usernameInput.addEventListener('input', hideMessages);
    passwordInput.addEventListener('input', hideMessages);
});

// وظيفة معالجة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // التحقق من صحة البيانات
    if (!username || !password) {
        showError('يرجى إدخال اسم المستخدم وكلمة المرور');
        return;
    }
    
    // إظهار حالة التحميل
    showLoading(true);
    
    // محاكاة تأخير الشبكة
    setTimeout(() => {
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            // تسجيل دخول ناجح
            setLoginSession();
            showSuccess('تم تسجيل الدخول بنجاح! جاري التوجه...');
            
            // انتظار قصير قبل التوجه
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 1500);
        } else {
            // تسجيل دخول فاشل
            showError('اسم المستخدم أو كلمة المرور غير صحيحة');
            passwordInput.value = '';
            passwordInput.focus();
        }
        
        showLoading(false);
    }, 1000);
}

// وظيفة إنشاء جلسة تسجيل الدخول
function setLoginSession() {
    const sessionData = {
        isLoggedIn: true,
        loginTime: new Date().getTime(),
        username: usernameInput.value.trim()
    };
    
    // حفظ في localStorage
    localStorage.setItem('adminSession', JSON.stringify(sessionData));
    
    // حفظ في sessionStorage أيضاً للأمان
    sessionStorage.setItem('adminSession', JSON.stringify(sessionData));
}

// وظيفة التحقق من حالة تسجيل الدخول
function isLoggedIn() {
    const sessionData = getSessionData();
    
    if (!sessionData || !sessionData.isLoggedIn) {
        return false;
    }
    
    // التحقق من انتهاء صلاحية الجلسة (24 ساعة)
    const currentTime = new Date().getTime();
    const loginTime = sessionData.loginTime;
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 ساعة بالميلي ثانية
    
    if (currentTime - loginTime > sessionDuration) {
        // انتهت صلاحية الجلسة
        clearSession();
        return false;
    }
    
    return true;
}

// وظيفة الحصول على بيانات الجلسة
function getSessionData() {
    try {
        const localData = localStorage.getItem('adminSession');
        const sessionData = sessionStorage.getItem('adminSession');
        
        if (localData && sessionData) {
            return JSON.parse(localData);
        }
    } catch (e) {
        console.error('خطأ في قراءة بيانات الجلسة:', e);
    }
    
    return null;
}

// وظيفة مسح الجلسة
function clearSession() {
    localStorage.removeItem('adminSession');
    sessionStorage.removeItem('adminSession');
}

// وظيفة إظهار الخطأ
function showError(message) {
    hideMessages();
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// وظيفة إظهار النجاح
function showSuccess(message) {
    hideMessages();
    successMessage.textContent = message;
    successMessage.style.display = 'block';
}

// وظيفة إخفاء الرسائل
function hideMessages() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

// وظيفة إظهار/إخفاء حالة التحميل
function showLoading(show) {
    if (show) {
        loading.style.display = 'block';
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحقق...';
    } else {
        loading.style.display = 'none';
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول';
    }
}

// وظيفة إظهار/إخفاء كلمة المرور
function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordIcon.className = 'fas fa-eye-slash';
    } else {
        passwordField.type = 'password';
        passwordIcon.className = 'fas fa-eye';
    }
}

// وظائف أمان إضافية
document.addEventListener('keydown', function(e) {
    // منع F12 و Ctrl+Shift+I (Developer Tools)
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        return false;
    }
    
    // منع Ctrl+U (عرض المصدر)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});

// منع النقر بالزر الأيمن
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// منع تحديد النص
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
        return false;
    }
});

console.log('🔐 نظام تسجيل الدخول جاهز');
console.log('👤 اسم المستخدم الافتراضي: admin');
console.log('🔑 كلمة المرور الافتراضية: sarayadeeb');
