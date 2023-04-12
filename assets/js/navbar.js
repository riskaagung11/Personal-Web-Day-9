listMenuIsOpen = false;
function openListMenu() {
  let listMenu = document.getElementById("menu");
  if (!listMenuIsOpen) {
    listMenu.style.display = "block";
    listMenuIsOpen = true;
  } else {
    listMenu.style.display = "none";
    listMenuIsOpen = false;
  }
}
