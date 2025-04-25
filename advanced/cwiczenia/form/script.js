const pass = document.getElementById("password");
const passConfirm = document.getElementById("confirm_password");

passConfirm.addEventListener("input", function () {
  if (passConfirm.value === pass.value) {
    passConfirm.style.cssText = "border: 4px solid green"
  } else {
        passConfirm.style.cssText = "border: 4px solid red"
  }
}
);