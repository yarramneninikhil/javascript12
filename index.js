const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#number").value,
  };
  let val = document.querySelector("#email").value;
  localStorage.setItem(`${val}`, JSON.stringify(formData));
  let res = JSON.parse(localStorage.getItem(val));
  const dis = document.querySelector(".display");
  const el = document.createElement("li");
  el.innerText = res.email;
  const el1 = document.createElement("li");
  el1.innerText = `- ${res.name}-${res.phone}`;
  el.style.marginBottom = "5px";
  const del = document.createElement("button");
  del.innerText = "Delete";
  del.style.padding = "5px 10px";
  del.style.backgroundColor = "green";
  del.style.border = "1px solid green";
  del.style.borderRadius = "20px";
  del.style.marginLeft = "20px";
  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.style.padding = "5px 10px";
  edit.style.backgroundColor = "green";
  edit.style.border = "1px solid green";
  edit.style.borderRadius = "20px";
  edit.style.marginLeft = "20px";
  el1.append(del);
  el1.append(edit);
  el1.style.display = "inline-block";
  el.append(el1);
  dis.append(el);
});
const rem = document.querySelector(".display");
rem.addEventListener("click", (e) => {
  let val = e.target;
  if (val.innerText === "Delete") {
    let temp = val.parentElement.parentElement;
    localStorage.removeItem(temp.firstChild.textContent);
    temp.remove();
  } else if (val.innerText === "Edit") {
    let temp = val.parentElement.parentElement;
    const data = JSON.parse(localStorage.getItem(temp.firstChild.textContent));
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#number");
    nameInput.value = data.name;
    emailInput.value = data.email;
    phoneInput.value = data.phone;
    localStorage.removeItem(temp.firstChild.textContent);
    temp.remove();
  }
});
