let link = document.querySelector('a');
let myName;

function setUserName() {
    if (myName === "ウェーイ") {
        alert("合言葉認証成功！やったね！");
    } else {
        alert("合言葉が違います！");
        alert("残念！");
        alert("おとといきやがれ！");
        alert("！！！");
        alert("。。。");
        alert("。。。。。");
        alert("今回は特別に許すよ！次からは合言葉をしっかり入力してね！！！");
    }

    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'ようこそ！クソザコwebページへ！';
}

link.onclick = function () {
    myName = prompt('秘密の合言葉を入力してください');
    setUserName();
}
