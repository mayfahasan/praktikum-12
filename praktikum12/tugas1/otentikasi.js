        document.getElementById('login').addEventListener('click', function() {
            let inputNama = document.getElementById('username').value;
            let inputPass = document.getElementById('password').value;
            let form = document.getElementById('form');

            if (inputNama === 'mayfa' && inputPass === 'pacarjaemin') {
                alert('asik bisa login');
                window.location.href = 'halbaru.html'; 
    } else {
                alert('coba lagi');
            }
        });   