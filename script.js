/// ---------------- TEXT : title, headig, para, code -------------------

function setTitle1(ele) {

  if(selectedElement.type = 'title'){
    let heading = selectedElement.node.querySelector(".content h1");
    heading.innerHTML = ele.value;
  }

}

function setTitle2(ele) {

  if(selectedElement.type = 'title'){
    let heading = selectedElement.node.querySelector(".content .remain h1");
    heading.innerHTML = ele.value;
  }

}

function setHeading(e){

  if(selectedElement.type == 'para' || selectedElement.type == 'code' ){

    let heading = selectedElement.node.querySelector(".content h3");
    heading.innerText = e.value;
    console.log(e.value)

  }

}

function setPara(e){

  if(selectedElement.type == 'para' || selectedElement.type == 'code' ){

    let paragraph = selectedElement.node.querySelector(".content p");
    paragraph.innerText = e.value;

  }

}

function setCode(e){

  if(selectedElement.type == 'code' ){

    let code = selectedElement.node.querySelector(".content code");
    code.innerHTML = `${e.value}`;

  }

}


///  ------------- CANVAS ---------------

function exportPost(){

  let frame = document.querySelectorAll(".frame");
  let canvas = document.querySelector(".exportCanvas");
  let imageCanvas = canvas.querySelector(".canvas")
  let scrollContainer = document.querySelector("#post-holder-scroll");

  scrollContainer.scrollTop = 0;

  canvas.style.scale = 1;
  console.log('working')

  frame.forEach( ele => {

    html2canvas(ele, {
      scale : 2,
      dip : 300,
    })
    .then( data => {
      console.log(data);
      imageCanvas.appendChild(data);
    });

  });

}

function closeCanvas(){
  let canvas = document.querySelector(".exportCanvas");
  if(canvas.style.scale == 1){
    canvas.style.scale = 0;
    let imageCanvas = canvas.querySelector(".canvas");
    imageCanvas.innerHTML = " ";
  }
}


/// ------------- IMAGE -----------------

function setPostImage(e){

  if(selectedElement.type == 'title') {

    let imageFiles = e.target.files;
    let imageFilesLength = imageFiles.length;

    if(imageFilesLength > 0){
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      let img = selectedElement.node.querySelector(".content .remain img");

      img.src = imageSrc;
    }

  }

  if(selectedElement.type == 'para') {

    let imageFiles = e.target.files;
    let imageFilesLength = imageFiles.length;

    if(imageFilesLength > 0){
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      let img = selectedElement.node.querySelector(".content img");

      img.src = imageSrc;
    }

  }

}

function flipVertical(ele){
  let img = selectedElement.node.querySelector(".content img");
  img.classList.toggle("flip-v");
}

function flipHorizontal(ele){
  let img = selectedElement.node.querySelector(".content img");
  img.classList.toggle("flip-h");
}

function setHue(ele){
  console.log(ele.value);
  let img = selectedElement.node.querySelector(".content img");
  img.style.filter= `hue-rotate(${ele.value}deg)` ;
  console.log(img.style.filter)
}