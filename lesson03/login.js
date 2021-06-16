let credentials = {
  username: 'nathantbirch@gmail.com',
  password: '12345',
};

function createUser() {
  document.getElementById('message').style.display = 'block';
  // retrieve inputs from user
  let email = document.getElementById('email').value;
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  //   let p = document.createElement('p');
  let p = document.getElementById('message');
  if (password1 === password2) {
    p.innerHTML = 'congrats, your passwords match';
    p.style.color = 'green';
  } else {
    p.innerHTML = 'Your passwords do not match';
    p.style.color = 'red';
  }
  //   document.body.appendChild(p);
}

function login() {
  let email = document.getElementById('email').value;
  let password1 = document.getElementById('password1').value;
  if (credentials.username === email && credentials.password === password1) {
    document.getElementById('signUpOrLogin').style.display = 'none';
    document.getElementById('pageContent').style.display = 'block';
  } else {
    let p = document.getElementById('message');
    p.innerHTML = 'Invalid Credentials';
    p.style.display = 'block';
    p.style.color = 'red';
  }
}
