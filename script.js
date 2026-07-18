document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll("#sidebar li[data-page]");

  const openSidebar = () => {
    sidebar.classList.add("open");
    overlay.classList.add("visible");
  };
  const closeSidebar = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  };

  menuBtn.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);

  // Highlight the nav item matching the current page
  const currentPage = document.body.dataset.page;
  navItems.forEach(li => {
    if (li.dataset.page === currentPage) {
      li.classList.add("active");
    }
  });
});
