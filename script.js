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

var count;
  // Function to increment and display the user count
  if (localStorage.getItem('userCount')) {
    // If it exists, increment the count
    count = parseInt(localStorage.getItem('userCount')) +1;
    localStorage.setItem('userCount', count);
  } else {
    // If it doesn't exist, set the count to 1
    localStorage.setItem('userCount', 1);
  }aax
    // Check if the 'userCount' key exists in local storage
   
   document.getElementById("user-count").innerHTML = "Visitor count is "+ count+" times";

  // // Call the function to increment and display the user count
  // incrementUserCount();

