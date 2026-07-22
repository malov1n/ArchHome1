// Прелоадер
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1200);
});

// Расширенные данные проектов
const projects = [
    {
        id: 1,
        title: 'Резиденция «Монолит»',
        location: 'Москва, Патриаршие пруды',
        category: 'residential',
        type: 'Жилой комплекс премиум-класса',
        mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '12 500 м²', 'Этажность': '24 этажа', 'Квартир': '128', 'Паркинг': 'Подземный на 200 мест', 'Архитектор': 'Александр Морозов', 'Год': '2024' },
        description: 'Резиденция «Монолит» — это воплощение современной архитектурной мысли. Здание расположено в историческом центре Москвы и представляет собой монументальное сооружение с выразительным фасадом из натурального камня и стекла.',
        features: ['Панорамное остекление', 'Умный дом', 'Фитнес-центр', 'Спа-зона', 'Детская комната', 'Консьерж-сервис', 'Подземный паркинг', 'Охраняемая территория']
    },
    {
        id: 2,
        title: 'Бизнес-центр «Кристалл»',
        location: 'Москва, Москва-Сити',
        category: 'commercial',
        type: 'Бизнес-центр класса А+',
        mainImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210491892-03f54c0c65e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '45 000 м²', 'Этажность': '38 этажей', 'Офисов': '200+', 'Паркинг': '500 мест', 'Архитектор': 'Дмитрий Ковалёв', 'Год': '2025' },
        description: 'Бизнес-центр «Кристалл» — это современное офисное пространство в сердце делового квартала Москва-Сити. Энергоэффективные технологии и панорамные виды.',
        features: ['Конференц-залы', 'Ресторан', 'Фитнес-центр', 'Sky-лаунж', 'Подземный паркинг', 'Климат-контроль', 'Скоростные лифты', 'Охрана 24/7']
    },
    {
        id: 3,
        title: 'Лофт «Геометрия»',
        location: 'Москва, Даниловская мануфактура',
        category: 'residential',
        type: 'Лофт-комплекс',
        mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210491892-03f54c0c65e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '8 200 м²', 'Этажность': '12 этажей', 'Лофтов': '86', 'Паркинг': 'Наземный', 'Архитектор': 'Анна Соколова', 'Год': '2024' },
        description: 'Лофт-комплекс на территории бывшей мануфактуры. Кирпичная кладка XIX века сочетается с современными конструкциями.',
        features: ['Потолки 6 м', 'Кирпичные стены', 'Коворкинг', 'Галерея', 'Второй свет', 'Открытая планировка', 'Тёплые полы', 'Мультимедиа']
    },
    {
        id: 4,
        title: 'Культурный центр «Арка»',
        location: 'Санкт-Петербург, Крестовский остров',
        category: 'public',
        type: 'Общественное здание',
        mainImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600210491892-03f54c0c65e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '15 000 м²', 'Этажность': '5 этажей', 'Залов': '3 концертных', 'Паркинг': 'Подземный', 'Архитектор': 'Елена Ветрова', 'Год': '2023' },
        description: 'Многофункциональный культурный центр с концертным залом на 800 мест, выставочными галереями и библиотекой.',
        features: ['Концертный зал', 'Галерея', 'Библиотека', 'Лекторий', 'Кафе', 'Детская зона', 'Арт-резиденция', 'Кинозал']
    },
    {
        id: 5,
        title: 'Офисный парк «Небо»',
        location: 'Москва, Ленинградский проспект',
        category: 'commercial',
        type: 'Офисный парк',
        mainImage: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210491892-03f54c0c65e7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '28 000 м²', 'Корпусов': '4', 'Офисов': '150', 'Паркинг': '300 мест', 'Архитектор': 'Александр Морозов', 'Год': '2024' },
        description: 'Современный деловой квартал с собственной инфраструктурой и ландшафтным парком.',
        features: ['Зелёный двор', 'Кафе', 'Фитнес', 'Конференц-центр', 'Вело-парковка', 'Электрозаправки', 'Террасы', 'Охрана']
    },
    {
        id: 6,
        title: 'Жилой комплекс «Сады»',
        location: 'Москва, Раменки',
        category: 'residential',
        type: 'Жилой комплекс',
        mainImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600210491892-03f54c0c65e7?w=800&h=600&fit=crop'
        ],
        specs: { 'Площадь': '18 000 м²', 'Этажность': '18 этажей', 'Квартир': '240', 'Паркинг': 'Подземный', 'Архитектор': 'Анна Соколова', 'Год': '2023' },
        description: 'Жилой комплекс в экологически чистом районе. Концепция — гармония архитектуры и природы.',
        features: ['Парк', 'Детский сад', 'Школа', 'Бассейн', 'Террасы', 'Консьерж', 'Фитнес', 'Игровые площадки']
    }
];

