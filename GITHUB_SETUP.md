# 🚀 رفع مشروع جزارة السرايا على GitHub

## الطريقة الأولى: استخدام الملف التلقائي

1. **انقر مرتين على ملف `upload-to-github.bat`**
2. **أدخل اسم المستخدم الخاص بك على GitHub**
3. **انتظر حتى يتم رفع المشروع**

## الطريقة الثانية: الرفع اليدوي

### الخطوة 1: إنشاء مستودع على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على زر **"+"** في الأعلى اليمين
3. اختر **"New repository"**
4. املأ البيانات:
   - **Repository name:** `jazarat-al-saraya`
   - **Description:** `موقع إلكتروني متكامل لبيع اللحوم والطواجن والحواوشي`
   - **Public** (أو Private حسب رغبتك)
   - **لا تضع علامة على أي خيار آخر**
5. اضغط **"Create repository"**

### الخطوة 2: تنفيذ الأوامر

افتح PowerShell في مجلد المشروع ونفذ هذه الأوامر:

```bash
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك
git remote add origin https://github.com/YOUR_USERNAME/jazarat-al-saraya.git
git branch -M main
git push -u origin main
```

### مثال:
إذا كان اسم المستخدم `deebm`:
```bash
git remote add origin https://github.com/deebm/jazarat-al-saraya.git
git branch -M main
git push -u origin main
```

## تفعيل GitHub Pages

بعد رفع المشروع:

1. اذهب إلى المستودع على GitHub
2. اضغط على **Settings** (الإعدادات)
3. ابحث عن **Pages** في القائمة الجانبية
4. اختر **Source: Deploy from a branch**
5. اختر **Branch: main**
6. اضغط **Save**

ستحصل على رابط مثل:
```
https://YOUR_USERNAME.github.io/jazarat-al-saraya/
```

## الملفات المرفوعة

- ✅ `index.html` - الصفحة الرئيسية
- ✅ `admin.html` - لوحة الإدارة
- ✅ `login.html` - صفحة تسجيل الدخول
- ✅ `script.js` - كود الصفحة الرئيسية
- ✅ `admin.js` - كود لوحة الإدارة
- ✅ `login.js` - كود تسجيل الدخول
- ✅ `styles.css` - تنسيقات الصفحة الرئيسية
- ✅ `admin-styles.css` - تنسيقات لوحة الإدارة
- ✅ `README.md` - ملف الوصف
- ✅ `.gitignore` - ملف استبعاد Git
- ✅ مجلد `images/` - جميع الصور

## بيانات تسجيل الدخول

- **اسم المستخدم:** `admin`
- **كلمة المرور:** `sarayadeeb`

## الدعم

إذا واجهت أي مشكلة، يمكنك:
1. التأكد من أن Git مثبت بشكل صحيح
2. التأكد من أن لديك حساب على GitHub
3. التأكد من أن اسم المستخدم صحيح
