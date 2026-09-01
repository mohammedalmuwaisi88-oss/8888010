/* ==========================================================================
   L'ÉLÉGANCE - Luxury High-End Jewelry Store JavaScript Engine
   Full E-Commerce Interactive Functionality
   ========================================================================== */

// Store Configuration
const STORE_CONFIG = {
    brandName: "L'ÉLÉGANCE",
    whatsappNumber: "96872420072",
    currency: "ر.ع",
    socialLinks: {
        instagram: "https://instagram.com/lelegance.jewelry",
        tiktok: "https://tiktok.com/@lelegance.jewelry",
        facebook: "https://facebook.com/lelegance.jewelry",
        x: "https://x.com/lelegance_j"
    }
};

// 10 Exclusive Products Array
const products = [
    {
        id: 1,
        name: "قلادة Aurelia",
        price: 85,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
        description: "قلادة فاخرة من الذهب الخالص عيار 18 مرصعة بالماس النقي المصمم هندسيًا، تعكس سحر الأناقة الكلاسيكية بلمسة عصريّة.",
        material: "ذهب أصفر عيار 18 + ألماس نقي",
        category: "قلائد"
    },
    {
        id: 2,
        name: "خاتم Élan",
        price: 65,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        description: "خاتم رفيع ينبض بالأناقة والمثالية، مصمم بأبعاد بسيطة تحاكي الأناقة اليومية والمناسبات الخاصة.",
        material: "ذهب أبيض عيار 18 + زفير أزرق",
        category: "خواتم"
    },
    {
        id: 3,
        name: "سوار Lumière",
        price: 75,
        image: "https://images.unsplash.com/photo-1611591475167-17bc44738734?auto=format&fit=crop&q=80&w=800",
        description: "سوار يتلألأ بالضوء مع كل حركة، يعبر عن الثقة والجمال الأخاذ بحرفية متقنة للغاية.",
        material: "ذهب روز جولد عيار 18",
        category: "أساور"
    },
    {
        id: 4,
        name: "أقراط Étoile",
        price: 55,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800",
        description: "أقراط مستوحاة من بريق النجوم في الليالي الصافية، خفيفة الوزن ومذهلة التفاصيل.",
        material: "ذهب أبيض مرصع بالزركون الفاخر",
        category: "أقراط"
    },
    {
        id: 5,
        name: "قلادة Noir",
        price: 95,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
        description: "تصميم جريء يجمع بين الذهب الأصفار وحجر العقيق الأسود النادر، ليضفي حضورًا لا يُنسى.",
        material: "ذهب عيار 18 + عقيق أسود",
        category: "قلائد"
    },
    {
        id: 6,
        name: "خاتم Celeste",
        price: 70,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800",
        description: "خاتم ملكي مستوحى من الأشكال السماوية، مصمم بدقة متناهية ليبرز جمال اليدين.",
        material: "ذهب أصفر عيار 18 + ألماس",
        category: "خواتم"
    },
    {
        id: 7,
        name: "سوار Royale",
        price: 80,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
        description: "سوار فاخر بتفاصيل معقدة منسوجة يدوياً يعكس الهيبة والرقي والتميز الملكي.",
        material: "ذهب أصفر وأبيض عيار 18",
        category: "أساور"
    },
    {
        id: 8,
        name: "أقراط Maison",
        price: 60,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800",
        description: "أقراط كلاسيكية تعكس تاريخ دارنا وتجسد بساطة الفخامة في أنقى صورها.",
        material: "ذهب أصفر عيار 18 + لؤلؤ طبيعي",
        category: "أقراط"
    },
    {
        id: 9,
        name: "خاتم Élégance",
        price: 90,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        description: "القطعة التوقيعية للدار، خاتم مرصع بالماس المصقول بعناية ف فائقة ليعطي لمعاناً أخاذاً.",
        material: "بلاتين خفي + ألماس صافي",
        category: "خواتم"
    },
    {
        id: 10,
        name: "قلادة Prestige",
        price: 120,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
        description: "قلادة القمة لدينا، تحفة فنية نادرة مصممة للمناسبات الكبرى والاستثنائية.",
        material: "ذهب عيار 21 + حجر الزمرد النقي",
        category: "قلائد"
    }
];

// Application State Variables
let cart = [];
let wishlist = [];
let showAllProducts = false;

