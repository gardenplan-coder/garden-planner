/**
 * Brandenburg Garden Planner
 * A mobile-friendly garden planning application
 *
 * Features:
 * - Drag & drop zone placement with touch support
 * - RGO 1/3 rule compliance tracking
 * - Multi-language support (EN, DE, AR)
 * - Aerial photo overlay
 * - Custom markers
 * - Export/Import functionality
 * - Local storage persistence
 */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        title: "Brandenburg Garden",
        palette: "Plant Palette",
        vegetables: "Vegetables",
        fruitTrees: "Fruit Trees (RGO)",
        berries: "Berry Bushes (1.5m²)",
        decorative: "Decorative (NO credit!)",
        structures: "Structures",
        landWater: "Land & Water",
        customSection: "Custom",
        rgoRule: "RGO 1/3 Rule",
        gardenTotal: "Garden Total:",
        required: "Required (⅓):",
        fruitTreesLabel: "Fruit Trees:",
        maxCap: "Max 35% cap:",
        berryLabel: "Berry Bushes:",
        vegLabel: "Vegetables:",
        totalCredit: "Total Credit:",
        progress: "Progress",
        aerialOverlay: "Aerial Overlay",
        noPhoto: "No photo loaded",
        opacity: "Opacity:",
        loadPhoto: "Load",
        clear: "Clear",
        grid: "Grid",
        editZone: "Edit Zone",
        icon: "Icon",
        name: "Name",
        positionCells: "Position (cells)",
        sizeCells: "Size (cells)",
        treeType: "Tree Type (RGO)",
        notes: "Notes",
        update: "Update",
        delete: "Delete",
        pickIcon: "Pick Icon",
        cancel: "Cancel",
        select: "Select",
        customMarker: "Custom Marker",
        color: "Color",
        category: "Category (1/3 Rule)",
        catStructure: "🏠 Structure (0 credit)",
        catVegetable: "🥬 Vegetable (area)",
        catBerry: "🍓 Berry (1.5 m²)",
        catFruitTree: "🍎 Fruit Tree (4 m²)",
        create: "Create",
        gardenSettings: "Garden Settings",
        gardenWidth: "Garden Width (meters)",
        gardenHeight: "Garden Height (meters)",
        cellSize: "Cell Size",
        cellDetailed: "0.5 meters (detailed)",
        cellSimple: "1 meter (simple)",
        sizeWarning: "Changing size will clear current layout. Export first!",
        current: "Current:",
        apply: "Apply",
        edit: "Edit",
        duplicate: "Duplicate",
        size: "Size",
        custom: "Custom",
        load: "Load",
        export: "Export",
        save: "Save",
        tomato: "Tomato", pepper: "Pepper", kale: "Kale", carrot: "Carrot",
        squash: "Squash", herbs: "Herbs", potato: "Potato",
        cucumber: "Cucumber", zucchini: "Zucchini", beetroot: "Beetroot",
        onion: "Onion", garlic: "Garlic", lettuce: "Lettuce",
        peas: "Peas", beans: "Beans", corn: "Corn", radish: "Radish",
        spinach: "Spinach", kohlrabi: "Kohlrabi", rhubarb: "Rhubarb", leek: "Leek",
        apple: "Apple", pear: "Pear", cherry: "Cherry", plum: "Plum",
        apricot: "Apricot", sourCherry: "S.Cherry", quince: "Quince", mirabelle: "Mirabelle",
        strawberry: "Strawberry", raspberry: "Raspberry", currant: "Currant", gooseberry: "Gooseberry",
        tree: "Tree 0m²", deco: "Deco 0m²", bigTree: "Big Tree",
        house: "House", shed: "Shed", compost: "Compost", path: "Path",
        grass: "Grass", tarp: "Tarp", pond: "Pond", water: "Water", nettle: "Nettle", weeds: "Weeds", entrance: "Entry",
        saved: "Saved!",
        updated: "Updated!",
        created: "Created!",
        duplicated: "Duplicated!",
        loaded: "Loaded!",
        cleared: "Cleared!",
        photoLoaded: "Aerial photo loaded!",
        photoCleared: "Aerial photo cleared",
        gardenSet: "Garden set to",
        added: "added!",
        deselect: "Deselect", bringUp: "Up", sendDown: "Down", aerial: "Aerial",
        addPlant: "Add Plant",
        welcome: "Welcome to Brandenburg Garden Planner!",
        welcomeDesc: "Set your garden size to get started. You can change this later in Settings.",
        start: "Start Planning"
    },
    de: {
        title: "Brandenburg Garten",
        palette: "Pflanzen-Palette",
        vegetables: "Gemüse",
        fruitTrees: "Obstbäume (RGO)",
        berries: "Beerensträucher (1,5m²)",
        decorative: "Zierpflanzen (KEIN Kredit!)",
        structures: "Gebäude",
        landWater: "Land & Wasser",
        customSection: "Benutzerdefiniert",
        rgoRule: "RGO 1/3 Regel",
        gardenTotal: "Garten Gesamt:",
        required: "Erforderlich (⅓):",
        fruitTreesLabel: "Obstbäume:",
        maxCap: "Max 35% Grenze:",
        berryLabel: "Beerensträucher:",
        vegLabel: "Gemüse:",
        totalCredit: "Gesamt Kredit:",
        progress: "Fortschritt",
        aerialOverlay: "Luftbild-Overlay",
        noPhoto: "Kein Foto geladen",
        opacity: "Deckkraft:",
        loadPhoto: "Laden",
        clear: "Löschen",
        grid: "Raster",
        editZone: "Zone bearbeiten",
        icon: "Symbol",
        name: "Name",
        positionCells: "Position (Zellen)",
        sizeCells: "Größe (Zellen)",
        treeType: "Baumtyp (RGO)",
        notes: "Notizen",
        update: "Aktualisieren",
        delete: "Löschen",
        pickIcon: "Symbol wählen",
        cancel: "Abbrechen",
        select: "Auswählen",
        customMarker: "Benutzerdefinierte Markierung",
        color: "Farbe",
        category: "Kategorie (1/3 Regel)",
        catStructure: "🏠 Gebäude (0 Kredit)",
        catVegetable: "🥬 Gemüse (Fläche)",
        catBerry: "🍓 Beeren (1,5 m²)",
        catFruitTree: "🍎 Obstbaum (4 m²)",
        create: "Erstellen",
        gardenSettings: "Garten-Einstellungen",
        gardenWidth: "Gartenbreite (Meter)",
        gardenHeight: "Gartenhöhe (Meter)",
        cellSize: "Zellengröße",
        cellDetailed: "0,5 Meter (detailliert)",
        cellSimple: "1 Meter (einfach)",
        sizeWarning: "Größenänderung löscht aktuelles Layout. Erst exportieren!",
        current: "Aktuell:",
        apply: "Anwenden",
        edit: "Bearbeiten",
        duplicate: "Duplizieren",
        size: "Größe",
        custom: "Eigene",
        load: "Laden",
        export: "Export",
        save: "Speichern",
        tomato: "Tomate", pepper: "Paprika", kale: "Grünkohl", carrot: "Möhre",
        squash: "Kürbis", herbs: "Kräuter", potato: "Kartoffel",
        cucumber: "Gurke", zucchini: "Zucchini", beetroot: "Rote Bete",
        onion: "Zwiebel", garlic: "Knoblauch", lettuce: "Salat",
        peas: "Erbsen", beans: "Bohnen", corn: "Mais", radish: "Radieschen",
        spinach: "Spinat", kohlrabi: "Kohlrabi", rhubarb: "Rhabarber", leek: "Lauch",
        apple: "Apfel", pear: "Birne", cherry: "Kirsche", plum: "Pflaume",
        apricot: "Aprikose", sourCherry: "Sauerkirsche", quince: "Quitte", mirabelle: "Mirabelle",
        strawberry: "Erdbeere", raspberry: "Himbeere", currant: "Johannisbeere", gooseberry: "Stachelbeere",
        tree: "Baum 0m²", deco: "Deko 0m²", bigTree: "Großbaum",
        house: "Laube", shed: "Schuppen", compost: "Kompost", path: "Weg",
        grass: "Rasen", tarp: "Plane", pond: "Teich", water: "Wasser", nettle: "Brennnessel", weeds: "Unkraut", entrance: "Eingang",
        saved: "Gespeichert!",
        updated: "Aktualisiert!",
        created: "Erstellt!",
        duplicated: "Dupliziert!",
        loaded: "Geladen!",
        cleared: "Gelöscht!",
        photoLoaded: "Luftbild geladen!",
        photoCleared: "Luftbild gelöscht",
        gardenSet: "Garten eingestellt auf",
        added: "hinzugefügt!",
        deselect: "Abwählen", bringUp: "Hoch", sendDown: "Runter", aerial: "Luftbild",
        addPlant: "Pflanze",
        welcome: "Willkommen beim Brandenburg Gartenplaner!",
        welcomeDesc: "Gib die Größe deines Gartens ein. Du kannst das später in den Einstellungen ändern.",
        start: "Los geht's"
    },
    ar: {
        title: "مخطط حديقة براندنبورغ",
        palette: "لوحة النباتات",
        vegetables: "خضروات",
        fruitTrees: "أشجار الفاكهة (RGO)",
        berries: "شجيرات التوت (1.5م²)",
        decorative: "زينة (بدون رصيد!)",
        structures: "مباني",
        landWater: "أرض ومياه",
        customSection: "مخصص",
        rgoRule: "قاعدة RGO 1/3",
        gardenTotal: "إجمالي الحديقة:",
        required: "المطلوب (⅓):",
        fruitTreesLabel: "أشجار الفاكهة:",
        maxCap: "الحد الأقصى 35%:",
        berryLabel: "شجيرات التوت:",
        vegLabel: "خضروات:",
        totalCredit: "إجمالي الرصيد:",
        progress: "التقدم",
        aerialOverlay: "صورة جوية",
        noPhoto: "لا توجد صورة",
        opacity: "الشفافية:",
        loadPhoto: "تحميل",
        clear: "مسح",
        grid: "شبكة",
        editZone: "تعديل المنطقة",
        icon: "رمز",
        name: "الاسم",
        positionCells: "الموقع (خلايا)",
        sizeCells: "الحجم (خلايا)",
        treeType: "نوع الشجرة (RGO)",
        notes: "ملاحظات",
        update: "تحديث",
        delete: "حذف",
        pickIcon: "اختر رمز",
        cancel: "إلغاء",
        select: "اختيار",
        customMarker: "علامة مخصصة",
        color: "اللون",
        category: "الفئة (قاعدة 1/3)",
        catStructure: "🏠 مبنى (0 رصيد)",
        catVegetable: "🥬 خضروات (المساحة)",
        catBerry: "🍓 توت (1.5 م²)",
        catFruitTree: "🍎 شجرة فاكهة (4 م²)",
        create: "إنشاء",
        gardenSettings: "إعدادات الحديقة",
        gardenWidth: "عرض الحديقة (متر)",
        gardenHeight: "طول الحديقة (متر)",
        cellSize: "حجم الخلية",
        cellDetailed: "0.5 متر (مفصل)",
        cellSimple: "1 متر (بسيط)",
        sizeWarning: "تغيير الحجم سيمسح التصميم الحالي. صدّر أولاً!",
        current: "الحالي:",
        apply: "تطبيق",
        edit: "تعديل",
        duplicate: "نسخ",
        size: "الحجم",
        custom: "مخصص",
        load: "تحميل",
        export: "تصدير",
        save: "حفظ",
        tomato: "طماطم", pepper: "فلفل", kale: "كرنب", carrot: "جزر",
        squash: "قرع", herbs: "أعشاب", potato: "بطاطا",
        cucumber: "خيار", zucchini: "كوسا", beetroot: "شمندر",
        onion: "بصل", garlic: "ثوم", lettuce: "خس",
        peas: "بازلاء", beans: "فاصوليا", corn: "ذرة", radish: "فجل",
        spinach: "سبانخ", kohlrabi: "كرنب ساقي", rhubarb: "راوند", leek: "كراث",
        apple: "تفاح", pear: "كمثرى", cherry: "كرز", plum: "برقوق",
        apricot: "مشمش", sourCherry: "كرز حامض", quince: "سفرجل", mirabelle: "ميرابيل",
        strawberry: "فراولة", raspberry: "توت", currant: "كشمش", gooseberry: "عنب الثعلب",
        tree: "شجرة 0م²", deco: "زينة 0م²", bigTree: "شجرة كبيرة",
        house: "بيت", shed: "كوخ", compost: "سماد", path: "ممر",
        grass: "عشب", tarp: "قماش", pond: "بركة", water: "ماء", nettle: "قراص", weeds: "أعشاب ضارة", entrance: "مدخل",
        saved: "تم الحفظ!",
        updated: "تم التحديث!",
        created: "تم الإنشاء!",
        duplicated: "تم النسخ!",
        loaded: "تم التحميل!",
        cleared: "تم المسح!",
        photoLoaded: "تم تحميل الصورة الجوية!",
        photoCleared: "تم مسح الصورة الجوية",
        gardenSet: "تم ضبط الحديقة على",
        added: "تمت الإضافة!",
        deselect: "إلغاء", bringUp: "أعلى", sendDown: "أسفل", aerial: "جوي",
        addPlant: "أضف نبات",
        welcome: "!مرحباً بك في مخطط حديقة براندنبورغ",
        welcomeDesc: "أدخل حجم حديقتك للبدء. يمكنك تغيير ذلك لاحقاً في الإعدادات.",
        start: "ابدأ التخطيط"
    }
};

