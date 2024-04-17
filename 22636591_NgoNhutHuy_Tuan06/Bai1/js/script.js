const table = document.getElementById("table");
const form = document.getElementById("form");
const addBtn = document.getElementById("addBtn");

const mssvError = document.getElementById("mssv-error");
const tenSvError = document.getElementById("hoten-error");
const lopSvError = document.getElementById("lop-error");

const inputs = document.querySelectorAll("#form input");

const regexMaSv = /^(22)\d{5}(1)$/;
const regexTenSv = /^([A-Z][a-z\s]*)+$/;
const regexLopSv = /^(DH).+$/;

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${value.maSv}</td>
      <td>${value.tenSv}</td>
      <td>${value.lopSv}</td>
    `;

    table.appendChild(tr);
  }
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.id === "mssv") {
      if (!regexMaSv.test(input.value)) {
        mssvError.innerHTML = "Mã sinh viên không hợp lệ";
      } else {
        mssvError.innerHTML = "";
      }
    }

    if (input.id === "hoten") {
      if (!regexTenSv.test(input.value)) {
        tenSvError.innerHTML = "Tên sinh viên không hợp lệ";
      } else {
        tenSvError.innerHTML = "";
      }
    }

    if (input.id === "lop") {
      if (!regexLopSv.test(input.value)) {
        lopSvError.innerHTML = "Lớp sinh viên không hợp lệ";
      } else {
        lopSvError.innerHTML = "";
      }
    }
  });
});

function validateData(maSv, tenSv, lopSv) {
  if (!regexMaSv.test(maSv)) {
    mssvError.innerHTML = "Mã sinh viên không hợp lệ";
    return false;
  }

  if (!regexTenSv.test(tenSv)) {
    tenSvError.innerHTML = "Tên sinh viên không hợp lệ";
    return false;
  }

  if (!regexLopSv.test(lopSv)) {
    lopSvError.innerHTML = "Lớp sinh viên không hợp lệ";
    return false;
  }

  mssvError.innerHTML = "";
  tenSvError.innerHTML = "";
  lopSvError.innerHTML = "";

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const maSv = document.getElementById("mssv").value;
  const tenSv = document.getElementById("hoten").value;
  const lopSv = document.getElementById("lop").value;

  if (!validateData(maSv, tenSv, lopSv)) {
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${maSv}</td>
    <td>${tenSv}</td>
    <td>${lopSv}</td>
  `;

  table.appendChild(tr);

  localStorage.setItem(
    maSv,
    JSON.stringify({
      maSv: maSv,
      tenSv: tenSv,
      lopSv: lopSv,
    })
  );
});