// DOM Elements Selection
const productGrid = document.getElementById('productGrid');
const toggleProductsBtn = document.getElementById('toggleProductsBtn');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartDrawerCount = document.getElementById('cartDrawerCount');

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistCount = document.getElementById('wishlistCount');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const closeWishlist = document.getElementById('closeWishlist');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistBody = document.getElementById('wishlistBody');
const wishlistDrawerCount = document.getElementById('wishlistDrawerCount');

const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');

const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutItemsList = document.getElementById('checkoutItemsList');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutGrandTotal = document.getElementById('checkoutGrandTotal');

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const closeNav = document.getElementById('closeNav');
const header = document.getElementById('header');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadWishlist();
    renderProducts();
    setupEventListeners();
    setupScrollHeader();
    setupSocialLinks();
});

// Setup Social Links from Config
function setupSocialLinks() {
    const s = STORE_CONFIG.socialLinks;
    if(document.getElementById('socialInstagram')) document.getElementById('socialInstagram').href = s.instagram;
    if(document.getElementById('socialTiktok')) document.getElementById('socialTiktok').href = s.tiktok;
    if(document.getElementById('socialFacebook')) document.getElementById('socialFacebook').href = s.facebook;
    if(document.getElementById('socialX')) document.getElementById('socialX').href = s.x;
    if(document.getElementById('contactInstagramLink')) document.getElementById('contactInstagramLink').href = s.instagram;
}

// Render Product Cards
function renderProducts() {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    products.forEach((product, index) => {
        const isHidden = !showAllProducts && index >= 5;
        const isFav = wishlist.includes(product.id);

        const card = document.createElement('div');
        card.className = `product-card ${isHidden ? 'hidden' : ''}`;
        card.innerHTML = `
            <div class="product-image-container">
                <button class="product-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="إضافة للمفضلة">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openProductModal(${product.id})">
            </div>
            <div class="product-content">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-bottom">
                    <span class="product-price">${product.price} ${STORE_CONFIG.currency}</span>
                    <button class="product-add-btn" onclick="addToCart(${product.id})">
                        إضافة للسلة <i class="fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Toggle Products Visibility (Show 5 vs All 10)
function toggleProducts() {
    showAllProducts = !showAllProducts;
    renderProducts();

    if (showAllProducts) {
        toggleProductsBtn.querySelector('span').textContent = 'إخفاء المنتجات';
        toggleProductsBtn.querySelector('i').className = 'fa-solid fa-chevron-up';
    } else {
        toggleProductsBtn.querySelector('span').textContent = 'عرض جميع المنتجات';
        toggleProductsBtn.querySelector('i').className = 'fa-solid fa-chevron-down';
        // Smooth scroll back to collection top
        document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal Product Details Function
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="product-modal-grid">
            <div class="p-modal-media">
                <img src="${product.image}" alt="${product.name}" class="p-modal-img">
            </div>
            <div class="p-modal-details">
                <h2 class="p-modal-title">${product.name}</h2>
                <div class="p-modal-price">${product.price} ${STORE_CONFIG.currency}</div>
                <p class="p-modal-desc">${product.description}</p>
                <div class="p-modal-meta">
                    <div class="meta-row">
                        <span class="meta-label">الخامة:</span>
                        <span class="meta-val">${product.material}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">الفئة:</span>
                        <span class="meta-val">${product.category}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">التوفر:</span>
                        <span class="meta-val" style="color: #27ae60;">متوفر للطلب الفوري</span>
                    </div>
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <button class="btn btn-primary btn-block btn-lg" onclick="addToCart(${product.id}); closeProductModalFunc();">
                        إضافة إلى سلة التسوق
                    </button>
                </div>
            </div>
        </div>
    `;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModalFunc() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Shopping Cart Management
function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart();
    renderCart();
    showToast('تمت إضافة القطعة إلى سلة التسوق الفاخرة');
    openCartDrawer();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    showToast('تم إزالة القطعة من السلة');
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
        renderCart();
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function renderCart() {
    if (!cartBody) return;

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartDrawerCount.textContent = totalCount;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div style="text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.3;"></i>
                <p>سلة التسوق فارغة حالياً</p>
            </div>
        `;
        cartSubtotal.textContent = `0.00 ${STORE_CONFIG.currency}`;
        cartTotal.textContent = `0.00 ${STORE_CONFIG.currency}`;
        if(proceedCheckoutBtn) proceedCheckoutBtn.disabled = true;
        return;
    }

    if(proceedCheckoutBtn) proceedCheckoutBtn.disabled = false;
    cartBody.innerHTML = '';

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${product.name}</h4>
                <div class="cart-item-price">${product.price} ${STORE_CONFIG.currency}</div>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${product.id})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartBody.appendChild(cartItemEl);
    });

    const total = calculateTotal();
    cartSubtotal.textContent = `${total.toFixed(2)} ${STORE_CONFIG.currency}`;
    cartTotal.textContent = `${total.toFixed(2)} ${STORE_CONFIG.currency}`;
}

function saveCart() {
    localStorage.setItem('legance_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('legance_cart');
    if (saved) {
        try { cart = JSON.parse(saved); } catch(e) { cart = []; }
    }
    renderCart();
}

function openCartDrawer() {
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

// Wishlist System
function toggleWishlist(productId, e) {
    if(e) e.stopPropagation();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('تم إزالة القطعة من المفضلة');
    } else {
        wishlist.push(productId);
        showToast('تمت إضافة القطعة إلى المفضلة');
    }
    saveWishlist();
    renderProducts();
    renderWishlist();
}

function saveWishlist() {
    localStorage.setItem('legance_wishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const saved = localStorage.getItem('legance_wishlist');
    if (saved) {
        try { wishlist = JSON.parse(saved); } catch(e) { wishlist = []; }
    }
    renderWishlist();
}

function renderWishlist() {
    wishlistCount.textContent = wishlist.length;
    if(wishlistDrawerCount) wishlistDrawerCount.textContent = wishlist.length;

    if (!wishlistBody) return;

    if (wishlist.length === 0) {
        wishlistBody.innerHTML = `
            <div style="text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.3;"></i>
                <p>قائمة المفضلة فارغة</p>
            </div>
        `;
        return;
    }

    wishlistBody.innerHTML = '';
    wishlist.forEach(id => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${product.name}</h4>
                <div class="cart-item-price">${product.price} ${STORE_CONFIG.currency}</div>
                <button class="btn btn-primary" style="padding: 4px 12px; font-size: 0.8rem;" onclick="addToCart(${product.id});">
                    انقل للسلة
                </button>
            </div>
            <button class="cart-item-remove" onclick="toggleWishlist(${product.id})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        wishlistBody.appendChild(itemEl);
    });
}

// Search System
function searchProducts(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p class="search-placeholder">ابدأ الكتابة للبحث في تشكيلتنا الحصرية...</p>';
        return;
    }

    const filtered = products.filter(p => 
        p.name.includes(query) || 
        p.description.includes(query) || 
        p.category.includes(query)
    );

    if (filtered.length === 0) {
        searchResults.innerHTML = '<p class="search-placeholder">لم نتمكن من العثور على قطع تطابق بحثك.</p>';
        return;
    }

    searchResults.innerHTML = '';
    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.onclick = () => {
            closeSearchOverlay();
            openProductModal(p.id);
        };
        item.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div>
                <h4 style="font-size: 1rem;">${p.name}</h4>
                <span style="color: var(--gold-primary); font-weight: 600;">${p.price} ${STORE_CONFIG.currency}</span>
            </div>
        `;
        searchResults.appendChild(item);
    });
}

function openSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.focus();
}

