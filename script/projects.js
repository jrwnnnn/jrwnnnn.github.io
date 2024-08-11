function redirectToPage() {
    const selectElement = document.getElementById("filterSelect");
    const selectedOption = selectElement.value;
  
    const pageMap = {
      "recent": "https://jrwnnnn.github.io/pages/projects.html#navigation",
      "active": "https://jrwnnnn.github.io/pages/project_filters/active.html#navigation",
      "finished": "https://jrwnnnn.github.io/pages/project_filters/finished.html#navigation",
      "discontinued": "https://jrwnnnn.github.io/pages/project_filters/discontinued.html#navigation"
    };
  
    window.location.href = pageMap[selectedOption];
  }