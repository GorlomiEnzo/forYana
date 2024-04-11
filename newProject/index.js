// фигма 
// https://www.figma.com/file/gllvvopo07ZcUV0oz9NZq4/Untitled?type=design&node-id=0-1&mode=design&t=Ll5V9vte1FRSQdlJ-0

let images = {
    "images/cosmetics/cosmetics1.png" : 'ROUGE COCO FLASH 15$',
    "images/cosmetics/cosmetics2.png" : 'LES 4 OMBRES ÉCLAT DE NUIT 20$',
    "images/cosmetics/cosmetics3.png" : 'NOIR ALLURE 17$',
    "images/cosmetics/cosmetics4.png" : 'LE VERNIS DI ROSE 14$',
    "images/cosmetics/temp.png" : 'temp1',
    "images/cosmetics/temp1.png" : 'temp2',
    "images/cosmetics/temp2.png" : 'temp3',
    "images/cosmetics/temp3.png" : 'temp4'
};

let modelImages = [
  "images/models/model.png",
  "images/models/model1.png",
  "images/models/model2.png",
  "images/models/model3.png",
  "images/models/model4.png",
  "images/models/model5.png",
  "images/models/model6.png",
  "images/models/model7.png",
  "images/models/model8.png",
  "images/models/model9.png",
  "images/models/model10.png",
  "images/models/model11.png",
  "images/models/model12.png",
  "images/models/model13.png",
  "images/models/model14.png",
  "images/models/model15.png",
  "images/models/model16.png",
  "images/models/model17.png",
  "images/models/model18.png",
  "images/models/model19.png",
  "images/models/mode20.png",
  "images/models/mode21.png",
  "images/models/mode22.png",
  "images/models/mode23.png",
  "images/models/mode24.png"
]

let currentIndex = 0; // Индекс текущего отображаемого изображения
const imagesPerPage = 4;

function nextImages() {
  console.log('next');
  if (currentIndex + imagesPerPage < Object.keys(images).length) { 
    currentIndex += imagesPerPage; 
    displayCosmetic(images); 
  } 
}

function previousImages() { 
  console.log('previous');
  if (currentIndex - imagesPerPage >= 0) { 
    currentIndex -= imagesPerPage; 
    displayCosmetic(images);
  } 
}

function sliceImage(first, second) {
  addImages(modelImages.slice(first, second));
}


// 4 фотки косметики
function displayCosmetic(imageObject) { 
  var containerImage = document.getElementById('imageCosmeticContainer'); 
  containerImage.innerHTML = ""; // Очищаем предыдущие изображения

  var imageKeys = Object.keys(imageObject).slice(currentIndex, currentIndex + imagesPerPage);
  // Object.keys - возвращает ключи 
  // slice - возвращает новый массив 
  // slice(0, 0 + 4) - возвращает первые 4 значения из массива
  imageKeys.forEach(function(key) { 
    var imageContainer = document.createElement('div'); // Создаем контейнер для изображения и подписи
    var img = document.createElement('img'); 
    img.src = key; 
    img.alt = imageObject[key]; 
    img.classList.add('imageCosmetic'); 
    
    var caption = document.createElement('p');
    caption.textContent = imageObject[key];

    imageContainer.appendChild(img);
    imageContainer.appendChild(caption);

    containerImage.appendChild(imageContainer); // Добавляем контейнер в общий контейнер
  });
}

// 6 фоток макияжа
function addImages(images) {
  var container = document.getElementById('imageContainer');
  container.innerHTML = ""; // Clear previous images
  
  for (var i = 0; i < 6; i++) {
    var img = document.createElement('img');
    img.src = images[i]; 
    img.classList.add('image');
    container.appendChild(img);
  }
}

displayCosmetic(images); 
addImages(modelImages.slice(0, 6));

document.getElementById('next-button').addEventListener('click', () => nextImages());
document.getElementById('prev-button').addEventListener('click', () => previousImages());

document.getElementById('weddingButton').addEventListener('click', () => sliceImage(0, 6));
document.getElementById('eveningButton').addEventListener('click', () => sliceImage(6, 12));
document.getElementById('artButton').addEventListener('click', () => sliceImage(12, 18));
document.getElementById('naturalButton').addEventListener('click', () => sliceImage(14, 24));

document.getElementById('prev-button').addEventListener('click', prevImage);
document.getElementById('next-button').addEventListener('click', nextImage);


