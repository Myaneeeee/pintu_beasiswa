document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').style.fontSize = '15px';
    document.getElementById('submitBtn').value = 'Login Success!';
    setTimeout(function() {
        document.getElementById('submitBtn').value = 'Redirecting to Home Page.';
        setTimeout(function() {
            document.getElementById('submitBtn').value = 'Redirecting to Home Page..';
            setTimeout(function() {
                document.getElementById('submitBtn').value = 'Redirecting to Home Page...';
                setTimeout(function() {
                    window.location.href = '../html/index.html';
                }, 1000); // 1 second delay
            }, 700); // 0.5 second delay
        }, 700); // 0.5 second delay
    },  500); // 0.5 second delay


});