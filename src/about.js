export function createAboutUs() {
  let aboutWrapper = document.createElement("div");
  let aboutTitle = document.createElement("h2");
  let aboutContent = document.createElement("p");
  aboutWrapper.classList.add("wrapper");
  aboutTitle.textContent = "Pizza Place";
  aboutTitle.style.textAlign = "center";
  aboutTitle.style.padding = "15px 0 15px 0";
  aboutContent.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae?";
  aboutWrapper.appendChild(aboutTitle);
  aboutWrapper.appendChild(aboutContent);
  container.appendChild(aboutWrapper);
}
