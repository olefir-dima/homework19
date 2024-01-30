const numberOfButtons = 10;

const createBtn = (numberOfButtons) => {
  const btnArr = [];
  for (let i = 1; i <= numberOfButtons; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btnArr.push(btn);
    btns.appendChild(btn);
  }
  return btnArr;
};

const btns = document.querySelector(".btnContainer");
const btnArray = createBtn(numberOfButtons);

const evenPromiseArrey = [];
const oddPromiseArrey = [];

btnArray.forEach((btn) => {
  const promise = new Promise((resolve) => {
    btn.onclick = () => {
      btn.style.boxShadow = "0px 8px 8px #888888";
      resolve();
    };
  });
  if (+btn.textContent % 2 === 0) {
    evenPromiseArrey.push(promise);
  } else {
    oddPromiseArrey.push(promise);
  }
});

const evenPromises = Promise.all(evenPromiseArrey).then(() => {
  alert("All even buttons have already been pressed");
});
const oddPromises = Promise.all(oddPromiseArrey).then(() => {
  alert("All odd buttons have already been pressed");
});

Promise.all([evenPromises, oddPromises]).then(() => {
  alert("All buttons have already been pressed");
});