function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '<p class="search-placeholder">ابدأ الكتابة للبحث في تشكيلتنا الحصرية...</p>';
}

// Checkout & Order Validation
function openCheckout() {
    if (cart.length === 0) {
        showToast('السلة فارغة! يرجى إضافة منتجات أولاً');
        return;
    }
    closeCartDrawer();
    renderCheckoutSummary();
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderCheckoutSummary() {
    checkoutItemsList.innerHTML = '';
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const row = document.createElement('div');
        row.className = 'sum-item';
        row.innerHTML = `
            <span>${product.name} × ${item.quantity}</span>
            <span>${(product.price * item.quantity).toFixed(2)} ${STORE_CONFIG.currency}</span>
        `;
        checkoutItemsList.appendChild(row);
    });

    const total = calculateTotal();
    checkoutSubtotal.textContent = `${total.toFixed(2)} ${STORE_CONFIG.currency}`;
    checkoutGrandTotal.textContent = `${total.toFixed(2)} ${STORE_CONFIG.currency}`;
}

// Handle Form Submission
function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const state = document.getElementById('custState').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();
    const method = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Validation
    let isValid = true;
    if (!name) { showError('nameError', 'يرجى إدخال الاسم الكامل'); isValid = false; } else { clearError('nameError'); }
    if (!phone || phone.length < 8) { showError('phoneError', 'يرجى إدخال رقم هاتف صحيح'); isValid = false; } else { clearError('phoneError'); }
    if (!state) { showError('stateError', 'يرجى إدخال الولاية / المنطقة'); isValid = false; } else { clearError('stateError'); }
    if (!address) { showError('addressError', 'يرجى إدخال العنوان التفصيلي'); isValid = false; } else { clearError('addressError'); }

    if (!isValid) return;

    const customerDetails = { name, phone, state, address, notes };

    if (method === 'whatsapp') {
        openWhatsAppOrder(customerDetails);
    } else if (method === 'online') {
        processOnlinePayment(customerDetails);
    }
}

