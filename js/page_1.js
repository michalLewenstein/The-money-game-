function openPopup() {
    document.getElementById("userPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("userPopup").style.display = "none";
}

function saveUserInfo() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    alert("Welcome: " + username);
    closePopup();
}