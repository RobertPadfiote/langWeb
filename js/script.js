function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue, body;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul.classList.add("activeul");
    li = ul.getElementsByTagName('li');
    body = document.getElementsByName("body");

    body.onclick = removeclass();

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function removeclass() {
    var ul;
    ul = document.getElementById("myUL");
    ul.classList.remove("activeul")
}
// setTimeout(removeclass,2000);