function showError(id, msg) {
    document.getElementById(id).textContent = msg;
}

function clearError(id) {
    document.getElementById(id).textContent = '';
}

// Generate WhatsApp Order Message
function openWhatsAppOrder(customer) {
    let orderText = `مرحبًا، أود إتمام طلب جديد من ${STORE_CONFIG.brandName}\n\n`;
    orderText += `تفاصيل الطلب:\n`;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            orderText += `المنتج: ${product.name}\nالكمية: ${item.quantity}\nالسعر: ${product.price} ${STORE_CONFIG.currency}\n---\n`;
        }
    });

    const total = calculateTotal();
    orderText += `الإجمالي: ${total.toFixed(2)} ${STORE_CONFIG.currency}\n\n`;
    orderText += `بيانات العميل:\n`;
    orderText += `الاسم: ${customer.name}\n`;
    orderText += `الهاتف: ${customer.phone}\n`;
    orderText += `الولاية: ${customer.state}\n`;
    orderText += `العنوان: ${customer.address}\n`;
    if (customer.notes) {
        orderText += `ملاحظات: ${customer.notes}\n`;
    }
    orderText += `\nطريقة الطلب: WhatsApp\nشكرًا لكم.`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Clear cart and close modal after launching WhatsApp
    cart = [];
    saveCart();
    renderCart();
    closeCheckout();

    window.open(whatsappUrl, '_blank');
}

// Electronic Payment Integration Placeholder
function processOnlinePayment(customer) {
    showToast('جاري تحويلك إلى بوابة الدفع الآمنة...');

    setTimeout(() => {
        alert(`عزيزي ${customer.name}، سيتم الآن ربطك ببوابة الدفع الإلكتروني.`);
        cart = [];
        saveCart();
        renderCart();
        closeCheckout();
    }, 1200);
}

// Toast Notification Helper
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if(!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-primary);"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Event Listeners Setup
function setupEventListeners() {
    if(toggleProductsBtn) toggleProductsBtn.addEventListener('click', toggleProducts);
    
    // Header & Navigation
    if(mobileToggle) mobileToggle.addEventListener('click', () => navMenu.classList.add('active'));
    if(closeNav) closeNav.addEventListener('click', () => navMenu.classList.remove('active'));
    
    // Drawers
    if(cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if(closeCart) closeCart.addEventListener('click', closeCartDrawer);
    if(cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    if(wishlistBtn) wishlistBtn.addEventListener('click', () => wishlistDrawer.classList.add('active'));
    if(closeWishlist) closeWishlist.addEventListener('click', () => wishlistDrawer.classList.remove('active'));
    if(wishlistOverlay) wishlistOverlay.addEventListener('click', () => wishlistDrawer.classList.remove('active'));

    // Modals
    if(closeProductModal) closeProductModal.addEventListener('click', closeProductModalFunc);
    if(modalOverlay) modalOverlay.addEventListener('click', closeProductModalFunc);

    // Search
    if(searchBtn) searchBtn.addEventListener('click', openSearchOverlay);
    if(closeSearch) closeSearch.addEventListener('click', closeSearchOverlay);
    if(searchInput) searchInput.addEventListener('input', (e) => searchProducts(e.target.value));

    // Checkout
    if(proceedCheckoutBtn) proceedCheckoutBtn.addEventListener('click', openCheckout);
    if(closeCheckoutModal) closeCheckoutModal.addEventListener('click', closeCheckout);
    if(checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);
    if(checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Payment radio card UI active class toggle
    const payRadios = document.querySelectorAll('input[name="paymentMethod"]');
    payRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.payment-option-card').forEach(card => card.classList.remove('active'));
            e.target.closest('.payment-option-card').classList.add('active');
        });
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Effects for Sticky Header
function setupScrollHeader() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
