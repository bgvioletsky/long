// 获取登录模型
var modal1 = document.getElementById('login');
// 获取注册模型
var modal2 = document.getElementById('sign');

// 鼠标点击模型外区域关闭登录框和注册框
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('click', () => {
  fileInput.click();
});

function close_open() {
    var mod = document.getElementById('upload');
    var content = document.getElementById('content');


    if (mod.style.display == "none") {
        mod.style.display = "block";
        content.style.display = "none";
    } else {
        mod.style.display = "none";
        content.style.display = "block";
    }


}
function post_login(userName, passWord) {
    if (!userName || !passWord) {
        alert("请输入手机号、密码！");
    } else {
        $.post("/user/action.html", { action: "123", username: '123', password: '123' }, function (data) {
            if (data == -1) {
                alert("密码错误或手机号不存在，请重新登陆！");
            } else if (data == 1) {
                alert("登陆成功，欢迎您：" + userName);
                // 跳转到指定的 URL
                window.location.href = "/"; // 替换为目标 URL
            } else {
                alert("系统维护中，请稍后重试！");
                window.location.href = "/"; // 替换为目标 URL
            }
        }).fail(function () {
            alert("系统维护中，请稍后重试！");
            window.location.href = "/"; // 替换为目标 URL
        });
    }
}


var bt01 = document.getElementById("captcha-btn");
bt01.onclick = function () {
    bt01.disabled = true;  //当点击后倒计时时候不能点击此按钮 
    var time = 60;  //倒计时5秒 
    var timer = setInterval(fun1, 1000);  //设置定时器 
    function fun1() {
        time--;
        if (time >= 0) {
            bt01.innerHTML = time + "s后重新发送";
        } else {
            bt01.innerHTML = "重新发送验证码";
            bt01.disabled = false;  //倒计时结束能够重新点击发送的按钮 
            clearTimeout(timer);  //清除定时器 
            time = 60;  //设置循环重新开始条件 
        }
    }
}