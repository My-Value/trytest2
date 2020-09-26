var obox = document.getElementById("box");
var odown = document.getElementById("down");
var oli = document.querySelectorAll("li");

var img = document.createElement('img');//创建一个标签
img.setAttribute('src','../image/切换学生箭头.png');//给标签定义src链接
console.log(oli);
var timer;
//当点击obox时，呈现出下拉列表的内容，给个延时效果
obox.onclick = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        odown.style.display = "block";
    },300)
    ///选中列表中的某一项并将其呈现在box中,隐藏下拉列表
    for(var i=0;i<oli.length;i++){
        oli[i].n = i;
        oli[i].onclick = function(){
            obox.innerHTML = this.innerHTML;
            // obox.innerHTML = this.img;
            odown.style.display = "none";
            clearInterval(timer);
        }
    }
}