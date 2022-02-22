 const bannerSideBar = document.querySelector('.banner_imgSidebar');
 const banner = document.getElementsByClassName('banner_imgSidebar')[0];
 const blocks = document.getElementsByClassName('blocks');

 var result = (bannerSideBar.clientHeight / blocks[0].clientHeight) * (bannerSideBar.clientWidth / blocks[0].clientWidth);

 function toggleMenu() {
     const menuToggle = document.querySelector('.toggle')
     const sidebar = document.querySelector('.sidebar')
     menuToggle.classList.toggle('active')
     sidebar.classList.toggle('active')
 }
 for (var i = 1; i < result; i++) {
     banner.innerHTML += '<div class="blocks"></div>'
     const duration = Math.random() * 5

     blocks[i].style.animationDuration = 2 + duration + 's'
     blocks[i].style.animationDelay = duration + 's'
 }