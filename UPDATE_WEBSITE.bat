@echo off
chcp 65001 >nul
echo.
echo ========================================
echo 🔄 تحديث الموقع على GitHub
echo ========================================
echo.

echo 📝 تأكد من أنك عدلت الملفات المطلوبة...
echo.

echo 🔍 جاري فحص التغييرات...
"C:\Program Files\Git\bin\git.exe" status

echo.
echo 📦 جاري إضافة التغييرات...
"C:\Program Files\Git\bin\git.exe" add .

echo.
echo 💾 جاري حفظ التغييرات...
"C:\Program Files\Git\bin\git.exe" commit -m "Update website content"

echo.
echo 🚀 جاري رفع التحديثات على GitHub...
"C:\Program Files\Git\bin\git.exe" push

echo.
echo ========================================
echo ✅ تم تحديث الموقع بنجاح!
echo ========================================
echo.
echo 🌐 سيظهر التحديث على الموقع خلال بضع دقائق
echo 🔗 رابط الموقع: https://deeebman.github.io/jazarat-al-saraya/
echo.
pause
