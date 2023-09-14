document.addEventListener("mouseover", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

if (localStorage.getItem('visitorData')) {
  // If it does, parse it from JSON
  var visitorData = JSON.parse(localStorage.getItem('visitorData'));
  var count = visitorData.count;
} else {
  // If it doesn't, set it to 1
  var count = 1;
  var visitorData = { count: count };
  localStorage.setItem('visitorData', JSON.stringify(visitorData));
}

// Display the visitor count in the designated element
document.getElementById('visitorCount').textContent =  'This Site Has Been visited  ' + count + ' times';

// Function to increment the count
function incrementCount() {
  count++;
  visitorData.count = count;
  localStorage.setItem('visitorData', JSON.stringify(visitorData));
  document.getElementById('visitorCount').textContent = 'This Site Has Been visited  ' + count + ' times';
}