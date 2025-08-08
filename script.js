// بيانات قائمة اللحوم
let menuItems = [];

// متغيرات عامة
let cart = [];
let cartTotal = 0;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل البيانات من localStorage فقط
    loadMenuItemsFromStorage();
    loadMenu();
    updateCartCount();
    
    console.log('تم تحميل الصفحة الرئيسية');
    
    // مراقبة التغييرات في localStorage
    window.addEventListener('storage', function(e) {
        console.log('تم اكتشاف تغيير في localStorage:', e.key);
        if (e.key === 'products') {
            // إعادة تحميل البيانات عند تغيير المنتجات
            loadMenuItemsFromStorage();
            loadMenu();
            showNotification('تم تحديث المنتجات بنجاح!', 'success');
        }
        if (e.key === 'mainPageUpdate') {
            // تحديث الصفحة الرئيسية
            loadMenuItemsFromStorage();
            loadMenu();
            showNotification('تم تحديث المنتجات بنجاح!', 'success');
        }
    });
    
    // مراقبة الأحداث المخصصة من صفحة الإدارة
    window.addEventListener('productsUpdated', function() {
        console.log('تم استقبال حدث productsUpdated');
        // إعادة تحميل البيانات عند تحديث المنتجات
        loadMenuItemsFromStorage();
        loadMenu();
        showNotification('تم تحديث المنتجات بنجاح!', 'success');
    });
    
    // تحديث الصفحة عند التركيز عليها (عند العودة من صفحة الإدارة)
    window.addEventListener('focus', function() {
        console.log('تم التركيز على الصفحة');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // تحديث الصفحة عند تحميلها
    window.addEventListener('load', function() {
        console.log('تم تحميل الصفحة');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // تحديث الصفحة عند العودة من صفحة الإدارة
    window.addEventListener('pageshow', function() {
        console.log('تم عرض الصفحة');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // تحديث الصفحة عند العودة من صفحة الإدارة
    window.addEventListener('beforeunload', function() {
        console.log('سيتم إغلاق الصفحة');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // تحديث الصفحة عند العودة من صفحة الإدارة
    window.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            console.log('أصبحت الصفحة مرئية');
            // إعادة تحميل البيانات من localStorage
            loadMenuItemsFromStorage();
            loadMenu();
        }
    });
    
    // تحديث الصفحة عند العودة من صفحة الإدارة
    window.addEventListener('resume', function() {
        console.log('تم استئناف التطبيق');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // تحديث الصفحة عند العودة من صفحة الإدارة
    window.addEventListener('online', function() {
        console.log('تم الاتصال بالإنترنت');
        // إعادة تحميل البيانات من localStorage
        loadMenuItemsFromStorage();
        loadMenu();
    });
    
    // إضافة وظيفة للتحديث اليدوي
    window.refreshMainPage = function() {
        console.log('تم استدعاء التحديث اليدوي');
        loadMenuItemsFromStorage();
        loadMenu();
        showNotification('تم تحديث المنتجات بنجاح!', 'success');
    };
});

// وظيفة لتحميل البيانات من localStorage
function loadMenuItemsFromStorage() {
    console.log('تحميل البيانات من localStorage');
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        menuItems = JSON.parse(savedProducts);
        console.log('تم تحميل', menuItems.length, 'منتج من localStorage');
    } else {
        console.log('لا توجد بيانات في localStorage، استخدام البيانات الافتراضية');
        // إذا لم تكن هناك بيانات في localStorage، استخدم البيانات الافتراضية
        menuItems = [
            // --- اللحوم الفاخرة والمخصوص (500 جم) ---
            { id: 101, name: "شورت ريبس", price: 160, description: "شورت ريبس فاخر طازج.", image: "images/شورت-ريب.png", category: "لحوم فاخرة" },
            { id: 102, name: "توماهوك ستيك", price: 210, description: "توموهوك ستيك مميز وطري.", image: "images/توماهوك-ستيك-جديد1.jpg", category: "لحوم فاخرة" },
            { id: 103, name: "اوسوبوكو", price: 200, description: "اوسوبوكو طازج عالي الجودة.", image: "images/اوسو-بوكو.png", category: "لحوم فاخرة" },
            { id: 104, name: "تي بون", price: 190, description: "تي بون ستيك فاخر.", image: "images/T-bone-Steak.webp", category: "لحوم فاخرة" },
            { id: 105, name: "بورتر هاوس", price: 230, description: "بورتر هاوس طازج.", image: "images/بورتر-هاوس.png", category: "لحوم فاخرة" },
            { id: 106, name: "رامب ستيك", price: 230, description: "رامب ستيك مميز.", image: "images/رامب-ستيك.png", category: "لحوم فاخرة" },
            { id: 107, name: "سيرلوين ستيك", price: 250, description: "سيرلوين ستيك طازج.", image: "images/سيرلوين-ستيك.png", category: "لحوم فاخرة" },
            { id: 108, name: "كولاتة بالبدن", price: 245, description: "كولاتة بالدن مميزة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 109, name: "ستروجانوف", price: 240, description: "ستروجانوف طازج.", image: "images/جديد-استراجنوف.jpg", category: "لحوم فاخرة" },
            { id: 110, name: "انتركوت بالدن", price: 245, description: "انتركوت بالبدن عالي الجودة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 111, name: "برجر فاخر", price: 220, description: "برجر فاخر طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 112, name: "سحق فاخر خالي الدهن", price: 225, description: "سحق فاخر خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 113, name: "مفروم خالي الدهن", price: 230, description: "مفروم خالي الدهن طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 114, name: "كباب حله خالي الدهن", price: 245, description: "كباب حله خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 115, name: "كولاتة خالي الدهن", price: 240, description: "كولاتة خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 116, name: "انتركوت خالي الدهن", price: 250, description: "انتركوت خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 117, name: "رستو خالي الدهن", price: 245, description: "رستو خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 118, name: "موزة فاخر", price: 240, description: "موزة فاخر طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 119, name: "بفتيك", price: 245, description: "بقية لحوم فاخرة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 120, name: "كبدة شمبري", price: 240, description: "كبدة شمبري طازجة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 121, name: "فلتو", price: 260, description: "فلتو فاخر.", image: "images/meat.jpg", category: "لحوم فاخرة" },

            // --- الطواجن (أسعار من الصورة) ---
            { id: 201, name: "ورقة لحمة بطاطس (كيلو)", price: 650, description: "ورقة لحمة مع البطاطس.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 202, name: "ورقة لحمة بطاطس (نصف كيلو)", price: 325, description: "ورقة لحمة مع البطاطس.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 203, name: "ورقة لحمة بصلية (كيلو)", price: 600, description: "ورقة لحمة مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 204, name: "ورقة لحمة بصلية (نصف كيلو)", price: 300, description: "ورقة لحمة مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 205, name: "طاجن عكاوي بصل (كيلو)", price: 500, description: "طاجن عكاوي بالبصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 206, name: "طاجن عكاوي بصل (نصف كيلو)", price: 250, description: "طاجن عكاوي بالبصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 207, name: "لحمة طاجن لسان العصفور (كيلو)", price: 600, description: "لحمة طاجن لسان العصفور.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 208, name: "لحمة طاجن لسان العصفور (نصف كيلو)", price: 300, description: "لحمة طاجن لسان العصفور.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 209, name: "رز معمر (كيلو)", pricيe: 240, description: "رز معمر مصري.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 210, name: "رز معمر (نصف كيلو)", price: 120, description: "رز معمر مصري.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 211, name: "انتروكوت مشوي جريل (كيلو)", price: 600, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 212, name: "انتروكوت مشوي جريل (نصف كيلو)", price: 300, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 213, name: "سحق مشوي مع البصل (كيلو)", price: 520, description: "سحق مشوي مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 214, name: "سحق مشوي مع البصل (نصف كيلو)", price: 260, description: "سحق مشوي مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 215, name: "برجر مشوي (كيلو)", price: 500, description: "برجر مشوي طازج.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 216, name: "برجر مشوي (نصف كيلو)", price: 250, description: "برجر مشوي طازج.", image: "images/tajin.jpg", category: "طواجن" },

            // --- الحواوشي (أسعار من الصورة) ---
            { id: 301, name: "حواوشي لحمة مخصوص وسط", price: 100, description: "حواوشي لحمة مخصوص حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 302, name: "حواوشي لحمة مخصوص كبير", price: 140, description: "حواوشي لحمة مخصوص حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 303, name: "حواوشي لحمة مخصوص وش بيتزا", price: 160, description: "حواوشي لحمة مخصوص وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 304, name: "حواوشي سحق مخصوص وسط", price: 100, description: "حواوشي سحق مخصوص حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 305, name: "حواوشي سحق مخصوص كبير", price: 140, description: "حواوشي سحق مخصوص حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 306, name: "حواوشي سحق مخصوص وش بيتزا", price: 160, description: "حواوشي سحق مخصوص وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 307, name: "حواوشي بسطرمة وسط", price: 100, description: "حواوشي بسطرمة حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 308, name: "حواوشي بسطرمة كبير", price: 140, description: "حواوشي بسطرمة حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 309, name: "حواوشي بسطرمة وش بيتزا", price: 160, description: "حواوشي بسطرمة وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 310, name: "حواوشي السرايا المميز (سكيتين) كبير", price: 140, description: "حواوشي السرايا المميز سكيتين حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 311, name: "حواوشي فراخ كبير", price: 70, description: "حواوشي فراخ حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 312, name: "حواوشي فراخ بالمشروم كبير", price: 90, description: "حواوشي فراخ بالمشروم حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 313, name: "فاهيتا فراخ وسط", price: 80, description: "فاهيتا فراخ حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 314, name: "فاهيتا فراخ كبير", price: 120, description: "فاهيتا فراخ حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 315, name: "فاهيتا فراخ وش بيتزا", price: 140, description: "فاهيتا فراخ وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 316, name: "حواوشي لحمة عادي", price: 70, description: "حواوشي لحمة عادي.", image: "images/hawawshi.jpg", category: "حواوشي" },
            { id: 317, name: "حواوشي سحق بقالي", price: 70, description: "حواوشي سحق بقالي.", image: "images/hawawshi.jpg", category: "حواوشي" }
        ];
    }
}

// وظيفة لتحديث البيانات في localStorage
function updateLocalStorageData() {
    // مسح البيانات القديمة من localStorage
    localStorage.removeItem('products');
    localStorage.removeItem('categories');
    localStorage.removeItem('images');
    
    // تحديث المنتجات في localStorage لتتوافق مع المنتجات المعروضة
    const updatedProducts = [
        // --- اللحوم الفاخرة والمخصوص (500 جم) ---
        { id: 101, name: "شورت ريبس", price: 160, description: "شورت ريبس فاخر طازج.", image: "images/شورت-ريب.png", category: "لحوم فاخرة" },
        { id: 102, name: "توماهوك ستيك", price: 210, description: "توموهوك ستيك مميز وطري.", image: "images/توماهوك-ستيك-جديد1.jpg", category: "لحوم فاخرة" },
        { id: 103, name: "اوسوبوكو", price: 200, description: "اوسوبوكو طازج عالي الجودة.", image: "images/اوسو-بوكو.png", category: "لحوم فاخرة" },
        { id: 104, name: "تي بون", price: 190, description: "تي بون ستيك فاخر.", image: "images/T-bone-Steak.webp", category: "لحوم فاخرة" },
        { id: 105, name: "بورتر هاوس", price: 230, description: "بورتر هاوس طازج.", image: "images/بورتر-هاوس.png", category: "لحوم فاخرة" },
        { id: 106, name: "رامب ستيك", price: 230, description: "رامب ستيك مميز.", image: "images/رامب-ستيك.png", category: "لحوم فاخرة" },
        { id: 107, name: "سيرلوين ستيك", price: 250, description: "سيرلوين ستيك طازج.", image: "images/سيرلوين-ستيك.png", category: "لحوم فاخرة" },
        { id: 108, name: "كولاتة بالبدن", price: 245, description: "كولاتة بالدن مميزة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 109, name: "ستروجانوف", price: 240, description: "ستروجانوف طازج.", image: "images/جديد-استراجنوف.jpg", category: "لحوم فاخرة" },
        { id: 110, name: "انتركوت بالدن", price: 245, description: "انتركوت بالبدن عالي الجودة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 111, name: "برجر فاخر", price: 220, description: "برجر فاخر طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 112, name: "سحق فاخر خالي الدهن", price: 225, description: "سحق فاخر خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 113, name: "مفروم خالي الدهن", price: 230, description: "مفروم خالي الدهن طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 114, name: "كباب حله خالي الدهن", price: 245, description: "كباب حله خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 115, name: "كولاتة خالي الدهن", price: 240, description: "كولاتة خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 116, name: "انتركوت خالي الدهن", price: 250, description: "انتركوت خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 117, name: "رستو خالي الدهن", price: 245, description: "رستو خالي الدهن.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 118, name: "موزة فاخر", price: 240, description: "موزة فاخر طازج.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 119, name: "بفتيك", price: 245, description: "بقية لحوم فاخرة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 120, name: "كبدة شمبري", price: 240, description: "كبدة شمبري طازجة.", image: "images/meat.jpg", category: "لحوم فاخرة" },
        { id: 121, name: "فلتو", price: 260, description: "فلتو فاخر.", image: "images/meat.jpg", category: "لحوم فاخرة" },

        // --- الطواجن (أسعار من الصورة) ---
        { id: 201, name: "ورقة لحمة بطاطس (كيلو)", price: 650, description: "ورقة لحمة مع البطاطس.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 202, name: "ورقة لحمة بطاطس (نصف كيلو)", price: 325, description: "ورقة لحمة مع البطاطس.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 203, name: "ورقة لحمة بصلية (كيلو)", price: 600, description: "ورقة لحمة مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 204, name: "ورقة لحمة بصلية (نصف كيلو)", price: 300, description: "ورقة لحمة مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 205, name: "طاجن عكاوي بصل (كيلو)", price: 500, description: "طاجن عكاوي بالبصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 206, name: "طاجن عكاوي بصل (نصف كيلو)", price: 250, description: "طاجن عكاوي بالبصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 207, name: "لحمة طاجن لسان العصفور (كيلو)", price: 600, description: "لحمة طاجن لسان العصفور.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 208, name: "لحمة طاجن لسان العصفور (نصف كيلو)", price: 300, description: "لحمة طاجن لسان العصفور.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 209, name: "رز معمر (كيلو)", price: 240, description: "رز معمر مصري.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 210, name: "رز معمر (نصف كيلو)", price: 120, description: "رز معمر مصري.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 211, name: "انتروكوت مشوي جريل (كيلو)", price: 600, description: "استروكوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 212, name: "انتروكوت مشوي جريل (نصف كيلو)", price: 300, description: "استروكوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 213, name: "سحق مشوي مع البصل (كيلو)", price: 520, description: "سحق مشوي مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 214, name: "سحق مشوي مع البصل (نصف كيلو)", price: 260, description: "سحق مشوي مع البصل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 215, name: "برجر مشوي (كيلو)", price: 500, description: "برجر مشوي طازج.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 216, name: "برجر مشوي (نصف كيلو)", price: 250, description: "برجر مشوي طازج.", image: "images/tajin.jpg", category: "طواجن" },

        // --- الحواوشي (أسعار من الصورة) ---
        { id: 301, name: "حواوشي لحمة مخصوص وسط", price: 100, description: "حواوشي لحمة مخصوص حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 302, name: "حواوشي لحمة مخصوص كبير", price: 140, description: "حواوشي لحمة مخصوص حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 303, name: "حواوشي لحمة مخصوص وش بيتزا", price: 160, description: "حواوشي لحمة مخصوص وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 304, name: "حواوشي سحق مخصوص وسط", price: 100, description: "حواوشي سحق مخصوص حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 305, name: "حواوشي سحق مخصوص كبير", price: 140, description: "حواوشي سحق مخصوص حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 306, name: "حواوشي سحق مخصوص وش بيتزا", price: 160, description: "حواوشي سحق مخصوص وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 307, name: "حواوشي بسطرمة وسط", price: 100, description: "حواوشي بسطرة حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 308, name: "حواوشي بسطرمة كبير", price: 140, description: "حواوشي بسطرة حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 309, name: "حواوشي بسطرمة وش بيتزا", price: 160, description: "حواوشي بسطرة وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 310, name: "حواوشي السرايا المميز (سكيتين) كبير", price: 140, description: "حواوشي السرايا المميز سكيتين حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 311, name: "حواوشي فراخ كبير", price: 70, description: "حواوشي فراخ حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 312, name: "حواوشي فراخ بالمشروم كبير", price: 90, description: "حواوشي فراخ بالمشروم حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 313, name: "فاهيتا فراخ وسط", price: 80, description: "فاهيتا فراخ حجم وسط.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 314, name: "فاهيتا فراخ كبير", price: 120, description: "فاهيتا فراخ حجم كبير.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 315, name: "فاهيتا فراخ وش بيتزا", price: 140, description: "فاهيتا فراخ وش بيتزا.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 316, name: "حواوشي لحمة عادي", price: 70, description: "حواوشي لحمة عادي.", image: "images/hawawshi.jpg", category: "حواوشي" },
        { id: 317, name: "حواوشي سحق بقالي", price: 70, description: "حواوشي سحق بقالي.", image: "images/hawawshi.jpg", category: "حواوشي" }
    ];

    // حفظ البيانات المحدثة في localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    // إظهار رسالة تأكيد
    console.log('تم تحديث البيانات بنجاح لتتوافق مع المنتجات المعروضة');
}

// تحميل قائمة اللحوم
function loadMenu() {
    const meatGrid = document.getElementById('meatGrid');
    const tajinGrid = document.getElementById('tajinGrid');
    const hawawshiGrid = document.getElementById('hawawshiGrid');
    
    if (meatGrid) meatGrid.innerHTML = '';
    if (tajinGrid) tajinGrid.innerHTML = '';
    if (hawawshiGrid) hawawshiGrid.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        let itemContent = '';
        if (item.category === 'لحوم فاخرة') {
            itemContent = `
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/logo.png';">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="menu-item-price">${item.price} جنيه / 500 جرام</div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                        إضافة للسلة
                    </button>
                </div>
            `;
        } else {
            itemContent = `
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="menu-item-price">${item.price} جنيه</div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                        إضافة للسلة
                    </button>
                </div>
            `;
        }
        menuItem.innerHTML = itemContent;
        if (item.category === 'لحوم فاخرة' && meatGrid) {
            meatGrid.appendChild(menuItem);
        } else if (item.category === 'طواجن' && tajinGrid) {
            tajinGrid.appendChild(menuItem);
        } else if (item.category === 'حواوشي' && hawawshiGrid) {
            hawawshiGrid.appendChild(menuItem);
        }
    });
}

// إضافة منتج للسلة
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    updateCart();
    showNotification('تم إضافة المنتج للسلة بنجاح!');
}

// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    cartTotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${item.price} جنيه</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotalElement.textContent = `${cartTotal} جنيه`;
    updateCartCount();
}

// تحديث الكمية
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
    }

    updateCart();
}

// تحديث عدد العناصر في السلة
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// فتح/إغلاق السلة
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// إتمام الطلب عبر واتساب
function checkout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة!', 'error');
        return;
    }

    // قراءة بيانات العميل من الحقول
    var name = document.getElementById('customerName') ? document.getElementById('customerName').value.trim() : '';
    var address = document.getElementById('customerAddress') ? document.getElementById('customerAddress').value.trim() : '';
    var phone = document.getElementById('customerPhone') ? document.getElementById('customerPhone').value.trim() : '';

    if (!name || !address || !phone) {
        alert('برجاء ادخال الاسم و العنوان و رقم التليفون قبل اتمام عمليه الشراء');
        return;
    }

    // إنشاء رسالة الطلب
    let message = `🍖 *طلب جديد - جزارة السرايا* 🍖\n\n`;
    message += `📋 *تفاصيل الطلب:*\n\n`;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        let quantityText = '';
        if (item.category === 'لحوم فاخرة') {
            const totalGrams = item.quantity * 500;
            quantityText = `  الكمية: ${item.quantity} × 500 جم = ${totalGrams} جم\n`;
        } else {
            quantityText = `  الكمية: ${item.quantity}\n`;
        }
        message += `• ${item.name}\n`;
        message += quantityText;
        message += `  السعر: ${item.price} جنيه\n`;
        message += `  المجموع: ${itemTotal} جنيه\n\n`;
    });

    message += `💰 *المجموع الكلي: ${cartTotal} جنيه* 💰\n\n`;
    message += `📞 *معلومات العميل:*\n`;
    message += `الاسم: ${name}\n`;
    message += `الهاتف: ${phone}\n`;
    message += `العنوان: ${address}\n\n`;
    message += `⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-EG')}\n\n`;
    message += `شكراً لاختياركم جزارة السرايا! 🎉`;

    // رقم واتساب صاحب الجزارة
    const whatsappNumber = '201124283331';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح واتساب
    window.open(whatsappUrl, '_blank');

    // إفراغ السلة
    // cart = [];
    // updateCart();
    // toggleCart();
    showNotification('تم إرسال الطلب بنجاح! سيتم التواصل معكم قريباً.');
}

// إظهار إشعار
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#FF4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// تفريغ السلة
function clearCart() {
    cart = [];
    updateCart();
    showNotification('تم تفريغ السلة');
}

// إغلاق السلة عند النقر خارجها
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
        cartSidebar.classList.remove('active');
    }
});

// إغلاق السلة عند الضغط على ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('cartSidebar').classList.remove('active');
    }
});
