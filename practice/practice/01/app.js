// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.querySelector("h1");

const superEventHandler = {
  handleonMouseleave() {
    text.style.color = colors[0]
    text.innerText = "The Mouse is here!";
  },

  handleonMouseOut() {
    text.style.color = colors[1]
    text.innerText = "The Mouse is gone";
  },

  handleonContextMenu() {
    text.style.color = colors[4]
    text.innerText = "That was right click";
  },
  
  handlResize() {
    text.style.color = colors[2]
    text.innerText = "You just resize";
  }
};

text.addEventListener("mouseenter", superEventHandler.handleonMouseleave);
text.addEventListener("mouseout", superEventHandler.handleonMouseOut);
window.addEventListener("contextmenu", superEventHandler.handleonContextMenu);
window.addEventListener("resize", superEventHandler.handlResize);
