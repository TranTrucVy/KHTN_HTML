//Function for Decline button in Checkout page
function Thongbao(){
    alert("Thôi mà, nẳn nỉ đó! Mua gì đó đi ahuhu :(")
}

//Function for Total bill button in Checkout page
function Tinhtien() {
    var a = document.getElementById("ipad").value;
    var b = document.getElementById("galaxy").value;
    //if a has no info:
    if (a==""){
        alert('Nhập số lượng iPad cần mua.');
        document.getElementById("ipad").focus;
        return false;
    }
    //if a recieves texts or strings:
    if (isNaN(a)) {
        alert('Nội dung không đúng! Nhập số lượng iPad cần mua.');
        document.getElementById("ipad").select;
        return false;
    }
    //if b has no info:
    if (b==""){
        alert('Nhập số lượng Tablet cần mua.');
        document.getElementById("galaxy").focus;
        return false;
    }
    //if b receives texts or strings :
    if (isNaN(b)) {
        alert('Nội dung không đúng! Nhập số lượng Tablet cần mua.');
        document.getElementById("galaxy").select;
        return false;
    }
    //calculation & return value:
    var c = Number(a)*29290000;
    var d = Number(b)*30990000;
    var e = Number(c) + Number(d);
    document.getElementById("tongipad").value= c;
    document.getElementById("tonggalaxy").value= d;
    document.getElementById("tongcong").value= e;
}

//Function for Customer Form & Final Invoice in Checkout page (alert style)
function Invoice() {
    var a = document.getElementById("hoten").value;
    var b = document.getElementById("diachiemail").value;
    var c = document.getElementById("sodienthoai").value;
    var d = document.getElementById("diachinhanhang").value;
    var e = document.getElementById("ngaynhanhang").value;
    var f = document.getElementById("tongcong").value;
    //if no info is input:
    if (a==""){
        alert("Nhập đầy đủ họ & tên người mua hàng.");
        document.getElementById("hoten").focus;
        return false;
    }
    if (b==""){
        alert('Nhập địa chỉ email người mua hàng.');
        document.getElementById("diachiemail").focus;
        return false;
    }
    if (c==""){
        alert('Nhập số điện thoại người mua hàng.');
        document.getElementById("sodienthoai").focus;
        return false;
    }
    //if the customer inserts text/string inside the Phone number section:
    if (isNaN(c)){
        alert('Nội dung nhập không đúng! Vui lòng nhập số điện thoại chính chủ.');
        document.getElementById("sodienthoai").select;
        return false;
    }
    if (d==""){
        alert('Nhập đầy đủ địa chỉ nhận hàng.');
        document.getElementById("diachinhanhang").focus;
        return false;
    }
    if (e==""){
        alert('Nhập ngày nhận hàng.');
        document.getElementById("ngaynhanhang").focus;
        return false;
    }
    if (f==""){
        alert('Bấm "Tổng bil" để xem số tiền trước đã.');
        document.getElementById("ngaynhanhang").focus;
        return false;
    }
    alert("Hoá đơn có giá trị là: " + f + " " + "VNĐ. Shop đã nhận được order, lưu thông tin vào hệ thống, & gửi hóa đơn vào email rồi nhe! Quý khách chịu khó chờ tí sẽ có hàng :> Xin cảm ơn ;))");
}


//Function for Accept button in Contact page alert style (asterisk style wouldn't work)
function DongY(){
    var a = document.getElementById("fn").value;
    var b = document.getElementById("mail").value;
    var c = document.getElementById("sub").value;
    var d = document.getElementById("editor").innerHTML;
    //if a has no info:
    if (a==""){
        alert("Nhập đầy đủ họ tên.");
        document.getElementById("fn").focus;
        return false;
    }
    //if b has no info:
    if (b==""){
        alert("Nhập email liên lạc.");
        document.getElementById("mail").focus;
        return false;
    }
    //if c has no info:
    if (c==""){
        alert("Nhập chủ để cần bàn bạc.");
        document.getElementById("sub").focus;
        return false;
    }
    //if d has no info (UNSOLVED)
    if (d==""){
        alert("Nhập nội dung tin nhắn.");
        document.getElementById("editor").focus;
        return false;
    }
    alert("Nội dung tin nhắn của bạn đã được gửi. Shop sẽ hồi âm trong thời gian sớm nhất có thể.")
}

//Function for Decline button in Contact page
function TuChoi(){
    alert("Ahihi, vậy thôi bái bai ;))))")
}

