@echo off
echo ========================================
echo رفع مشروع جزارة السرايا على GitHub
echo ========================================

echo.
echo يرجى إدخال اسم المستخدم الخاص بك على GitHub:
set /p github_username=

echo.
echo جاري ربط المستودع المحلي بـ GitHub...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/%github_username%/jazarat-al-saraya.git

echo.
echo جاري تغيير اسم الفرع إلى main...
"C:\Program Files\Git\bin\git.exe" branch -M main

echo.
echo جاري رفع الكود إلى GitHub...
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo تم رفع المشروع بنجاح!
echo ========================================
echo.
echo يمكنك الآن الوصول إلى مشروعك على:
echo https://github.com/%github_username%/jazarat-al-saraya
echo.
echo لتفعيل GitHub Pages:
echo 1. اذهب إلى إعدادات المستودع (Settings)
echo 2. ابحث عن Pages في القائمة الجانبية
echo 3. اختر "Deploy from a branch"
echo 4. اختر branch "main"
echo 5. اضغط Save
echo.
pause