// ============================================
// APPLICATION STATE
// ============================================
const App = {
    // Language
    currentLang: 'en',

    // Garden dimensions
    GARDEN_W: 25,
    GARDEN_H: 25,
    CELL_SIZE: 0.5,
    GRID_W: 50,
    GRID_H: 50,
    CELL: 14,

    // Zones
    zones: [],
    customMarkers: [],
    selectedZone: null,
    zoneIdCounter: 1,
    customIdCounter: 1,

    // Drag state
    isDragging: false,
    isResizing: false,
    dragOffset: { x: 0, y: 0 },
    resizeHandle: '',
    draggedItem: null,
    touchDragItem: null,
    touchClone: null,

    // View
    currentZoom: 1,
    aerialVisible: true,
    aerialOpacity: 50,

    // Icon picker
    selectedIcon: '⭐',
    iconMode: 'custom',
    selectedColor: null,

    // RGO Credits
    FRUIT_CREDITS: { hoch: 8, halb: 4, nieder: 1.5 },
    BERRY_CREDIT: 1.5,

    // Zone configuration
    config: {
        tomato: { color: 'zone-tomato', cat: 'vegetable' },
        pepper: { color: 'zone-pepper', cat: 'vegetable' },
        cabbage: { color: 'zone-cabbage', cat: 'vegetable' },
        carrot: { color: 'zone-carrot', cat: 'vegetable' },
        squash: { color: 'zone-squash', cat: 'vegetable' },
        herbs: { color: 'zone-herbs', cat: 'vegetable' },
        potato: { color: 'zone-potato', cat: 'vegetable' },
        cucumber: { color: 'zone-cucumber', cat: 'vegetable' },
        zucchini: { color: 'zone-zucchini', cat: 'vegetable' },
        beetroot: { color: 'zone-beetroot', cat: 'vegetable' },
        onion: { color: 'zone-onion', cat: 'vegetable' },
        garlic: { color: 'zone-garlic', cat: 'vegetable' },
        lettuce: { color: 'zone-lettuce', cat: 'vegetable' },
        peas: { color: 'zone-peas', cat: 'vegetable' },
        beans: { color: 'zone-beans', cat: 'vegetable' },
        corn: { color: 'zone-corn', cat: 'vegetable' },
        radish: { color: 'zone-radish', cat: 'vegetable' },
        spinach: { color: 'zone-spinach', cat: 'vegetable' },
        kohlrabi: { color: 'zone-kohlrabi', cat: 'vegetable' },
        rhubarb: { color: 'zone-rhubarb', cat: 'vegetable' },
        leek: { color: 'zone-leek', cat: 'vegetable' },
        grass: { color: 'zone-grass', cat: 'structure' },
        tarp: { color: 'zone-tarp', cat: 'structure' },
        'fruit-tree': { color: 'zone-fruit-tree', cat: 'fruit-tree', treeType: 'halb' },
        'fruit-hoch': { color: 'zone-fruit-tree', cat: 'fruit-tree', treeType: 'halb' },
        'fruit-halb': { color: 'zone-fruit-tree', cat: 'fruit-tree', treeType: 'halb' },
        'fruit-nieder': { color: 'zone-fruit-tree', cat: 'fruit-tree', treeType: 'halb' },
        'deco-tree': { color: 'zone-deco-tree', cat: 'structure' },
        'big-tree': { color: 'zone-big-tree', cat: 'structure' },
        berry: { color: 'zone-berry', cat: 'berry' },
        house: { color: 'zone-house', cat: 'structure' },
        shed: { color: 'zone-shed', cat: 'structure' },
        compost: { color: 'zone-compost', cat: 'structure' },
        pond: { color: 'zone-pond', cat: 'structure' },
        water: { color: 'zone-water', cat: 'structure' },
        path: { color: 'zone-path', cat: 'structure' },
        entrance: { color: 'zone-entrance', cat: 'structure' },
        nettle: { color: 'zone-nettle', cat: 'structure' },
        weeds: { color: 'zone-weeds', cat: 'structure' },
        custom: { color: 'zone-custom', cat: 'structure' }
    },

    // Icons for picker
    ICONS: ['🍎','🍐','🍊','🍋','🍒','🍑','🍓','🫐','🍇','🥝','🍅','🫑','🥕','🌽','🥬','🥦','🧄','🧅','🥔','🎃','🌿','☘️','🌱','🌳','🌲','🎋','🌴','🌾','🍀','🪴','🐸','🐝','🦋','🐌','🐞','🏠','🏚️','🛖','🪣','🧰','🚿','🛤️','🚪','🐓','⭐','💧','🔥','🌈','🟫','🟢','🔴','🟡','🟣','⚪','🪨','🧱','🪵'],

    // Colors for custom markers
    colors: [
        { cls: 'pal-green', bg: 'linear-gradient(135deg,#81C784,#4CAF50)' },
        { cls: 'pal-darkgreen', bg: 'linear-gradient(135deg,#66BB6A,#2E7D32)' },
        { cls: 'pal-lime', bg: 'linear-gradient(135deg,#C5E1A5,#8BC34A)' },
        { cls: 'pal-blue', bg: 'linear-gradient(135deg,#4FC3F7,#0288D1)' },
        { cls: 'pal-purple', bg: 'linear-gradient(135deg,#CE93D8,#7B1FA2)' },
        { cls: 'pal-pink', bg: 'linear-gradient(135deg,#F48FB1,#D81B60)' },
        { cls: 'pal-red', bg: 'linear-gradient(135deg,#EF5350,#C62828)' },
        { cls: 'pal-orange', bg: 'linear-gradient(135deg,#FFB74D,#FF9800)' },
        { cls: 'pal-yellow', bg: 'linear-gradient(135deg,#FFF176,#FFC107)' },
        { cls: 'pal-brown', bg: 'linear-gradient(135deg,#A1887F,#6D4C41)' },
        { cls: 'pal-gray', bg: 'linear-gradient(135deg,#90A4AE,#546E7A)' }
    ],

    // DOM Elements cache
    elements: {}
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function t(key) {
    return translations[App.currentLang][key] || translations['en'][key] || key;
}

function getTotal() {
    return App.GARDEN_W * App.GARDEN_H;
}

function getRequired() {
    return getTotal() / 3;
}

function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

// ============================================
// LANGUAGE SYSTEM
// ============================================
function setLanguage(lang) {
    App.currentLang = lang;
    localStorage.setItem('gardenLang', lang);

    // Update active button
    $$('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Set RTL for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.removeAttribute('dir');
    }

    // Update all translatable elements
    $$('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Re-render zones with translated names
    App.zones.forEach(z => renderZone(z));
}

// ============================================
// GRID SYSTEM
// ============================================
function createGrid() {
    const grid = $('#gardenGrid');
    const aerialOverlay = $('#aerialOverlay');

    // Clear grid but keep aerial overlay
    grid.innerHTML = '';
    grid.appendChild(aerialOverlay);

    // Set grid dimensions
    grid.style.gridTemplateColumns = `repeat(${App.GRID_W}, ${App.CELL}px)`;
    grid.style.gridTemplateRows = `repeat(${App.GRID_H}, ${App.CELL}px)`;

    // Create cells
    for (let i = 0; i < App.GRID_W * App.GRID_H; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        grid.appendChild(cell);
    }
}

function toggleGrid() {
    const grid = $('#gardenGrid');
    const checkbox = $('#gridToggle');
    grid.classList.toggle('show-grid', checkbox.checked);
}

// ============================================
// ZOOM SYSTEM
// ============================================
function zoomIn() {
    if (App.currentZoom < 2.5) {
        App.currentZoom += 0.25;
        applyZoom();
    }
}

function zoomOut() {
    if (App.currentZoom > 0.25) {
        App.currentZoom -= 0.25;
        applyZoom();
    }
}

function applyZoom() {
    const grid = $('#gardenGrid');
    const inner = $('#gardenWrapperInner');
    const naturalW = App.GRID_W * App.CELL;
    const naturalH = App.GRID_H * App.CELL;
    grid.style.transform = `scale(${App.currentZoom})`;
    // Size the inner wrapper to the scaled visual size.
    // The border is on the inner wrapper, overflow:hidden clips the grid.
    const visW = Math.ceil(naturalW * App.currentZoom);
    const visH = Math.ceil(naturalH * App.currentZoom);
    inner.style.width = visW + 'px';
    inner.style.height = visH + 'px';
    $('#zoomLevel').textContent = `${Math.round(App.currentZoom * 100)}%`;
}

// ============================================
// ZONE RENDERING
// ============================================
function renderZone(zone) {
    // Remove existing element if present
    let el = document.getElementById(`zone-${zone.id}`);
    if (el) el.remove();

    // Create new element
    el = document.createElement('div');
    el.id = `zone-${zone.id}`;
    const cfg = App.config[zone.type] || App.config.custom;
    el.className = `placed-zone ${cfg.color}`;

    if (zone.customBg) {
        el.style.background = zone.customBg;
    }

    el.style.left = `${zone.x * App.CELL}px`;
    el.style.top = `${zone.y * App.CELL}px`;
    el.style.width = `${zone.width * App.CELL}px`;
    el.style.height = `${zone.height * App.CELL}px`;
    el.dataset.zoneId = zone.id;

    const wM = (zone.width * App.CELL_SIZE).toFixed(1);
    const hM = (zone.height * App.CELL_SIZE).toFixed(1);
    const credit = calcCredit(zone);

    el.innerHTML = `
        <div class="resize-handle nw"></div>
        <div class="resize-handle ne"></div>
        <div class="resize-handle sw"></div>
        <div class="resize-handle se"></div>
        <div class="resize-edge n"></div>
        <div class="resize-edge s"></div>
        <div class="resize-edge e"></div>
        <div class="resize-edge w"></div>
        <span class="zone-icon">${esc(zone.icon)}</span>
        <span class="zone-label" data-zone-id="${zone.id}">${esc(zone.name)}</span>
        <span class="zone-size">${wM}×${hM}m</span>
        ${credit > 0 ? `<span class="zone-credit">+${credit.toFixed(1)}m²</span>` : ''}
    `;

    // Add resize handle events
    el.querySelectorAll('.resize-handle').forEach(handle => {
        const dir = handle.classList[1];
        handle.addEventListener('mousedown', e => startResize(e, dir, zone.id));
        handle.addEventListener('touchstart', e => startResizeTouch(e, dir, zone.id), { passive: false });
    });

    // Add resize edge events
    el.querySelectorAll('.resize-edge').forEach(edge => {
        const dir = edge.classList[1];
        edge.addEventListener('mousedown', e => startResize(e, dir, zone.id));
        edge.addEventListener('touchstart', e => startResizeTouch(e, dir, zone.id), { passive: false });
    });

    // Zone drag events
    el.addEventListener('mousedown', e => {
        if (!e.target.classList.contains('resize-handle') &&
            !e.target.classList.contains('resize-edge') &&
            !e.target.classList.contains('zone-label-edit')) {
            startDrag(e, zone.id);
        }
    });

    el.addEventListener('touchstart', e => {
        if (!e.target.classList.contains('resize-handle') &&
            !e.target.classList.contains('resize-edge') &&
            !e.target.classList.contains('zone-label-edit')) {
            startDragTouch(e, zone.id);
        }
    }, { passive: false });

    // Context menu
    el.addEventListener('contextmenu', handleContext);

    // Inline label editing
    const label = el.querySelector('.zone-label');
    label.addEventListener('click', e => startInlineEdit(e, zone.id));

    // Mark as selected if applicable
    if (App.selectedZone && App.selectedZone.id === zone.id) {
        el.classList.add('selected');
    }

    $('#gardenGrid').appendChild(el);
}

function calcCredit(zone) {
    const cfg = App.config[zone.type] || {};
    const cat = zone.customCat || cfg.cat || 'structure';

    if (cat === 'structure') return 0;
    if (cat === 'vegetable') return zone.width * zone.height * App.CELL_SIZE * App.CELL_SIZE;
    if (cat === 'berry') return App.BERRY_CREDIT;
    if (cat === 'fruit-tree') {
        const tt = zone.treeType || cfg.treeType || 'halb';
        return App.FRUIT_CREDITS[tt] || 4;
    }
    return 0;
}

// ============================================
// STATISTICS
// ============================================
function updateStats() {
    let fruitCredit = 0, vegCredit = 0, berryCredit = 0;

    App.zones.forEach(z => {
        const cfg = App.config[z.type] || {};
        const cat = z.customCat || cfg.cat || 'structure';

        if (cat === 'fruit-tree') {
            const tt = z.treeType || cfg.treeType || 'halb';
            fruitCredit += App.FRUIT_CREDITS[tt] || 4;
        } else if (cat === 'berry') {
            berryCredit += App.BERRY_CREDIT;
        } else if (cat === 'vegetable') {
            vegCredit += z.width * z.height * App.CELL_SIZE * App.CELL_SIZE;
        }
    });

    const TOTAL = getTotal();
    const REQUIRED = getRequired();
    const treeMax = REQUIRED * 0.35;
    const effectiveFruit = Math.min(fruitCredit, treeMax);
    const totalCredit = effectiveFruit + vegCredit + berryCredit;
    const pct = (totalCredit / REQUIRED) * 100;

    $('#gardenTotal').textContent = `${TOTAL} m²`;
    $('#gardenRequired').textContent = `${REQUIRED.toFixed(0)} m²`;

    const fruitEl = $('#fruitTreeArea');
    fruitEl.textContent = `${fruitCredit.toFixed(1)} m²`;
    fruitEl.className = `stat-value ${fruitCredit > treeMax ? 'stat-value--warning' : ''}`;

    $('#treeMax').textContent = `${treeMax.toFixed(0)} m²`;
    $('#berryArea').textContent = `${berryCredit.toFixed(1)} m²`;
    $('#vegArea').textContent = `${vegCredit.toFixed(1)} m²`;
    $('#totalCredit').textContent = `${totalCredit.toFixed(1)} m²`;
    $('#compliancePercent').textContent = `${pct.toFixed(1)}%`;
    $('#complianceFill').style.width = `${Math.min(pct, 100)}%`;
    $('#gardenDimensions').textContent = `${App.GARDEN_W}m × ${App.GARDEN_H}m`;
}

// ============================================
// DRAG & DROP FROM PALETTE
// ============================================
function handleDragStart(e) {
    const item = e.target.closest('.palette-item');
    const customId = item.dataset.customId;

    if (customId) {
        const marker = App.customMarkers.find(m => m.id === customId);
        if (marker) {
            App.draggedItem = { ...marker, isCustom: true };
        }
    } else {
        // Get localized name (dataset converts kebab-case to camelCase: data-name-de -> nameDe)
        let name = item.dataset.name;
        if (App.currentLang === 'de' && item.dataset.nameDe) {
            name = item.dataset.nameDe;
        } else if (App.currentLang === 'ar' && item.dataset.nameAr) {
            name = item.dataset.nameAr;
        }

        App.draggedItem = {
            type: item.dataset.type,
            icon: item.dataset.icon,
            name: name,
            treeType: item.dataset.treeType || null,
            width: 4,
            height: 4,
            isCustom: false
        };
    }
    item.style.opacity = '0.5';
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
}

function handleDrop(e) {
    e.preventDefault();
    if (!App.draggedItem) return;

    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (App.CELL * App.currentZoom));
    const y = Math.floor((e.clientY - rect.top) / (App.CELL * App.currentZoom));

    createZoneAt(x, y, App.draggedItem);
    App.draggedItem = null;
}

// Touch drag from palette
// Uses a long-press (300ms) to distinguish drag from scroll.
// If the finger moves vertically before the timer fires, it's a scroll — cancel drag.
function handleTouchStart(e) {
    const item = e.target.closest('.palette-item');
    if (!item) return;

    // Safety: clean up any stale clone from a previous drag
    if (App.touchClone && App.touchClone.parentNode) {
        App.touchClone.parentNode.removeChild(App.touchClone);
        App.touchClone = null;
    }

    const touch = e.touches[0];
    App._touchPending = {
        item: item,
        startX: touch.clientX,
        startY: touch.clientY,
        active: false
    };

    // Start long-press timer — don't preventDefault yet so scrolling works
    App._touchTimer = setTimeout(() => {
        if (!App._touchPending) return;
        App._touchPending.active = true;
        activateTouchDrag(App._touchPending.item, App._touchPending.startX, App._touchPending.startY);
    }, 300);

    document.addEventListener('touchmove', handleTouchMoveEarly, { passive: true });
    document.addEventListener('touchend', handleTouchEndEarly);
    document.addEventListener('touchcancel', handleTouchEndEarly);
}

// Before drag activates, check if user is scrolling (vertical movement)
function handleTouchMoveEarly(e) {
    if (!App._touchPending) return;
    const touch = e.touches[0];
    const dy = Math.abs(touch.clientY - App._touchPending.startY);

    // If moved vertically more than 10px before long-press fired, it's a scroll
    if (dy > 10 && !App._touchPending.active) {
        clearTimeout(App._touchTimer);
        cleanupTouchPending();
        return;
    }

    // If drag is active, handleTouchMoveActive handles it (non-passive)
    // No-op here since this listener is passive and can't preventDefault
}

function handleTouchMoveActive(e) {
    if (!App.touchClone) return;
    e.preventDefault();
    const touch = e.touches[0];
    App.touchClone.style.left = (touch.clientX - 28) + 'px';
    App.touchClone.style.top = (touch.clientY - 28) + 'px';
}

// Touch ended before drag activated — just clean up
function handleTouchEndEarly(e) {
    clearTimeout(App._touchTimer);

    if (App._touchPending && App._touchPending.active && App.touchDragItem) {
        // Drag was active, handle placement
        handleTouchEndDrop(e);
    }

    cleanupTouchPending();
}

function cleanupTouchPending() {
    if (App.touchClone && App.touchClone.parentNode) {
        App.touchClone.parentNode.removeChild(App.touchClone);
    }
    App.touchClone = null;
    App.touchDragItem = null;
    App._touchPending = null;
    document.removeEventListener('touchmove', handleTouchMoveEarly);
    document.removeEventListener('touchmove', handleTouchMoveActive);
    document.removeEventListener('touchend', handleTouchEndEarly);
    document.removeEventListener('touchcancel', handleTouchEndEarly);
}

function activateTouchDrag(item, startX, startY) {
    // Prevent native drag ghost image from appearing on touch
    item.setAttribute('draggable', 'false');
    setTimeout(() => item.setAttribute('draggable', 'true'), 0);

    const customId = item.dataset.customId;

    if (customId) {
        const marker = App.customMarkers.find(m => m.id === customId);
        if (marker) {
            App.touchDragItem = { ...marker, isCustom: true };
        }
    } else {
        let name = item.dataset.name;
        if (App.currentLang === 'de' && item.dataset.nameDe) {
            name = item.dataset.nameDe;
        } else if (App.currentLang === 'ar' && item.dataset.nameAr) {
            name = item.dataset.nameAr;
        }

        App.touchDragItem = {
            type: item.dataset.type,
            icon: item.dataset.icon,
            name: name,
            treeType: item.dataset.treeType || null,
            width: 4,
            height: 4,
            isCustom: false
        };
    }

    App.touchStartPos = { x: startX, y: startY };

    // Create visual clone
    App.touchClone = item.cloneNode(true);
    App.touchClone.style.position = 'fixed';
    App.touchClone.style.zIndex = '9999';
    App.touchClone.style.opacity = '0.8';
    App.touchClone.style.pointerEvents = 'none';
    document.body.appendChild(App.touchClone);
    App.touchClone.style.left = (startX - 28) + 'px';
    App.touchClone.style.top = (startY - 28) + 'px';

    // Switch from early passive listener to active one that can preventDefault
    document.removeEventListener('touchmove', handleTouchMoveEarly);
    document.addEventListener('touchmove', handleTouchMoveActive, { passive: false });
}

function handleTouchEndDrop(e) {
    if (!App.touchDragItem || !App.touchClone) return;

    const touch = e.changedTouches[0];
    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();

    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        const x = Math.floor((touch.clientX - rect.left) / (App.CELL * App.currentZoom));
        const y = Math.floor((touch.clientY - rect.top) / (App.CELL * App.currentZoom));
        createZoneAt(x, y, App.touchDragItem);
    }
}

