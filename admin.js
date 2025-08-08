// Admin Panel JavaScript
let products = [];
let categories = [];
let images = [];

// Load data from localStorage
function loadData() {
    // Load products from localStorage or use default data
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    } else {
        // Default products if no data in localStorage
        products = [
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
            { id: 211, name: "انتركوت مشوي جريل (كيلو)", price: 600, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
            { id: 212, name: "انتركوت مشوي جريل (نصف كيلو)", price: 300, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
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
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Load categories
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
        categories = JSON.parse(savedCategories);
    } else {
        categories = [
            { id: 1, name: "لحوم فاخرة", description: "اللحوم الفاخرة والمخصوص" },
            { id: 2, name: "طواجن", description: "الطواجن المميزة" },
            { id: 3, name: "حواوشي", description: "الحواوشي الطازجة" }
        ];
        localStorage.setItem('categories', JSON.stringify(categories));
    }

    // Load images
    const savedImages = localStorage.getItem('images');
    if (savedImages) {
        images = JSON.parse(savedImages);
    } else {
        images = [
            { id: 1, name: "meat.jpg", url: "images/meat.jpg", category: "لحوم فاخرة" },
            { id: 2, name: "tajin.jpg", url: "images/tajin.jpg", category: "طواجن" },
            { id: 3, name: "hawawshi.jpg", url: "images/hawawshi.jpg", category: "حواوشي" }
        ];
        localStorage.setItem('images', JSON.stringify(images));
    }

    updateStats();
    loadProducts();
    loadCategories();
    loadImages();
}

// Update dashboard statistics
function updateStats() {
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalCategories').textContent = categories.length;
    document.getElementById('totalImages').textContent = images.length;
}

// Show tab content
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Product Management Functions
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${product.price} جنيه</p>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-actions">
                <button class="btn btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                    تعديل
                </button>
                <button class="btn btn-delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function showAddProductModal() {
    const modal = document.getElementById('addProductModal');
    // تعبئة قائمة الصور
    const imageSelect = document.getElementById('productImage');
    imageSelect.innerHTML = '';
    if (images.length > 0) {
        images.forEach(img => {
            const option = document.createElement('option');
            option.value = img.url;
            option.textContent = img.name;
            imageSelect.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'لا توجد صور متاحة';
        imageSelect.appendChild(option);
    }
    modal.style.display = 'block';
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const description = document.getElementById('productDescription').value;
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value;

    if (!name || !price || !category) {
        showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        description: description,
        category: category,
        image: image
    };

    products.push(newProduct);
    saveProducts();
    loadProducts();
    updateStats();
    closeModal();
    showMessage('تم إضافة المنتج بنجاح', 'success');
    
    // إرسال إشعار للصفحة الرئيسية
    notifyMainPage();

    // Clear form
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productImage').value = '';
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('editProductId').value = product.id;
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductCategory').value = product.category;
    // تعبئة قائمة الصور
    const imageSelect = document.getElementById('editProductImage');
    imageSelect.innerHTML = '';
    if (images.length > 0) {
        images.forEach(img => {
            const option = document.createElement('option');
            option.value = img.url;
            option.textContent = img.name;
            if (img.url === product.image) option.selected = true;
            imageSelect.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'لا توجد صور متاحة';
        imageSelect.appendChild(option);
    }
    document.getElementById('editProductModal').style.display = 'block';
}

function updateProduct() {
    const productId = parseInt(document.getElementById('editProductId').value);
    const name = document.getElementById('editProductName').value;
    const price = parseFloat(document.getElementById('editProductPrice').value);
    const description = document.getElementById('editProductDescription').value;
    const category = document.getElementById('editProductCategory').value;
    const image = document.getElementById('editProductImage').value;

    if (!name || !price || !category) {
        showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = {
            id: productId,
            name: name,
            price: price,
            description: description,
            category: category,
            image: image
        };

        saveProducts();
        loadProducts();
        closeModal();
        showMessage('تم تحديث المنتج بنجاح', 'success');
        
        // إرسال إشعار للصفحة الرئيسية
        notifyMainPage();
    }
}

function deleteProduct(productId) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        loadProducts();
        updateStats();
        showMessage('تم حذف المنتج بنجاح', 'success');
        
        // إرسال إشعار للصفحة الرئيسية
        notifyMainPage();
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchProducts').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    displayFilteredProducts(filteredProducts);
}

function searchProducts() {
    filterProducts();
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${product.price} جنيه</p>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-actions">
                <button class="btn btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                    تعديل
                </button>
                <button class="btn btn-delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Category Management Functions
function loadCategories() {
    const categoriesList = document.getElementById('categoriesList');
    if (!categoriesList) return;

    categoriesList.innerHTML = '';
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `
            <div class="category-info">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <span class="product-count">${getCategoryProductCount(category.name)} منتج</span>
            </div>
            <div class="category-actions">
                <button class="btn btn-edit" onclick="editCategory(${category.id})">
                    <i class="fas fa-edit"></i>
                    تعديل
                </button>
                <button class="btn btn-delete" onclick="deleteCategory(${category.id})">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        `;
        categoriesList.appendChild(categoryItem);
    });
}

function getCategoryProductCount(categoryName) {
    return products.filter(product => product.category === categoryName).length;
}

function showAddCategoryModal() {
    document.getElementById('addCategoryModal').style.display = 'block';
}

function editCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    document.getElementById('editCategoryName').value = category.name;
    document.getElementById('editCategoryDescription').value = category.description;
    document.getElementById('editCategoryId').value = category.id;

    document.getElementById('editCategoryModal').style.display = 'block';
}

function deleteCategory(categoryId) {
    if (confirm('هل أنت متأكد من حذف هذه الفئة؟')) {
        categories = categories.filter(c => c.id !== categoryId);
        saveCategories();
        loadCategories();
        updateStats();
        showMessage('تم حذف الفئة بنجاح', 'success');
    }
}

function addCategory() {
    const name = document.getElementById('categoryName').value;
    const description = document.getElementById('categoryDescription').value;

    if (!name) {
        showMessage('يرجى إدخال اسم الفئة', 'error');
        return;
    }

    const newCategory = {
        id: Date.now(),
        name: name,
        description: description
    };

    categories.push(newCategory);
    saveCategories();
    loadCategories();
    updateStats();
    closeModal();
    showMessage('تم إضافة الفئة بنجاح', 'success');

    // Clear form
    document.getElementById('categoryName').value = '';
    document.getElementById('categoryDescription').value = '';
}

function updateCategory() {
    const categoryId = parseInt(document.getElementById('editCategoryId').value);
    const name = document.getElementById('editCategoryName').value;
    const description = document.getElementById('editCategoryDescription').value;

    if (!name) {
        showMessage('يرجى إدخال اسم الفئة', 'error');
        return;
    }

    const categoryIndex = categories.findIndex(c => c.id === categoryId);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = {
            id: categoryId,
            name: name,
            description: description
        };

        saveCategories();
        loadCategories();
        closeModal();
        showMessage('تم تحديث الفئة بنجاح', 'success');
    }
}

// Image Management Functions
function loadImages() {
    const imagesGrid = document.getElementById('imagesGrid');
    if (!imagesGrid) return;

    imagesGrid.innerHTML = '';
    images.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.innerHTML = `
            <div class="image-preview">
                <img src="${image.url}" alt="${image.name}">
            </div>
            <div class="image-info">
                <h3>${image.name}</h3>
                <p>${image.category}</p>
            </div>
            <div class="image-actions">
                <button class="btn btn-delete" onclick="deleteImage(${image.id})">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        `;
        imagesGrid.appendChild(imageCard);
    });
}

