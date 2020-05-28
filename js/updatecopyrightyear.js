const year = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();

function copyYear() {
  return (year.innerHTML = currentYear);
}

copyYear();