function createZoneAt(x, y, item) {
    const zone = {
        id: App.zoneIdCounter++,
        type: item.type || 'custom',
        icon: item.icon,
        name: item.name,
        x: Math.max(0, Math.min(x, App.GRID_W - (item.width || 4))),
        y: Math.max(0, Math.min(y, App.GRID_H - (item.height || 4))),
        width: item.width || 4,
        height: item.height || 4,
        treeType: item.treeType || null,
        customBg: item.isCustom ? item.bg : null,
        customCat: item.cat || null,
        notes: ''
    };

    App.zones.push(zone);
    renderZone(zone);
    updateStats();
    showToast(`${zone.icon} ${zone.name} ${t('added')}`, 'success');
}

// ============================================
// ZONE DRAGGING
// ============================================
function startDrag(e, id) {
    if (e.button !== 0) return;

    App.selectedZone = App.zones.find(z => z.id === id);
    App.isDragging = true;

    const el = document.getElementById(`zone-${id}`);
    const rect = el.getBoundingClientRect();
    App.dragOffset = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    el.classList.add('selected');
    showFloatActions();

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    e.preventDefault();
}

function startDragTouch(e, id) {
    App.selectedZone = App.zones.find(z => z.id === id);
    App.isDragging = true;

    const el = document.getElementById(`zone-${id}`);
    const rect = el.getBoundingClientRect();
    const touch = e.touches[0];
    App.dragOffset = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };

    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    el.classList.add('selected');
    showFloatActions();

    document.addEventListener('touchmove', onDragTouch, { passive: false });
    document.addEventListener('touchend', stopDragTouch);
    e.preventDefault();
}