// Рендер проектов с анимацией
const projectsGrid = document.getElementById('projectsGrid');
let currentFilter = 'all';
let isAnimating = false;

function renderProjects(filter = 'all', animate = true) {
    if (isAnimating) return;
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    // Если анимация включена, добавляем класс исчезновения
    if (animate) {
        isAnimating = true;
        projectsGrid.classList.add('fade-out');
        
        // Ждём окончания анимации исчезновения
        setTimeout(() => {
            updateGridContent(filtered);
            projectsGrid.classList.remove('fade-out');
            projectsGrid.classList.add('fade-in');
            
            // Убираем класс появления после анимации
            setTimeout(() => {
                projectsGrid.classList.remove('fade-in');
                isAnimating = false;
            }, 400);
        }, 400);
    } else {
        // Без анимации (первая загрузка)
        updateGridContent(filtered);
    }
}

function updateGridContent(filtered) {
    projectsGrid.innerHTML = filtered.map((p, i) => `
        <div class="project-card ${i === 0 && filtered.length > 1 ? 'large' : ''}" data-id="${p.id}">
            <img src="${p.mainImage}" alt="${p.title}" loading="lazy">
            <div class="project-info">
                <span class="project-type">${p.type}</span>
                <h3>${p.title}</h3>
                <p class="project-location">📍 ${p.location}</p>
                <p class="project-card-desc">${p.description.substring(0, 120)}...</p>
                <div class="project-card-specs">
                    ${Object.entries(p.specs).slice(0, 4).map(([k,v]) => `<span>${v}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Фильтры с анимацией
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (isAnimating) return;
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProjects(currentFilter, true);
    });
});

// Детальная страница
const projectPage = document.getElementById('projectPage');
const projectPageContent = document.getElementById('projectPageContent');

function openProject(id) {
    const p = projects.find(pr => pr.id === id);
    if (!p) return;

    projectPageContent.innerHTML = `
        <div class="project-gallery">
            <div class="gallery-main"><img src="${p.mainImage}" alt=""></div>
            <div class="gallery-side">
                ${p.gallery.map(img => `<img src="${img}" alt="">`).join('')}
            </div>
        </div>
        <div class="project-details">
            <div class="project-details-header">
                <div>
                    <div class="section-label">${p.type}</div>
                    <h1 class="project-details-title">${p.title}</h1>
                    <p style="color:var(--purple);margin-top:10px;">📍 ${p.location}</p>
                </div>
                <p class="project-description">${p.description}</p>
            </div>
            <div class="project-specs">
                ${Object.entries(p.specs).map(([k,v]) => `
                    <div class="spec-item"><div class="spec-label">${k}</div><div class="spec-value">${v}</div></div>
                `).join('')}
            </div>
            <div style="margin:50px 0;">
                <div class="section-label">Особенности</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px;">
                    ${p.features.map(f => `<div style="padding:15px;border:1px solid #e0e0e0;">${f}</div>`).join('')}
                </div>
            </div>
            <div class="section-label">Интерьеры</div>
            <div class="interior-gallery">
                ${p.interior.map(img => `<img src="${img}" alt="">`).join('')}
            </div>
        </div>
    `;
    projectPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

projectsGrid.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openProject(parseInt(card.dataset.id));
});

document.getElementById('backBtn').addEventListener('click', () => {
    projectPage.classList.remove('active');
    document.body.style.overflow = '';
});

