let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sea.jpeg') {
        myImage.setAttribute('src', 'images/italy.jpeg');
    } else {
        myImage.setAttribute('src', 'images/sea.jpeg');
    }
}

document.querySelector('html').onclick = function () {
    alert('痛っ! つつくのはやめて!');
}