function onDrag(e) {
    if (!App.isDragging || !App.selectedZone) return;

    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();
    let x = Math.round((e.clientX - rect.left - App.dragOffset.x * App.currentZoom) / (App.CELL * App.currentZoom));
    let y = Math.round((e.clientY - rect.top - App.dragOffset.y * App.currentZoom) / (App.CELL * App.currentZoom));

    App.selectedZone.x = Math.max(0, Math.min(x, App.GRID_W - App.selectedZone.width));
    App.selectedZone.y = Math.max(0, Math.min(y, App.GRID_H - App.selectedZone.height));

    const el = document.getElementById(`zone-${App.selectedZone.id}`);
    el.style.left = `${App.selectedZone.x * App.CELL}px`;
    el.style.top = `${App.selectedZone.y * App.CELL}px`;
}

function onDragTouch(e) {
    if (!App.isDragging || !App.selectedZone) return;
    e.preventDefault();

    const touch = e.touches[0];
    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();
    let x = Math.round((touch.clientX - rect.left - App.dragOffset.x * App.currentZoom) / (App.CELL * App.currentZoom));
    let y = Math.round((touch.clientY - rect.top - App.dragOffset.y * App.currentZoom) / (App.CELL * App.currentZoom));

    App.selectedZone.x = Math.max(0, Math.min(x, App.GRID_W - App.selectedZone.width));
    App.selectedZone.y = Math.max(0, Math.min(y, App.GRID_H - App.selectedZone.height));

    const el = document.getElementById(`zone-${App.selectedZone.id}`);
    el.style.left = `${App.selectedZone.x * App.CELL}px`;
    el.style.top = `${App.selectedZone.y * App.CELL}px`;
}

