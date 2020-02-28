import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "popper.js";

$(document).ready(()=>{
  for(let i = 1; i <= 100; i++){
    const size = Math.floor(Math.random() * 12) + 1;
    const div = $("<div></div>")
      .addClass(`col-${size}`)
      .addClass("text-center")
      .addClass("border")
      .addClass("border-dark")
      .text(`col-${size}`);
    $("#first").append(div);
  }
});