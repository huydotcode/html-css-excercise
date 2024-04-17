const muaVaoInput = document.getElementById("mua-vao");
const banRaInput = document.getElementById("ban-ra");
const stateButton = document.getElementById("state-btn");

const selectLoaiXe = document.getElementById("select-loai-xe");
const imageCar = document.getElementById("image-car");
const priceCar = document.getElementById("price-car");
const updateButton = document.getElementById("update-btn");
const vangRadio = document.getElementById("vang");
const usdRadio = document.getElementById("usd");

const vangMuaVao = document.getElementById("vang-mua-vao");
const vangBanRa = document.getElementById("vang-ban-ra");
const usdMuaVao = document.getElementById("usd-mua-vao");
const usdBanRa = document.getElementById("usd-ban-ra");

// Error
const muaVaoError = document.getElementById("mua-vao-error");
const banRaError = document.getElementById("ban-ra-error");

console.log(muaVaoError);
console.log(banRaError);

// 1) Khi trang load lên thì con trỏ nhập liệu trong trường "Mua vào" và nút "State" ở chế độ không cho phép chọn
document.addEventListener("DOMContentLoaded", function () {
  muaVaoInput.focus();
  stateButton.disabled = true;
});

// 2) Khi di chuyển con trỏ ra khỏi trường "Mua vào" nếu như giá trị trường này là số và không rỗng thì nút State sáng lên
muaVaoInput.addEventListener("mouseleave", function () {
  stateButton.disabled =
    isNaN(parseFloat(muaVaoInput.value)) && muaVaoInput.value === "";
});

muaVaoInput.addEventListener("blur", function (e) {
  const value = e.target.value;
  if (isNaN(parseFloat(value)) || value === "") {
    muaVaoError.textContent = "Vui lòng nhập số";
  } else {
    muaVaoError.textContent = "";
  }
});

banRaInput.addEventListener("blur", function (e) {
  const value = e.target.value;
  if (isNaN(parseFloat(value)) || value === "") {
    banRaError.textContent = "Vui lòng nhập số";
  } else {
    banRaError.textContent = "";
  }
});

// 3) Khi Click vào mục chọn loại xe thì sẽ thể hiện hình và giá cuả loại đó

selectLoaiXe.addEventListener("change", function () {
  const selectedCar = selectLoaiXe.value;
  const image = selectedCar.split(";")[0];
  const price = selectedCar.split(";")[1];

  imageCar.src = image;
  priceCar.textContent = price;
});

// 4) Cập nhật giá thị trường
updateButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (vangRadio.checked) {
    vangMuaVao.innerText = muaVaoInput.value;
    vangBanRa.innerText = banRaInput.value;
  } else if (usdRadio.checked) {
    usdMuaVao.innerText = muaVaoInput.value;
    usdBanRa.innerText = banRaInput.value;
  }
});