function stopDrag() {
    App.isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    saveGarden();
}

function stopDragTouch() {
    App.isDragging = false;
    document.removeEventListener('touchmove', onDragTouch);
    document.removeEventListener('touchend', stopDragTouch);
    saveGarden();
}

// ============================================
// ZONE RESIZING
// ============================================
function startResize(e, handle, id) {
    e.stopPropagation();
    App.selectedZone = App.zones.find(z => z.id === id);
    App.isResizing = true;
    App.resizeHandle = handle;

    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    document.getElementById(`zone-${id}`).classList.add('selected');
    showFloatActions();

    document.addEventListener('mousemove', onResize);
    document.addEventListener('mouseup', stopResize);
}

function startResizeTouch(e, handle, id) {
    e.stopPropagation();
    e.preventDefault();
    App.selectedZone = App.zones.find(z => z.id === id);
    App.isResizing = true;
    App.resizeHandle = handle;

    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    document.getElementById(`zone-${id}`).classList.add('selected');
    showFloatActions();

    document.addEventListener('touchmove', onResizeTouch, { passive: false });
    document.addEventListener('touchend', stopResizeTouch);
}

function onResize(e) {
    if (!App.isResizing || !App.selectedZone) return;
    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();
    const mx = Math.round((e.clientX - rect.left) / (App.CELL * App.currentZoom));
    const my = Math.round((e.clientY - rect.top) / (App.CELL * App.currentZoom));
    applyResize(mx, my);
}

function onResizeTouch(e) {
    if (!App.isResizing || !App.selectedZone) return;
    e.preventDefault();
    const touch = e.touches[0];
    const grid = $('#gardenGrid');
    const rect = grid.getBoundingClientRect();
    const mx = Math.round((touch.clientX - rect.left) / (App.CELL * App.currentZoom));
    const my = Math.round((touch.clientY - rect.top) / (App.CELL * App.currentZoom));
    applyResize(mx, my);
}

function applyResize(mx, my) {
    let { x, y, width, height } = App.selectedZone;

    if (App.resizeHandle.includes('e')) width = Math.max(1, mx - x);
    if (App.resizeHandle.includes('w')) {
        const nx = Math.min(mx, x + width - 1);
        width = x + width - nx;
        x = nx;
    }
    if (App.resizeHandle.includes('s')) height = Math.max(1, my - y);
    if (App.resizeHandle.includes('n')) {
        const ny = Math.min(my, y + height - 1);
        height = y + height - ny;
        y = ny;
    }

    App.selectedZone.x = Math.max(0, x);
    App.selectedZone.y = Math.max(0, y);
    App.selectedZone.width = Math.min(width, App.GRID_W - App.selectedZone.x);
    App.selectedZone.height = Math.min(height, App.GRID_H - App.selectedZone.y);

    renderZone(App.selectedZone);
    updateStats();
}

function stopResize() {
    App.isResizing = false;
    document.removeEventListener('mousemove', onResize);
    document.removeEventListener('mouseup', stopResize);
    saveGarden();
}

function stopResizeTouch() {
    App.isResizing = false;
    document.removeEventListener('touchmove', onResizeTouch);
    document.removeEventListener('touchend', stopResizeTouch);
    saveGarden();
}

// ============================================
// INLINE LABEL EDITING
// ============================================
function startInlineEdit(e, zoneId) {
    e.stopPropagation();
    const zone = App.zones.find(z => z.id === zoneId);
    if (!zone) return;

    const label = e.target;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'zone-label-edit';
    input.value = zone.name;

    input.addEventListener('blur', () => finishInlineEdit(input, zone));
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') input.blur();
        if (e.key === 'Escape') {
            input.value = zone.name;
            input.blur();
        }
    });
    input.addEventListener('click', e => e.stopPropagation());

    label.replaceWith(input);
    input.focus();
    input.select();
}

function finishInlineEdit(input, zone) {
    zone.name = input.value.trim() || zone.name;
    renderZone(zone);
    saveGarden();
}

// ============================================
// CONTEXT MENU
// ============================================
function handleContext(e) {
    e.preventDefault();
    const zoneEl = e.target.closest('.placed-zone');
    if (!zoneEl) {
        hideContext();
        return;
    }

    const id = parseInt(zoneEl.dataset.zoneId);
    App.selectedZone = App.zones.find(z => z.id === id);

    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    zoneEl.classList.add('selected');
    showFloatActions();

    const menu = $('#contextMenu');
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.classList.add('show');
}

function hideContext() {
    $('#contextMenu').classList.remove('show');
}

// ============================================
// ZONE ACTIONS
// ============================================
function editZone() {
    hideContext();
    hideFloatActions();
    if (!App.selectedZone) return;

    const panel = $('#editorPanel');
    panel.classList.add('active');

    $('#zoneIconPreview').textContent = App.selectedZone.icon;
    $('#zoneName').value = App.selectedZone.name;
    $('#zoneX').value = App.selectedZone.x;
    $('#zoneY').value = App.selectedZone.y;
    $('#zoneWidth').value = App.selectedZone.width;
    $('#zoneHeight').value = App.selectedZone.height;
    $('#zoneNotes').value = App.selectedZone.notes || '';

    const cfg = App.config[App.selectedZone.type] || {};
    const cat = App.selectedZone.customCat || cfg.cat || 'structure';
    const treeTypeGroup = $('#treeTypeGroup');
    if (cat === 'fruit-tree') {
        treeTypeGroup.hidden = false;
        $('#zoneTreeType').value = App.selectedZone.treeType || 'halb';
    } else {
        treeTypeGroup.hidden = true;
    }
}

function updateZone() {
    if (!App.selectedZone) return;

    App.selectedZone.name = $('#zoneName').value;
    App.selectedZone.x = parseInt($('#zoneX').value) || 0;
    App.selectedZone.y = parseInt($('#zoneY').value) || 0;
    App.selectedZone.width = parseInt($('#zoneWidth').value) || 1;
    App.selectedZone.height = parseInt($('#zoneHeight').value) || 1;
    App.selectedZone.notes = $('#zoneNotes').value;

    if (!$('#treeTypeGroup').hidden) {
        App.selectedZone.treeType = $('#zoneTreeType').value;
    }

    renderZone(App.selectedZone);
    updateStats();
    saveGarden();
    showToast(t('updated') + ' ✏️', 'success');
    App.selectedZone = null;
    $('#editorPanel').classList.remove('active');
    hideFloatActions();
}

function deleteZone() {
    hideContext();
    if (!App.selectedZone) return;

    document.getElementById(`zone-${App.selectedZone.id}`).remove();
    App.zones = App.zones.filter(z => z.id !== App.selectedZone.id);
    App.selectedZone = null;
    $('#editorPanel').classList.remove('active');
    hideFloatActions();
    updateStats();
    saveGarden();
}

