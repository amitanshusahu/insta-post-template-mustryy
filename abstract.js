let frameCount = 0;
let selectedElement = {};

function addFrame(type){
	let postContainer = document.querySelector(".post-container");

	if(type == "title"){
		postContainer.innerHTML += `
		<div class="frame-wrapper" id="frame${frameCount}" onclick="showSidebar('${type}', ${frameCount}); selectFrame('frame${frameCount}', '${type}');">
            <div class="frame">

              <div id="logo">
                <img src="./public/logo.png" alt="">
              </div>

              <div class="content">
                <h1>Useful JavaScript <b>snippets</b> to</h1>
                <div class="remain">
                  <h1>save time</h1>
                  <div class="image-holder">
                    <img class = "flip-h flip-v" src="./public/temp.png" alt="">
                  </div>
                </div>
              </div>

              <div class="footer">
                <img src="./public/foot.png" alt="">
                <img src="./public/right.png" alt="">
              </div>

	        </div>
	    </div>
		`;
    frameCount ++;
	}

	if(type == "para"){
		postContainer.innerHTML += `
          <div class="frame-wrapper" id="frame${frameCount}" onclick="showSidebar('${type}', ${frameCount}); selectFrame('frame${frameCount}', '${type}');">
            <div class="frame">
              <div id="logo">
                <img src="./public/logo.png" alt="">
              </div>
              <div class="content">
                <h3>Some heading</h3>
                <div class="flex-col-min"><img src="" alt=""></div>
                <p>
                 some paragraph is written here for the shake of god, oh almighty Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Perferendis amet atque illum, temporibus ullam exercitationem. Voluptates, iste, minus perferendis, accusantium quisquam, debitis eos excepturi adipisci voluptate deserunt optio aperiam assumenda?
                </p>
              </div>
              <div class="footer">
                <img src="./public/foot.png" alt="">
                <img src="./public/right.png" alt="">
              </div>
            </div>
          </div>
		`;
    frameCount ++;
	}

	if(type == 'code'){
		postContainer.innerHTML += `
          <div class="frame-wrapper" id="frame${frameCount}" onclick="showSidebar('${type}', ${frameCount}); selectFrame('frame${frameCount}', '${type}');">
            <div class="frame">
              <div id="logo">
                <img src="./public/logo.png" alt="">
              </div>
              <div class="content">
                <h3>Some heading</h3>
                <pre class="code">
                  <code class="language-Javascript" editable>
                    const object = {
                      name : "Nisha",
                      email : "nishagangoli@gmail.com"
                    };
                    console.log("hellow world");
                    if(you){
                      log("you are best");
                    }
                  </code>
                </pre>
                <p></p>
              </div>
              <div class="footer">
                <img src="./public/foot.png" alt="">
                <img src="./public/right.png" alt="">
              </div>
            </div>
          </div>
		`;
    frameCount ++;
		startHighLight();
	}
}

function showSidebar(type, page){
	let sidebar = document.querySelector("aside");
	let body = document.querySelector("body");

	sidebar.style.display = "block";
	body.style.gridTemplateColumns = "1fr 3fr";

	if(type == 'title'){
		sidebar.innerHTML = `
	      <nav>
	        <h3>${type} page</h3>
	        <span class="page-no">${page}</span>
	      </nav>
	      <menu class="flex-col-max">
	        <div class="config flex-col-min">
	          <h4>title</h4>  
	          <input type="text" id="title1" placeholder="Useful JavaScript <b>Snippets</b> to" onkeyup="setTitle1(this)">
	          <input type="text" id="title2" placeholder="Save time" onkeyup="setTitle2(this)">
	        </div>
	        <div class="config flex-col-min">
	          <h4>image</h4>
	          <input type="file" accept="image/*" id="" oninput="setPostImage(event)">
              <div class="options">
                <ul class="option-item-wrapper flex-col-min">
                  <li>
                    <button onclick="flipVertical(this)">flip-vertical</button>
                    <button onclick="flipHorizontal(this)">flip-horizontal</button>
                  </li>
                  <li>
                    <h5>Hue</h5>
                    <input type="range" max="360" oninput="setHue(this)">
                  </li>
                </ul>
              </div>
	        </div>
	      </menu>
		`;
	}

  if(type == 'para'){
    sidebar.innerHTML = `
      <nav>
        <h3>${type} page</h3>
        <span class="page-no">${page}</span>
      </nav>
      <menu class="flex-col-max">
        <div class="config flex-col-min">
          <h4>heading</h4>  
          <input type="text" name="" id="title1" placeholder="Some Heading" onkeyup="setHeading(this)">
        </div>
        <div class="config flex-col-min">
          <h4>image</h4>
          <input type="file" accept="image/*" id="" onchange="setPostImage(event)">
            <div class="options">
                <ul class="option-item-wrapper flex-col-min">
                  <li>
                    <button onclick="flipVertical(this)">flip-vertical</button>
                    <button onclick="flipHorizontal(this)">flip-horizontal</button>
                  </li>
                  <li>
                    <h5>Hue</h5>
                    <input type="range" max="360" oninput="setHue(this)">
                  </li>
                </ul>
            </div>
        </div>
        <div class="config flex-col-min">
          <h4>paragraph</h4>
          <textarea id="" cols="30" rows="10" onkeyup="setPara(this)" placeholder="some paragraph is written ..."></textarea>
        </div>
      </menu>
    `;
  }

  if(type == 'code'){
    sidebar.innerHTML = `
      <nav>
        <h3>${type} page</h3>
        <span class="page-no">${page}</span>
      </nav>
      <menu class="flex-col-max">
        <div class="config flex-col-min">
          <h4>heading</h4>  
          <input type="text" name="" id="title1" placeholder="Useful JavaScript *Snippets to" onkeyup="setHeading(this)">
        </div>
        <div class="config flex-col-min">
          <h4>code</h4>
          <textarea id="" cols="30" rows="10" onkeyup="setCode(this)" placeholder="console.log("hello")"></textarea>
          <button class="btn" onclick="startHighLight()"> highlight </button>
        </div>
        <div class="config flex-col-min">
          <h4>paragraph</h4>
          <textarea id="" cols="30" rows="10" onkeyup="setPara(this)" placeholder="some paragraph is written ..."></textarea>
        </div>

      </menu>
    `;
  }  

}
let preNode;
function selectFrame(id, type){
  let node = document.querySelector(`#${id}`);
  selectedElement = {
    node,
    type,
  }
  if(preNode != undefined){
    preNode.style.outline = "none";
  }
  selectedElement.node.style.outline = "3px solid red";
  preNode = selectedElement.node;
}

