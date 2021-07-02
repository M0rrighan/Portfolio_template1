// Variables needed to check the email input validity
const alertMsg = document.createElement('p');
alertMsg.classList.add('alert_msg');
alertMsg.textContent = ' * Please change your email to lower case.';
const submitBtn = document.querySelector('form .submit_btn button');

// Variables to access form values
const cForm = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('message');

const formData = {
  inputName: null,
  inputEmail: null,
  inputMessage: null,
};

// This function needs second parameter to be one of the following :
// 'n' for name 'e' for email 'm' for message
function populateFormData(value, itemName) {
  if (itemName === 'n') {
    formData.inputName = value;
  } else if (itemName === 'e') {
    formData.inputEmail = value;
  } else if (itemName === 'm') {
    formData.inputMessage = value;
  } else {
    console.log('Invalid attribute name for given value');
  }
}

username.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'n');
});
email.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'e');
});
msg.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'm');
});

//Checks in formData exist on the local storage
//If not, formData is added to the local storage
const ourString = JSON.stringify(formData);

function storeInfo() {
  if (localStorage.getItem('ourData') !== ourString) {
    localStorage.setItem('ourData', ourString);
  } else {
    getInfo();
  }
}

// Function to check if email input is lowercase
// Alert if email input needs to be changed
cForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    submitBtn.parentNode.insertBefore(alertMsg, submitBtn);
    alertMsg.classList.add('active');
    email.style.borderColor = '#aa161d';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '2px';
    e.preventDefault();
  } else {
    alertMsg.classList.remove('active');
    storeInfo();
  }
});

getInfo();