function duplicateZone() {
    hideContext();
    if (!App.selectedZone) return;

    const copy = {
        ...App.selectedZone,
        id: App.zoneIdCounter++,
        x: Math.min(App.selectedZone.x + 2, App.GRID_W - App.selectedZone.width),
        y: Math.min(App.selectedZone.y + 2, App.GRID_H - App.selectedZone.height)
    };

    App.zones.push(copy);
    renderZone(copy);
    updateStats();
    saveGarden();
    showToast(t('duplicated') + ' 📋', 'success');
}

function deselectAll() {
    App.selectedZone = null;
    $$('.placed-zone').forEach(z => z.classList.remove('selected'));
    $('#editorPanel').classList.remove('active');
    hideFloatActions();
}

function bringToFront() {
    if (!App.selectedZone) return;
    const el = document.getElementById(`zone-${App.selectedZone.id}`);
    el.parentNode.appendChild(el);
}

function sendToBack() {
    if (!App.selectedZone) return;
    const el = document.getElementById(`zone-${App.selectedZone.id}`);
    const grid = $('#gardenGrid');
    const firstZone = grid.querySelector('.placed-zone');
    if (firstZone) {
        grid.insertBefore(el, firstZone);
    }
}

// ============================================
// FLOATING ZONE ACTIONS (MOBILE)
// ============================================
function showFloatActions() {
    const el = $('#zoneActionsFloat');
    if (el && App.selectedZone) {
        el.classList.add('show');
    }
}

function hideFloatActions() {
    const el = $('#zoneActionsFloat');
    if (el) {
        el.classList.remove('show');
    }
}

// ============================================
// AERIAL PHOTO
// ============================================
function loadAerialPhoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
        const dataUrl = ev.target.result;
        setAerialImage(dataUrl);
        saveAerialToStorage(dataUrl);
        showToast(t('photoLoaded') + ' 📸', 'success');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
}

function setAerialImage(dataUrl) {
    const overlay = $('#aerialOverlay');
    const preview = $('#aerialPreview');

    overlay.style.backgroundImage = `url(${dataUrl})`;
    preview.style.backgroundImage = `url(${dataUrl})`;
    preview.classList.add('has-image');
    preview.textContent = '';

    updateAerialOpacity(App.aerialOpacity);
    updateAerialToggleBtn();
}

function updateAerialOpacity(value) {
    App.aerialOpacity = parseInt(value);
    $('#aerialOverlay').style.opacity = App.aerialOpacity / 100;
    $('#opacityValue').textContent = `${App.aerialOpacity}%`;
    $('#aerialOpacity').value = App.aerialOpacity;
    localStorage.setItem('gardenAerialOpacity', App.aerialOpacity);
}

function toggleAerialOverlay() {
    App.aerialVisible = !App.aerialVisible;
    $('#aerialOverlay').style.display = App.aerialVisible ? 'block' : 'none';
    updateAerialToggleBtn();
}

function updateAerialToggleBtn() {
    const btn = document.querySelector('#toolAerial');
    if (!btn) return;
    const overlay = $('#aerialOverlay');
    const hasImage = overlay.style.backgroundImage && overlay.style.backgroundImage !== 'none';
    btn.classList.toggle('active', hasImage && App.aerialVisible);
}

function clearAerialPhoto() {
    const overlay = $('#aerialOverlay');
    const preview = $('#aerialPreview');

    overlay.style.backgroundImage = 'none';
    preview.style.backgroundImage = 'none';
    preview.classList.remove('has-image');
    preview.textContent = t('noPhoto');

    localStorage.removeItem('gardenAerialPhoto');
    localStorage.removeItem('gardenAerialOpacity');
    showToast(t('photoCleared'), 'success');
    updateAerialToggleBtn();
}

function saveAerialToStorage(dataUrl) {
    try {
        localStorage.setItem('gardenAerialPhoto', dataUrl);
    } catch (e) {
        showToast('Photo too large to save locally', 'error');
    }
}

function loadAerialFromStorage() {
    const savedPhoto = localStorage.getItem('gardenAerialPhoto');
    const savedOpacity = localStorage.getItem('gardenAerialOpacity');

    if (savedOpacity) {
        App.aerialOpacity = parseInt(savedOpacity);
        $('#aerialOpacity').value = App.aerialOpacity;
        $('#opacityValue').textContent = `${App.aerialOpacity}%`;
    }

    if (savedPhoto) {
        setAerialImage(savedPhoto);
    }
}

// ============================================
// ICON PICKER
// ============================================
function initIconGrid() {
    $('#iconGrid').innerHTML = App.ICONS.map(icon =>
        `<div class="icon-item" data-icon="${icon}">${icon}</div>`
    ).join('');
}

function openIconPicker(mode) {
    App.iconMode = mode;
    $('#iconModal').classList.add('show');

    $$('.icon-item').forEach(el => el.classList.remove('selected'));

    const currentIcon = mode === 'zone' && App.selectedZone
        ? App.selectedZone.icon
        : $('#customIconPreview').textContent;

    $$('.icon-item').forEach(el => {
        if (el.dataset.icon === currentIcon) {
            el.classList.add('selected');
            App.selectedIcon = currentIcon;
        }
    });
}

function closeIconPicker() {
    $('#iconModal').classList.remove('show');
}

function selectIcon() {
    if (App.iconMode === 'zone' && App.selectedZone) {
        App.selectedZone.icon = App.selectedIcon;
        $('#zoneIconPreview').textContent = App.selectedIcon;
        renderZone(App.selectedZone);
    } else {
        $('#customIconPreview').textContent = App.selectedIcon;
    }
    closeIconPicker();
}

// ============================================
// COLOR PICKER
// ============================================
function initColorPicker() {
    App.selectedColor = App.colors[0];
    $('#colorPicker').innerHTML = App.colors.map((c, i) =>
        `<div class="color-opt ${i === 0 ? 'selected' : ''}" style="background:${c.bg}" data-index="${i}"></div>`
    ).join('');
}

// ============================================
// CUSTOM MARKERS
// ============================================
function openCustomModal() {
    $('#customModal').classList.add('show');
    $('#customIconPreview').textContent = '⭐';
    $('#customName').value = '';
    App.selectedIcon = '⭐';
}

function closeCustomModal() {
    $('#customModal').classList.remove('show');
}

function createCustomMarker() {
    const name = $('#customName').value.trim() || 'Custom';
    const icon = $('#customIconPreview').textContent;
    const cat = $('#customCategory').value;
    const width = parseInt($('#customWidth').value) || 2;
    const height = parseInt($('#customHeight').value) || 2;

    const marker = {
        id: 'c' + App.customIdCounter++,
        name,
        icon,
        cat,
        bg: App.selectedColor.bg,
        width,
        height
    };

    App.customMarkers.push(marker);
    saveCustomMarkers();
    renderCustomPalette();
    closeCustomModal();
    showToast(t('created') + ' ✨', 'success');
}

function renderCustomPalette() {
    const container = $('#customPalette');
    container.innerHTML = App.customMarkers.map(m =>
        `<div class="palette-item" style="background:${esc(m.bg)}" draggable="true" data-custom-id="${esc(m.id)}">
            <span class="palette-item__icon">${esc(m.icon)}</span>
            <span class="palette-item__label">${esc(m.name.slice(0, 8))}</span>
        </div>`
    ).join('');

    // Attach events to custom items
    container.querySelectorAll('.palette-item').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('touchstart', handleTouchStart, { passive: true });
    });
}

function saveCustomMarkers() {
    localStorage.setItem('gardenCustomMarkers', JSON.stringify(App.customMarkers));
}

function loadCustomMarkers() {
    const saved = localStorage.getItem('gardenCustomMarkers');
    if (saved) {
        App.customMarkers = JSON.parse(saved);
        App.customIdCounter = Math.max(...App.customMarkers.map(m => parseInt(m.id.slice(1)) || 0), 0) + 1;
        renderCustomPalette();
    }
}

// ============================================
// SETTINGS MODAL
// ============================================
function openSettingsModal() {
    $('#settingsWidth').value = App.GARDEN_W;
    $('#settingsHeight').value = App.GARDEN_H;
    $('#settingsCellSize').value = App.CELL_SIZE;
    $('#currentSizeDisplay').textContent = `${App.GARDEN_W}m × ${App.GARDEN_H}m = ${getTotal()} m²`;
    $('#settingsModal').classList.add('show');
}

function closeSettingsModal() {
    $('#settingsModal').classList.remove('show');
}

