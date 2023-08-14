// OPENING AND CLOSING LOGIN MODAL
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);
document.getElementById("openModalBtn").addEventListener("click", openModal);

// CLOSING REGISTER MODAL 

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}
document.querySelector(".close2").addEventListener("click", closeModal2);

// SWICHING MODALS STARTS HERE 

function switchModal() {
  var currentModal = document.getElementById("myModal");
  var nextModal = document.getElementById("myModal2");

  // Hide current modal
  currentModal.style.display = "none";

  // Show next modal
  nextModal.style.display = "block";
}

function switchModal2() {
  var currentModal = document.getElementById("myModal2");
  var nextModal = document.getElementById("myModal");

  // Hide current modal
  currentModal.style.display = "none";

  // Show next modal
  nextModal.style.display = "block";
}

document.getElementById("menuBtn").addEventListener("click", function () {
  var menuContent = document.getElementById("menuContent");
  menuContent.classList.toggle(".show");
});

window.onclick = function (event) {
  var menuContent = document.getElementById("menuContent");
  if (!event.target.matches('.dropBtn')) {
    if (menuContent.classList.contains('.show')) {
      menuContent.classList.remove('.show');
    }
  }
};

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Toggle the drop-down menu
function toggleDropdown() {
  var dropdownList = document.getElementById("dropdown-list");
  dropdownList.style.display = (dropdownList.style.display === "block") ? "none" : "block";

  window.onclick = function (event) {
    if (event.target !== dropdownList && !event.target.matches('.dropdown-btn')) {
      dropdownList.style.display = 'none';
    }
  }
}

// Handle option selection
function selectOption(option) {
  var dropdownBtn = document.querySelector(".dropdown-btn");
  dropdownBtn.innerText = option;
  toggleDropdown();
}

window.onclick = function (event) {
  var dropdownList = document.getElementById("dropdown-list");
  if (event.target !== dropdownList && !event.target.matches('.dropdown-btn')) {
    dropdownList.style.display = 'none';
  }
  else (dropdownList.style.display === 'none')
};

// OPENING AND CLOSING LOGIN MODAL
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);
document.getElementById("openModalBtn").addEventListener("click", openModal);

// CLOSING REGISTER MODAL 

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}
document.querySelector(".close2").addEventListener("click", closeModal2);

// SWICHING MODALS STARTS HERE 

function switchModal() {
  var currentModal = document.getElementById("myModal");
  var nextModal = document.getElementById("myModal2");

  // Hide current modal
  currentModal.style.display = "none";

  // Show next modal
  nextModal.style.display = "block";
}

function switchModal2() {
  var currentModal = document.getElementById("myModal2");
  var nextModal = document.getElementById("myModal");

  // Hide current modal
  currentModal.style.display = "none";

  // Show next modal
  nextModal.style.display = "block";
}

// Password show/hide
const showHideBtn = document.getElementById("showHideBtn");
const passwordInput = document.getElementById("password");

showHideBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHideBtn.textContent = "HIDE";
  } else {
    passwordInput.type = "password";
    showHideBtn.textContent = "SHOW";
  }
});

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggle-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showHideButton = document.getElementById('showHideButton');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showHideButton.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    showHideButton.textContent = 'Show Password';
  }
}