function showImageUploadModal() {
    document.getElementById('imageUploadModal').style.display = 'block';
}

function uploadImage() {
    const fileInput = document.getElementById('imageFile');
    const category = document.getElementById('imageCategory').value;

    if (!fileInput.files.length || !category) {
        showMessage('يرجى اختيار ملف وفئة', 'error');
        return;
    }

    Array.from(fileInput.files).forEach(file => {
        const imageUrl = URL.createObjectURL(file);
        const newImage = {
            id: Date.now() + Math.random(),
            name: file.name,
            url: imageUrl,
            category: category
        };
        images.push(newImage);
    });
    saveImages();
    loadImages();
    updateStats();
    closeModal();
    showMessage('تم رفع الصور بنجاح', 'success');
    // Clear form
    fileInput.value = '';
    document.getElementById('imageCategory').value = '';
}

function deleteImage(imageId) {
    if (confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
        images = images.filter(img => img.id !== imageId);
        saveImages();
        loadImages();
        updateStats();
        showMessage('تم حذف الصورة بنجاح', 'success');
    }
}

// Settings Management Functions
function saveSettings() {
    const settings = {
        siteName: document.getElementById('siteName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value,
        whatsappNumber: document.getElementById('whatsappNumber').value
    };

    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('تم حفظ الإعدادات بنجاح', 'success');
}

function loadSettings() {
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        document.getElementById('siteName').value = settings.siteName || '';
        document.getElementById('phoneNumber').value = settings.phoneNumber || '';
        document.getElementById('address').value = settings.address || '';
        document.getElementById('whatsappNumber').value = settings.whatsappNumber || '';
    }
}

