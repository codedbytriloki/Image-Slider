const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const imageContainer = document.querySelector('.image');
const image = document.getElementById('slide');

let currentImage = 1;

nextBtn.addEventListener('click', () => {
  currentImage++;
  image.src = `https://picsum.photos/400/250?random=${currentImage}`;
})

prevBtn.addEventListener('click', () => {
  if(currentImage <= 1){
    prevBtn.disabled = true;
  } 
  else{
    prevBtn.disabled = false;
    currentImage--;
    image.src = `https://picsum.photos/400/250?random=${currentImage}`;
  }
})


