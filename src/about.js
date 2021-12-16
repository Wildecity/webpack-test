export function createAboutUs() {
  let aboutWrapper = document.createElement("div");
  let aboutTitle = document.createElement("h2");
  let aboutContent = document.createElement("p");
  let aboutMap = document.createElement("div");
  aboutWrapper.classList.add("wrapper");
  aboutTitle.textContent = "Pizza Place";
  aboutTitle.style.textAlign = "center";
  aboutTitle.style.padding = "15px 0 15px 0";
  aboutContent.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae?";
  aboutMap.id = "map";
  aboutMap.innerHTML =
    '<div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=dissapointment%20island&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">how to add map in website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';
  aboutWrapper.appendChild(aboutTitle);
  aboutWrapper.appendChild(aboutContent);
  aboutWrapper.appendChild(aboutMap);
  container.appendChild(aboutWrapper);
}