function applySettings() {
    const newW = parseInt($('#settingsWidth').value) || 25;
    const newH = parseInt($('#settingsHeight').value) || 25;
    const newCellSize = parseFloat($('#settingsCellSize').value) || 0.5;

    if (App.zones.length > 0 && !confirm(t('sizeWarning'))) {
        return;
    }

    App.GARDEN_W = Math.max(5, Math.min(100, newW));
    App.GARDEN_H = Math.max(5, Math.min(100, newH));
    App.CELL_SIZE = newCellSize;
    App.GRID_W = Math.round(App.GARDEN_W / App.CELL_SIZE);
    App.GRID_H = Math.round(App.GARDEN_H / App.CELL_SIZE);

    App.zones = [];
    App.zoneIdCounter = 1;
    $$('.placed-zone').forEach(el => el.remove());

    createGrid();
    applyZoom();
    updateStats();

    localStorage.setItem('gardenSettings', JSON.stringify({
        GARDEN_W: App.GARDEN_W,
        GARDEN_H: App.GARDEN_H,
        CELL_SIZE: App.CELL_SIZE,
        GRID_W: App.GRID_W,
        GRID_H: App.GRID_H
    }));

    closeSettingsModal();
    showToast(`${t('gardenSet')} ${App.GARDEN_W}m × ${App.GARDEN_H}m`, 'success');
}

function loadSettings() {
    const saved = localStorage.getItem('gardenSettings');
    if (saved) {
        const s = JSON.parse(saved);
        App.GARDEN_W = s.GARDEN_W || 25;
        App.GARDEN_H = s.GARDEN_H || 25;
        App.CELL_SIZE = s.CELL_SIZE || 0.5;
        App.GRID_W = s.GRID_W || 50;
        App.GRID_H = s.GRID_H || 50;
    }
}

// ============================================
// SAVE / LOAD
// ============================================
function saveGarden() {
    try {
        localStorage.setItem('gardenLayout', JSON.stringify(App.zones));
        localStorage.setItem('gardenZoneId', App.zoneIdCounter);
        return true;
    } catch (e) {
        console.error('Save failed:', e);
        return false;
    }
}

function saveGardenManual() {
    if (saveGarden()) {
        showToast(t('saved') + ' ✅', 'success');
    } else {
        showToast('Save failed!', 'error');
    }
}

function loadGarden() {
    const saved = localStorage.getItem('gardenLayout');
    const savedId = localStorage.getItem('gardenZoneId');

    if (saved) {
        App.zones = JSON.parse(saved);
        App.zoneIdCounter = parseInt(savedId) || (Math.max(...App.zones.map(z => z.id), 0) + 1);
        App.zones.forEach(z => renderZone(z));
        updateStats();
    }
}

function exportGarden() {
    const scale = 3;
    const gridW = App.GRID_W * App.CELL;
    const gridH = App.GRID_H * App.CELL;
    const padding = 20;
    const titleHeight = 40;
    const statsHeight = 30;
    const canvasW = gridW + padding * 2;
    const canvasH = gridH + padding * 2 + titleHeight + statsHeight;

    const canvas = document.createElement('canvas');
    canvas.width = canvasW * scale;
    canvas.height = canvasH * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    // Background
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, 0, canvasW, canvasH);

    // Title
    ctx.fillStyle = '#3E2723';
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${t('title')} — ${App.GARDEN_W}m × ${App.GARDEN_H}m`, canvasW / 2, padding + 16);

    const offsetX = padding;
    const offsetY = padding + titleHeight;

    // Garden background
    const gardenGrad = ctx.createLinearGradient(offsetX, offsetY, offsetX + gridW, offsetY + gridH);
    gardenGrad.addColorStop(0, '#8BC34A');
    gardenGrad.addColorStop(1, '#7CB342');
    ctx.fillStyle = gardenGrad;
    ctx.fillRect(offsetX, offsetY, gridW, gridH);

    // Grid lines
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= App.GRID_W; x++) {
        ctx.beginPath();
        ctx.moveTo(offsetX + x * App.CELL, offsetY);
        ctx.lineTo(offsetX + x * App.CELL, offsetY + gridH);
        ctx.stroke();
    }
    for (let y = 0; y <= App.GRID_H; y++) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY + y * App.CELL);
        ctx.lineTo(offsetX + gridW, offsetY + y * App.CELL);
        ctx.stroke();
    }

    // Border
    ctx.strokeStyle = '#3E2723';
    ctx.lineWidth = 2;
    ctx.strokeRect(offsetX, offsetY, gridW, gridH);

    // Aerial overlay
    const aerialOverlay = $('#aerialOverlay');
    if (App.aerialVisible && aerialOverlay.style.backgroundImage && aerialOverlay.style.backgroundImage !== 'none') {
        const imgUrl = aerialOverlay.style.backgroundImage.slice(4, -1).replace(/["']/g, '');
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imgUrl;
        if (img.complete && img.naturalWidth > 0) {
            ctx.globalAlpha = App.aerialOpacity / 100;
            ctx.drawImage(img, offsetX, offsetY, gridW, gridH);
            ctx.globalAlpha = 1;
        }
    }

    // Parse CSS gradient to canvas gradient
    function parseZoneGradient(el, x, y, w, h) {
        const bg = getComputedStyle(el).background || getComputedStyle(el).backgroundImage;
        const match = bg.match(/linear-gradient\(\s*135deg\s*,\s*(#[0-9a-fA-F]{6}|rgb[^)]+\))\s*,\s*(#[0-9a-fA-F]{6}|rgb[^)]+\))\s*\)/);
        if (match) {
            const grad = ctx.createLinearGradient(x, y, x + w, y + h);
            grad.addColorStop(0, match[1]);
            grad.addColorStop(1, match[2]);
            return grad;
        }
        return '#81C784';
    }

    // Draw zones
    App.zones.forEach(zone => {
        const el = document.getElementById(`zone-${zone.id}`);
        if (!el) return;

        const zx = offsetX + zone.x * App.CELL;
        const zy = offsetY + zone.y * App.CELL;
        const zw = zone.width * App.CELL;
        const zh = zone.height * App.CELL;

        // Zone fill
        ctx.fillStyle = parseZoneGradient(el, zx, zy, zw, zh);
        ctx.beginPath();
        ctx.roundRect(zx, zy, zw, zh, 2);
        ctx.fill();

        // Zone border
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Icon
        if (zh >= 14 && zw >= 14) {
            ctx.font = `${Math.min(zh * 0.4, zw * 0.4, 18)}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(zone.icon, zx + zw / 2, zy + zh * 0.35);
        }

        // Label
        if (zh >= 20 && zw >= 20) {
            const fontSize = Math.min(6, zw * 0.12);
            ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Label background
            const labelW = Math.min(ctx.measureText(zone.name).width + 4, zw - 4);
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.fillRect(zx + (zw - labelW) / 2, zy + zh * 0.55 - fontSize / 2, labelW, fontSize + 2);

            ctx.fillStyle = '#333';
            ctx.fillText(zone.name, zx + zw / 2, zy + zh * 0.57, zw - 4);
        }

        // Size label
        if (zh >= 28 && zw >= 24) {
            const wM = (zone.width * App.CELL_SIZE).toFixed(1);
            const hM = (zone.height * App.CELL_SIZE).toFixed(1);
            const sizeText = `${wM}×${hM}m`;
            ctx.font = '4px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif';
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            const tw = ctx.measureText(sizeText).width + 4;
            ctx.fillRect(zx + (zw - tw) / 2, zy + zh * 0.72, tw, 7);
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(sizeText, zx + zw / 2, zy + zh * 0.72 + 5);
        }
    });

    // Stats line at bottom
    const TOTAL = getTotal();
    const REQUIRED = getRequired();
    let fruitC = 0, vegC = 0, berryC = 0;
    App.zones.forEach(z => {
        const cfg = App.config[z.type] || {};
        const cat = z.customCat || cfg.cat || 'structure';
        if (cat === 'fruit-tree') fruitC += App.FRUIT_CREDITS[z.treeType || cfg.treeType || 'halb'] || 4;
        else if (cat === 'berry') berryC += App.BERRY_CREDIT;
        else if (cat === 'vegetable') vegC += z.width * z.height * App.CELL_SIZE * App.CELL_SIZE;
    });
    const treeMax = REQUIRED * 0.35;
    const totalC = Math.min(fruitC, treeMax) + vegC + berryC;
    const pct = (totalC / REQUIRED * 100).toFixed(1);

    ctx.font = '10px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif';
    ctx.fillStyle = '#555';
    ctx.textAlign = 'center';
    ctx.fillText(
        `RGO 1/3: ${totalC.toFixed(1)}m² / ${REQUIRED.toFixed(0)}m² (${pct}%)  |  🍎 ${fruitC.toFixed(1)}m²  🍓 ${berryC.toFixed(1)}m²  🥬 ${vegC.toFixed(1)}m²`,
        canvasW / 2, canvasH - 10
    );

    // Export as JPEG
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `garden_${new Date().toISOString().slice(0, 10)}.jpg`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        showToast('Exported JPG! 📸', 'success');
    }, 'image/jpeg', 0.95);
}

