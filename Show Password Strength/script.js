let pass = document.querySelector(".password");
let msg = document.querySelectorAll(".tagline");
let str = document.querySelectorAll(".strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg[0].style.display = "block";
  } else {
    msg[0].style.display = "none";
  }

  if (pass.value.length < 4) {
    str[0].innerHTML = "Weak";
    str[0].style.color = "red";
    pass.style.color = "red";
    pass.style.border = "2px solid red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str[0].innerHTML = "Medium";
    str[0].style.color = "orange";
    pass.style.color = "orange";
    pass.style.border = "2px solid orange";
  } else if (pass.value.length >= 8) {
    str[0].innerHTML = "Strong";
    str[0].style.color = "lightgreen";
    pass.style.color = "lightgreen";
    pass.style.border = "2px solid lightgreen";
  }
});
