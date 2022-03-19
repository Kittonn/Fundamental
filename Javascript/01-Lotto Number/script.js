let num = prompt("กรอกเลขที่ต้องการ");
document.getElementById("usernum").innerHTML = num;
document.getElementById("lotto").innerHTML = Math.floor(Math.random() * 100);