// Hidden JSON export (Ctrl+Shift+S)
function exportJSON() {
    const data = {
        settings: { GARDEN_W: App.GARDEN_W, GARDEN_H: App.GARDEN_H, CELL_SIZE: App.CELL_SIZE, GRID_W: App.GRID_W, GRID_H: App.GRID_H },
        zones: App.zones,
        customMarkers: App.customMarkers
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `garden_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    showToast('JSON exported (dev)', 'success');
}

function importGarden(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
        try {
            const data = JSON.parse(ev.target.result);

            if (data.settings) {
                App.GARDEN_W = data.settings.GARDEN_W || 25;
                App.GARDEN_H = data.settings.GARDEN_H || 25;
                App.CELL_SIZE = data.settings.CELL_SIZE || 0.5;
                App.GRID_W = Math.round(App.GARDEN_W / App.CELL_SIZE);
                App.GRID_H = Math.round(App.GARDEN_H / App.CELL_SIZE);

                localStorage.setItem('gardenSettings', JSON.stringify({
                    GARDEN_W: App.GARDEN_W,
                    GARDEN_H: App.GARDEN_H,
                    CELL_SIZE: App.CELL_SIZE,
                    GRID_W: App.GRID_W,
                    GRID_H: App.GRID_H
                }));

                createGrid();
                applyZoom();
            }

            if (data.zones) {
                $$('.placed-zone').forEach(el => el.remove());
                App.zones = data.zones;
                App.zoneIdCounter = Math.max(...App.zones.map(z => z.id), 0) + 1;
                App.zones.forEach(z => renderZone(z));
                updateStats();
            }

            if (data.customMarkers) {
                App.customMarkers = data.customMarkers;
                saveCustomMarkers();
                renderCustomPalette();
            }

            saveGarden();
            showToast(t('loaded') + ' 📂', 'success');
        } catch (err) {
            alert('Invalid file: ' + err.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ============================================
// ONBOARDING
// ============================================
function showOnboarding() {
    $('#onboardingModal').classList.add('show');
}

function completeOnboarding() {
    const w = parseInt($('#onboardWidth').value) || 25;
    const h = parseInt($('#onboardHeight').value) || 25;

    App.GARDEN_W = Math.max(5, Math.min(100, w));
    App.GARDEN_H = Math.max(5, Math.min(100, h));
    App.CELL_SIZE = 0.5;
    App.GRID_W = Math.round(App.GARDEN_W / App.CELL_SIZE);
    App.GRID_H = Math.round(App.GARDEN_H / App.CELL_SIZE);

    localStorage.setItem('gardenSettings', JSON.stringify({
        GARDEN_W: App.GARDEN_W,
        GARDEN_H: App.GARDEN_H,
        CELL_SIZE: App.CELL_SIZE,
        GRID_W: App.GRID_W,
        GRID_H: App.GRID_H
    }));

    createGrid();
    applyZoom();
    updateStats();
    $('#onboardingModal').classList.remove('show');
    showToast(`${t('gardenSet')} ${App.GARDEN_W}m × ${App.GARDEN_H}m 🌱`, 'success');
}

// ============================================
// SIDEBAR TOGGLE (Mobile)
// ============================================
function toggleSidebar() {
    const sidebar = $('#sidebar');
    const btn = $('#sidebarToggle');
    const isOpen = sidebar.classList.toggle('open');
    btn.innerHTML = isOpen
        ? '<span>✕</span>'
        : `<span>🌿</span><span class="sidebar-toggle__label" data-i18n="addPlant">${esc(t('addPlant'))}</span>`;
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(msg, type) {
    const toast = $('#toast');
    toast.textContent = msg;
    toast.className = 'toast show ' + (type || '');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// EVENT SETUP
// ============================================
function setupEvents() {
    // Language buttons
    $$('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Header buttons
    $('#btnSettings').addEventListener('click', openSettingsModal);
    $('#btnCustom').addEventListener('click', openCustomModal);
    $('#btnExport').addEventListener('click', exportGarden);
    $('#btnSave').addEventListener('click', saveGardenManual);

    // Toolbar
    $('#toolDuplicate').addEventListener('click', () => App.selectedZone && duplicateZone());
    $('#toolDelete').addEventListener('click', () => App.selectedZone && deleteZone());
    $('#toolFront').addEventListener('click', bringToFront);
    $('#toolBack').addEventListener('click', sendToBack);
    $('#zoomIn').addEventListener('click', zoomIn);
    $('#zoomOut').addEventListener('click', zoomOut);
    $('#gridToggle').addEventListener('change', toggleGrid);

    // Aerial controls
    $('#btnLoadPhoto').addEventListener('click', () => $('#aerialInput').click());
    $('#aerialInput').addEventListener('change', loadAerialPhoto);
    $('#btnClearPhoto').addEventListener('click', clearAerialPhoto);
    $('#aerialOpacity').addEventListener('input', e => updateAerialOpacity(e.target.value));

    // Editor panel
    $('#btnUpdateZone').addEventListener('click', updateZone);
    $('#btnDeleteZone').addEventListener('click', deleteZone);
    $('#zoneIconPreview').addEventListener('click', () => openIconPicker('zone'));

    // Context menu
    $('#ctxEdit').addEventListener('click', editZone);
    $('#ctxDuplicate').addEventListener('click', duplicateZone);
    $('#ctxDelete').addEventListener('click', deleteZone);

    // Icon picker modal
    $('#btnCancelIcon').addEventListener('click', closeIconPicker);
    $('#btnSelectIcon').addEventListener('click', selectIcon);
    $('#iconGrid').addEventListener('click', e => {
        const item = e.target.closest('.icon-item');
        if (item) {
            $$('.icon-item').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            App.selectedIcon = item.dataset.icon;
        }
    });

    // Custom marker modal
    $('#btnCreateCustom').addEventListener('click', openCustomModal);
    $('#btnCancelCustom').addEventListener('click', closeCustomModal);
    $('#btnCreateCustomMarker').addEventListener('click', createCustomMarker);
    $('#customIconPreview').addEventListener('click', () => openIconPicker('custom'));
    $('#colorPicker').addEventListener('click', e => {
        const opt = e.target.closest('.color-opt');
        if (opt) {
            $$('.color-opt').forEach(el => el.classList.remove('selected'));
            opt.classList.add('selected');
            App.selectedColor = App.colors[parseInt(opt.dataset.index)];
        }
    });

    // Settings modal
    $('#btnCancelSettings').addEventListener('click', closeSettingsModal);
    $('#btnApplySettings').addEventListener('click', applySettings);

    // Onboarding modal
    $('#btnOnboardStart').addEventListener('click', completeOnboarding);

    // Sidebar toggle
    $('#sidebarToggle').addEventListener('click', toggleSidebar);

    // Floating zone actions (mobile)
    $('#floatEdit').addEventListener('click', editZone);
    $('#floatDuplicate').addEventListener('click', duplicateZone);
    $('#floatDelete').addEventListener('click', deleteZone);
    $('#floatCancel').addEventListener('click', deselectAll);

    // Palette items (drag & drop)
    $$('.sidebar .palette-item').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('touchstart', handleTouchStart, { passive: true });
    });

    // Grid events
    const grid = $('#gardenGrid');
    grid.addEventListener('dragover', e => e.preventDefault());
    grid.addEventListener('drop', handleDrop);
    grid.addEventListener('contextmenu', handleContext);

    // Global events — deselect when clicking outside zones/float bar
    document.addEventListener('click', e => {
        if (!e.target.closest('.context-menu')) {
            hideContext();
        }
        if (App.selectedZone &&
            !e.target.closest('.placed-zone') &&
            !e.target.closest('.zone-actions-float') &&
            !e.target.closest('.editor-panel') &&
            !e.target.closest('.toolbar')) {
            deselectAll();
        }
        // Close sidebar when tapping outside it and its toggle
        const sidebar = $('#sidebar');
        if (sidebar.classList.contains('open') &&
            !e.target.closest('.sidebar') &&
            !e.target.closest('.sidebar-toggle')) {
            sidebar.classList.remove('open');
            const btn = $('#sidebarToggle');
            btn.innerHTML = `<span>🌿</span><span class="sidebar-toggle__label" data-i18n="addPlant">${esc(t('addPlant'))}</span>`;
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Delete' && App.selectedZone) deleteZone();
        if (e.key === 'Escape') {
            deselectAll();
            closeCustomModal();
            closeIconPicker();
            closeSettingsModal();
        }
        // Hidden: Ctrl+Shift+S exports JSON backup
        if (e.key === 'S' && e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            exportJSON();
        }
    });

    // Auto-save every 30 seconds
    setInterval(saveGarden, 30000);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    const savedLang = localStorage.getItem('gardenLang') || 'en';
    setLanguage(savedLang);

    // Initialize components
    loadSettings();
    createGrid();
    applyZoom();
    initColorPicker();
    initIconGrid();
    loadGarden();
    loadAerialFromStorage();
    loadCustomMarkers();

    // Setup all event listeners
    setupEvents();

    // Update stats
    updateStats();

    // Show onboarding on first visit
    if (!localStorage.getItem('gardenSettings')) {
        showOnboarding();
    }

    console.log('🪴 Brandenburg Garden Planner initialized');
});
