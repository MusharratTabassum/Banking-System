document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPass = document.getElementById('user-password');
    if (userEmail.value == 'tabassum@gmail.com' && userPass.value == 1234) {
        window.location.href = 'banking.html'
    }
    else {
        console.log(alert('Invalid email or password'));
    }

})