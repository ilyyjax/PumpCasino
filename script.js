function createMoney() {
  const money = document.createElement('div');
  money.classList.add('money');
  money.style.left = Math.random() * 100 + 'vw';
  money.style.animationDuration = (3 + Math.random() * 2) + 's';
  money.textContent = "$1";
  document.body.appendChild(money);

  setTimeout(() => {
    money.remove();
  }, 5000);
}

setInterval(createMoney, 300);
