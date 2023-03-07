const img = document.querySelector('.avatar');
const imgClick = document.querySelector('.conteiner-profile-avatar');

img.addEventListener('click', () => {
  img.classList.toggle('avatar-click')
  imgClick.classList.toggle('conteiner-profile-avatar-click')
})
