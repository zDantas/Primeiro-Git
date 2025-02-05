function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')){
    // se tiver light mode , add imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver n light mode , manter imagem normal
    img.setAttribute('src', './assets/avatar.png')
   
   }



}