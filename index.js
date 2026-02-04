// ============ Анимация печатания текста ============
const greetingElement = document.getElementById('greeting');
const text = 'С Днем Рождения, Ромчик!';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        greetingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Запуск анимации через 500мс
setTimeout(typeWriter, 500);

// ============ Интерактивные конфетти ============
const confettiBtn = document.getElementById('confettiBtn');

confettiBtn.addEventListener('click', () => {
    createConfetti();
    // Создаем несколько партий конфетти
    for (let i = 0; i < 5; i++) {
        setTimeout(createConfetti, i * 100);
    }
});

function createConfetti() {
    const confettiCount = 50;
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Случайные цвета
        const colors = ['#ff79c6', '#bd93f9', '#8be9fd', '#50fa7b', '#f1fa8c', '#ffb86c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Случайные размеры и позиции
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 1;
        const duration = Math.random() * 2 + 2;
        
        confetti.style.backgroundColor = randomColor;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${posX}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        
        // Случайная форма
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
    }

    // Удаляем контейнер через 5 секунд
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// ============ Анимация кода (появление построчно) ============
setTimeout(() => {
    const codeLines = document.querySelectorAll('.code-text span');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        line.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 500 + index * 100);
    });
}, 1000);

// ============ Параллакс эффект при скролле ============
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        const scrollPosition = window.scrollY;
        const cardPosition = card.getBoundingClientRect().top;
        
        if (cardPosition < window.innerHeight) {
            const offset = (scrollPosition + cardPosition) * 0.05;
            card.style.transform = `translateY(${offset}px)`;
        }
    });
});

// ============ Звуковые эффекты (опционально) ============
confettiBtn.addEventListener('click', () => {
    // Простая вибрация (если поддерживается)
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
});

// ============ Пасхалка: нажатие на Enter ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createConfetti();
    }
});

// ============ Анимация при наведении на достижения ============
const achievementItems = document.querySelectorAll('.achievements-list li');
achievementItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
        item.style.color = '#a855f7';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        item.style.color = '';
    });
});

// ============ Стили для конфетти (динамически добавляем в head) ============
const style = document.createElement('style');
style.textContent = `
    .confetti-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    }
    
    .confetti {
        position: absolute;
        top: -20px;
        opacity: 0;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🎉 Сайт загружен! С Днем Рождения, Роман!');