// Data Persistence Functions
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
    // إرسال إشعار للصفحة الرئيسية
    notifyMainPage();
}

function saveCategories() {
    localStorage.setItem('categories', JSON.stringify(categories));
}

function saveImages() {
    localStorage.setItem('images', JSON.stringify(images));
}

// Utility Functions
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Backup and Restore Functions
function exportData() {
    const data = {
        products: products,
        categories: categories,
        images: images,
        settings: JSON.parse(localStorage.getItem('siteSettings') || '{}')
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jazarat-al-saraya-backup.json';
    link.click();
    
    URL.revokeObjectURL(url);
    showMessage('تم تصدير البيانات بنجاح', 'success');
}

function importData() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    
    fileInput.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.products) {
                    products = data.products;
                    saveProducts();
                }
                
                if (data.categories) {
                    categories = data.categories;
                    saveCategories();
                }
                
                if (data.images) {
                    images = data.images;
                    saveImages();
                }
                
                if (data.settings) {
                    localStorage.setItem('siteSettings', JSON.stringify(data.settings));
                }
                
                loadData();
                showMessage('تم استيراد البيانات بنجاح', 'success');
            } catch (error) {
                showMessage('خطأ في قراءة الملف', 'error');
            }
        };
        reader.readAsText(file);
    };
    
    fileInput.click();
}

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من تسجيل الدخول أولاً
    if (!checkLoginStatus()) {
        window.location.href = 'login.html';
        return;
    }
    
    // تحديث البيانات في localStorage لتتوافق مع المنتجات المعروضة
    loadData();
    loadSettings();
});

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
        { id: 211, name: "انتركوت مشوي جريل (كيلو)", price: 600, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
        { id: 212, name: "انتركوت مشوي جريل (نصف كيلو)", price: 300, description: "انتركوت مشوي على الجريل.", image: "images/tajin.jpg", category: "طواجن" },
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
    
    // تحديث الفئات
    const updatedCategories = [
        { id: 1, name: "لحوم فاخرة", description: "اللحوم الفاخرة والمخصوص" },
        { id: 2, name: "طواجن", description: "الطواجن المميزة" },
        { id: 3, name: "حواوشي", description: "الحواوشي الطازجة" }
    ];
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    
    // تحديث الصور
    const updatedImages = [
        { id: 1, name: "شورت-ريب.png", url: "images/شورت-ريب.png", category: "لحوم فاخرة" },
        { id: 2, name: "توماهوك-ستيك-جديد1.jpg", url: "images/توماهوك-ستيك-جديد1.jpg", category: "لحوم فاخرة" },
        { id: 3, name: "اوسو-بوكو.png", url: "images/اوسو-بوكو.png", category: "لحوم فاخرة" },
        { id: 4, name: "T-bone-Steak.webp", url: "images/T-bone-Steak.webp", category: "لحوم فاخرة" },
        { id: 5, name: "بورتر-هاوس.png", url: "images/بورتر-هاوس.png", category: "لحوم فاخرة" },
        { id: 6, name: "رامب-ستيك.png", url: "images/رامب-ستيك.png", category: "لحوم فاخرة" },
        { id: 7, name: "سيرلوين-ستيك.png", url: "images/سيرلوين-ستيك.png", category: "لحوم فاخرة" },
        { id: 8, name: "جديد-استراجنوف.jpg", url: "images/جديد-استراجنوف.jpg", category: "لحوم فاخرة" },
        { id: 9, name: "برجر-مخصوص.jpg", url: "images/برجر-مخصوص.jpg", category: "لحوم فاخرة" },
        { id: 10, name: "بفتيك-وش-فخدة.png", url: "images/بفتيك-وش-فخدة.png", category: "لحوم فاخرة" },
        { id: 11, name: "سجق1.png", url: "images/سجق1.png", category: "لحوم فاخرة" },
        { id: 12, name: "كباب-حلة-شمبري-1.jpg", url: "images/كباب-حلة-شمبري-1.jpg", category: "لحوم فاخرة" },
        { id: 13, name: "مفروم.png", url: "images/مفروم.png", category: "لحوم فاخرة" },
        { id: 14, name: "موزه-شمبري.jpg", url: "images/موزه-شمبري.jpg", category: "لحوم فاخرة" },
        { id: 15, name: "انتركوت.jpg", url: "images/انتركوت.jpg", category: "لحوم فاخرة" },
        { id: 16, name: "logo.png", url: "images/logo.png", category: "شعار" }
    ];
    localStorage.setItem('images', JSON.stringify(updatedImages));
    
    // إظهار رسالة تأكيد
    showMessage('تم تحديث البيانات بنجاح لتتوافق مع المنتجات المعروضة', 'success');
}

