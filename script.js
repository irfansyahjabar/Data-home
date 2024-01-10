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
        window.location.href = 'https://drive.google.com/drive/folders/1OrRmLzZ497Z0bK6GD8BkkGbc2ZbYs1du?usp=sharing';
    }
    else if (buttonNumber === 2) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = 'https://drive.google.com/drive/folders/1qeHJ3rGGFlS-L8ywvhwPZrxN899OZ-b1?usp=sharing';
    }
    else if (buttonNumber === 3) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = 'https://drive.google.com/drive/folders/1eTm9-13KlBsiGcR_omBLzHK-1qc4nCKr?usp=sharing';
    }
    else if (buttonNumber === 4) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = 'https://drive.google.com/drive/folders/1t835A27PJINE_d9m8B78sxpUyh9_8vED?usp=sharing';
    }
    else if (buttonNumber === 5) {
        // Redirect to Google Drive when Button 1 is clicked
        window.location.href = 'https://drive.google.com/drive/folders/17LFdidhu69lLwVj_SqvTm-tQJ4zmLXSx';
    } else {
        alert("Button " + buttonNumber + " clicked!");
    }
}