// Счётчики
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('[data-target]').forEach(el => {
                const target = parseInt(el.dataset.target);
                let current = 0;
                const timer = setInterval(() => {
                    current += Math.ceil(target / 30);
                    if (current >= target) { el.textContent = target; clearInterval(timer); }
                    else { el.textContent = current; }
                }, 30);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) observer.observe(statsSection);

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
// ===== Чат с ИИ-помощником =====
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const suggestionBtns = document.querySelectorAll('.suggestion-btn');

// База знаний ИИ-помощника
const knowledgeBase = {
    'привет': 'Здравствуйте! Рад видеть вас в ARCH.HOME. Чем могу помочь?',
    'здравствуйте': 'Здравствуйте! Чем могу быть полезен?',
    'проекты': 'Мы реализовали более 250 проектов в России и за рубежом. Среди них — жилые комплексы, бизнес-центры, лофты и общественные здания. Все проекты можно посмотреть в разделе "Портфолио" на нашем сайте.',
    'услуги': 'ARCH.HOME предоставляет полный спектр архитектурных услуг: проектирование зданий и сооружений, интерьерный дизайн, ландшафтный дизайн, технический надзор, авторский надзор и консалтинг. Мы работаем на всех этапах — от концепции до ввода объекта в эксплуатацию.',
    'стоимость': 'Стоимость проектирования зависит от сложности объекта, площади и требуемого объема работ. Мы предлагаем индивидуальный расчет для каждого проекта. Рекомендуем оставить заявку на консультацию, чтобы наши специалисты подготовили точное коммерческое предложение.',
    'заказ': 'Чтобы заказать проект, вы можете:\n1. Связаться с нами по телефону +7 495 123 45 67\n2. Написать на email info@archome.ru\n3. Заполнить форму на сайте в разделе "Контакты"\n4. Посетить наш офис в Москве (Архитектурная наб., 15)',
    'команда': 'В нашей команде 45 высококвалифицированных архитекторов, дизайнеров и инженеров. Среди них — выпускники МАрхИ, Central Saint Martins, TU Delft и других ведущих школ. Главный архитектор — Александр Морозов, за плечами которого 15 лет опыта.',
    'награды': 'ARCH.HOME имеет множество наград, включая "Best Architectural Design" на International Architecture Awards (2025), "Жилой комплекс года" на Urban Awards (2024), "Лучшее архитектурное бюро" на Architecture Leaders Award (2023) и другие.',
    'время': 'Сроки проектирования зависят от сложности и объема работ. В среднем, разработка концепции занимает 2-4 недели, рабочий проект — 2-6 месяцев. Точные сроки обсуждаются индивидуально с каждым клиентом.',
    'гарантия': 'Мы предоставляем гарантию на все наши проекты. Также мы осуществляем авторский надзор на всех этапах строительства, чтобы гарантировать соответствие проекта утвержденной документации и высокое качество исполнения.',
    'спасибо': 'Всегда рады помочь! Если у вас появятся еще вопросы — обращайтесь. 😊'
};

// Функция поиска ответа в базе знаний
function getAIResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // Проверяем полные совпадения
    for (const [key, value] of Object.entries(knowledgeBase)) {
        if (msg.includes(key)) {
            return value;
        }
    }
    
    // Если ничего не найдено
    const fallbackResponses = [
        'Интересный вопрос! 😊 Наши специалисты готовы подробно ответить на него. Оставьте заявку на консультацию, и мы свяжемся с вами в ближайшее время.',
        'Хороший вопрос! Для получения точной информации рекомендую связаться с нашим офисом по телефону +7 495 123 45 67 или написать на email info@archome.ru.',
        'Спасибо за ваш вопрос! Я передам его нашим архитекторам. А пока вы можете посмотреть наши проекты в разделе "Портфолио".',
        'Отличный вопрос! 😊 Чтобы получить максимально полный ответ, предлагаю записаться на бесплатную консультацию с нашим архитектором.'
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Добавление сообщения в чат
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `
        <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
        <div class="message-content"><p>${text.replace(/\n/g, '<br>')}</p></div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Отправка сообщения
function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    // Добавляем сообщение пользователя
    addMessage(text, true);
    chatInput.value = '';
    
    // Показываем индикатор печати
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content" style="display:flex; gap: 4px; align-items: center; min-width: 60px;">
            <span style="display:inline-block; animation: blink 1.4s infinite both;">●</span>
            <span style="display:inline-block; animation: blink 1.4s infinite 0.2s both;">●</span>
            <span style="display:inline-block; animation: blink 1.4s infinite 0.4s both;">●</span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Имитация задержки ответа ИИ
    setTimeout(() => {
        // Удаляем индикатор печати
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
        
        // Генерируем ответ
        const response = getAIResponse(text);
        addMessage(response, false);
    }, 500 + Math.random() * 800);
}

// Обработчики для чата
chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

chatSend.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

// Кнопки-подсказки
suggestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const msg = btn.dataset.msg;
        chatInput.value = msg;
        sendMessage();
    });
});

// Закрытие чата по клику вне его области
document.addEventListener('click', (e) => {
    const isChatClick = chatWindow.contains(e.target) || chatToggle.contains(e.target);
    if (!isChatClick && chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
    }
});

// Добавляем стили для анимации печати
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes blink {
        0% { opacity: 0.1; }
        20% { opacity: 1; }
        100% { opacity: 0.1; }
    }
`;
document.head.appendChild(styleSheet);

// Мобильное меню (дополнительно)
document.querySelector('.menu-btn').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    if (window.innerWidth <= 768) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = 'rgba(255,255,255,0.95)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.padding = '30px';
        nav.style.borderRadius = '0 0 20px 20px';
        nav.style.gap = '15px';
        nav.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
    }
});

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav').style.display = 'none';
        }
    });
});

// Инициализация
renderProjects('all', false);