// وظيفة لإرسال إشعار للصفحة الرئيسية
function notifyMainPage() {
    console.log('إرسال إشعار للصفحة الرئيسية');
    // إرسال حدث مخصص للصفحة الرئيسية
    window.dispatchEvent(new CustomEvent('productsUpdated'));
    
    // إرسال إشعار للصفحة الرئيسية عبر localStorage
    localStorage.setItem('productsUpdated', Date.now().toString());
    
    // إرسال إشعار إضافي للتأكد من التحديث
    localStorage.setItem('products', JSON.stringify(products));
    
    console.log('تم إرسال الإشعار بنجاح');
}

// وظيفة لتحديث الصفحة الرئيسية عند العودة منها
function updateMainPage() {
    console.log('تحديث الصفحة الرئيسية');
    // إرسال إشعار للصفحة الرئيسية
    localStorage.setItem('mainPageUpdate', Date.now().toString());
    
    // تأخير قصير قبل الانتقال للصفحة الرئيسية
    setTimeout(function() {
        console.log('الانتقال للصفحة الرئيسية');
        window.location.href = 'index.html';
    }, 100);
}

// وظائف إدارة الجلسة
function checkLoginStatus() {
    try {
        const localData = localStorage.getItem('adminSession');
        const sessionData = sessionStorage.getItem('adminSession');
        
        if (!localData || !sessionData) {
            return false;
        }
        
        const session = JSON.parse(localData);
        
        if (!session || !session.isLoggedIn) {
            return false;
        }
        
        // التحقق من انتهاء صلاحية الجلسة (24 ساعة)
        const currentTime = new Date().getTime();
        const loginTime = session.loginTime;
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 ساعة
        
        if (currentTime - loginTime > sessionDuration) {
            clearSession();
            return false;
        }
        
        return true;
    } catch (e) {
        console.error('خطأ في التحقق من حالة تسجيل الدخول:', e);
        return false;
    }
}

function clearSession() {
    localStorage.removeItem('adminSession');
    sessionStorage.removeItem('adminSession');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        clearSession();
        showMessage('تم تسجيل الخروج بنجاح', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}

// التحقق الدوري من صحة الجلسة
setInterval(function() {
    if (!checkLoginStatus()) {
        alert('انتهت صلاحية جلسة تسجيل الدخول. سيتم إعادة توجيهك لصفحة تسجيل الدخول.');
        window.location.href = 'login.html';
    }
}, 60000); // كل دقيقة

console.log('🔐 نظام إدارة الجلسة جاهز');
