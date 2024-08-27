document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement.parentElement;

    accordionItem.classList.toggle('active');
  });
});
