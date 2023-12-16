const pages = document.querySelectorAll(".onboard");
let currentPage = 0;

function showPage(pageIndex) {
  if (pageIndex >= pages.length) {
    // Redirect to the login page after showing all onboarding pages
    window.location.href = "CreateAccount.html"; // Replace 'login.html' with your login page URL
    return;
  }

  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  currentPage = pageIndex;
  setTimeout(() => {
    showPage(currentPage + 1); // Move to the next page after a delay
  }, 3000); // Change page after 3 seconds (3000 milliseconds)
}
// Start the onboarding process
showPage(currentPage);
