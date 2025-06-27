function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.menu-mobile');
    const hamburger = document.querySelector('.hamburger');
    
    console.log('Toggle chamado'); // Debug
    console.log('Menu encontrado:', mobileMenu); // Debug
    console.log('Hamburger encontrado:', hamburger); // Debug
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        console.log('Classe active adicionada:', mobileMenu.classList.contains('active')); // Debug
    }
    
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

// Fechar menu ao clicar em um link
function closeMobileMenu() {
    const mobileMenu = document.querySelector('.menu-mobile');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
    
    if (hamburger) {
        hamburger.classList.remove('active');
    }
}

// Validação do formulário
function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (nome === '') {
        alert('Por favor, digite seu nome!');
        return false;
    }
    
    if (mensagem === '') {
        alert('Por favor, digite uma mensagem!');
        return false;
    }
    
    if (nome.length < 2) {
        alert('Nome deve ter pelo menos 2 caracteres!');
        return false;
    }
    
    return true;
}

// Função atualizada do WhatsApp com validação
function enviarWhats(event) {
    event.preventDefault();
    
    // Validar antes de enviar
    if (!validarFormulario()) {
        return;
    }
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5544998344855';

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    window.open(url, '_blank');
    
    // Limpar formulário após envio
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
}

// Animação ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.habilidade-card, .projetos-card, .sobre-caixa');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Indicador de progresso do scroll
function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    document.querySelector('.scroll-progress').style.width = scrollProgress + '%';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('scroll', updateScrollProgress);
    
    // Trigger initial animation check
    animateOnScroll();
    
    // Smooth scroll para links de navegação
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Fechar menu mobile se estiver aberto
            closeMobileMenu();
        });
    });
});


// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Adiciona animação de rotação
    themeToggle.classList.add('rotating');
    
    // Remove a animação após completar
    setTimeout(() => {
        themeToggle.classList.remove('rotating');
    }, 300);
    
    // Verifica o tema atual
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // Muda para tema escuro
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        // Muda para tema claro
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Carrega o tema salvo ao inicializar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'light') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Inicializa o tema quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
});

// Função do WhatsApp (mantendo a existente)
function enviarWhats(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5544998344855';

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    window.open(url, '_blank');
    
    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
}
