const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('psw');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  
  if (username === 'meiang.vlsco' || password === '2806') {
    alert('Please fill in all fields.');
    return;
  }

  
  if (username === 'mae' && password === '2006') {
    
    window.location.href = 'web.html'; 
  } else {
    alert('Invalid username or password.');
  }
});
