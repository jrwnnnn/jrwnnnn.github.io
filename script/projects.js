function filter() {
  var select = document.getElementById('filterSelect');

  if (select.value == "0" && window.location.href != "http://jrwnnnn.github.io/pages/projects.html#navigation") {
    window.location.href = "http://jrwnnnn.github.io/pages/projects.html#navigation";
  } else if (select.value == "1" && window.location.href != "http://jrwnnnn.github.io/pages/active.html#navigation") {
    window.location.href = "http://jrwnnnn.github.io/pages/active.html#navigation";
  } else if (select.value == "2" && window.location.href != "http://jrwnnnn.github.io/pages/finished.html#navigation") {
    window.location.href = "http://jrwnnnn.github.io/pages/finished.html#navigation";
  } else if (select.value == "3" && window.location.href != "http://jrwnnnn.github.io/pages/discontinued.html#navigation") {
    window.location.href = "http://jrwnnnn.github.io/pages/discontinued.html#navigation";
  }
}