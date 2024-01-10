var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}
function buttonClicked(buttonNumber) {
    if (buttonNumber === 1) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = '';
    }
    else if (buttonNumber === 2) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = '';
    }
    else if (buttonNumber === 3) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = '';
    }
    else if (buttonNumber === 4) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = '';
    }
    else if (buttonNumber === 5) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = '';
    } else {
        alert("Button " + buttonNumber + " clicked!");
    }
}
