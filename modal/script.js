const openModalBtns = document.getElementsByClassName('openModalBtn');
const modals = document.getElementsByClassName('modal');
const closeBtns = document.getElementsByClassName('close');

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function() {
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
}

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function() {
    closeModal();
  });
}

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

function closeModal() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('show');
  }
}


