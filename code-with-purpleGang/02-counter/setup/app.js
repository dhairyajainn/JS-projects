//set initial count

let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//we get a node list. we can run for each loop on nodelist

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList); we get list of classes
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
      value.style.color = "maroon";
    } else if (btnClass.contains("reset")) {
      count = 0;
      value.style.color = "black";
    } else if (btnClass.contains("increase")) {
      count++;
      value.style.color = "green";
    }
    value.textContent = count;
  });
});
