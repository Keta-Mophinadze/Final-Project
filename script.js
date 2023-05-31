let navigation = document.getElementById('navBar');
let burger = document.getElementById('burgerBar');
burger.addEventListener('click', function() {
    navigation.classList.toggle('navActive');
})