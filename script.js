var article = document.getElementById("pagination")

var start = 1
var last = 6
for (i = start; i <= last; ++i) {
    if (i === start) {
        article.innerHTML += `
        <li><a href="">
            <div>&laquo;</div>
        </a></li>`
    }
    else if (i === last) {
        article.innerHTML += `
        <li><a href="">
            <div>&raquo;</div>
        </a></li>`
    }
    else {
        article.innerHTML += `
        <li><a href="">
            <div>${i - 1}</div>
        </a></li>`
    }
}