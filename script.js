// Добавляем функциональность для кнопок
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            // Здесь можно добавить логику перехода по страницам
            console.log('Нажата кнопка:', this.textContent.trim());
        });
    });

    // Обработка поля ввода названия проекта
    const projectInput = document.querySelector('.project-title input');
    
    projectInput.addEventListener('input', function() {
        console.log('Название проекта изменено на:', this.value);
        document.title = this.value + " | Шапка сайта";
    });

    projectInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.value = 'Мой проект';
        }
    });
});
