function CreaDoc(Tag, Parents, Attri, Attrivalue) {
  const element = document.createElement(Tag);
  Parents.appendChild(element);
  if (Attri !== undefined) {
    element.setAttribute(Attri, Attrivalue);
  }
}

function CommonStyle(Tag, Width, Height) {
  Tag.style.width = Width;
  Tag.style.height = Height;
  Tag.style.display = "flex";
  Tag.style.justifyContent = "center";
  Tag.style.alignItems = "center";
  Tag.style.border = "1px solid blue"
}

CommonStyle(document.body, "100vw", "100vh");

CreaDoc("div", document.body, "id", "root");
const root = document.getElementById("root");
CommonStyle(root, "100%", "100%")

CreaDoc("div", root, "id", "Pick");
const Pick = document.getElementById("Pick");
Pick.style.cssText = "display:flex; flex-direction:column;";
CommonStyle(Pick, "50%", "70%");

CreaDoc("div", Pick);
CommonStyle(Pick.children[0], "100%", "80%")

CreaDoc("div", Pick);
CommonStyle(Pick.children[1], "100%", "20%");

CreaDoc("div", Pick.children[1]);
CommonStyle(Pick.children[1].children[0], "50%", "100%");
Pick.children[1].children[0].textContent = "Pick";
Pick.children[1].children[0].style.display = "none";

CreaDoc("div", Pick.children[1]);
CommonStyle(Pick.children[1].children[1], "100%", "100%");
Pick.children[1].children[1].textContent = "Start";


CreaDoc("div", root, "id", "inventory");
const inventory = document.getElementById("inventory");
inventory.style.flexWrap="wrap";
CommonStyle(inventory, "50%", "70%")



