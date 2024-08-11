document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.getElementById('filterSelect');

  selectElement.addEventListener('change', function() {
      const selectedValue = this.value;
      if (selectedValue) {
          window.location.href = selectedValue;
      }
  });
});