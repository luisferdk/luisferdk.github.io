let $links = document.querySelectorAll('.menu-items a');
for (let i = 0; i < $links.length; i++) {
  $links[i].onclick = function (e) {
    $links.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  };
}
