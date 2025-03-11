//The current year
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//Last modification
let lastModif = new Date(document.lastModified);
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;