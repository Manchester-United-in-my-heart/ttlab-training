let labels = document.querySelectorAll('label');
let inputs = document.querySelectorAll('input[type="radio"]');
labels.forEach((label) => {
  if (document.getElementById(label.attributes['for'].value).checked) {
    label.classList.add('bg-white');
    label.classList.add('rounded');
    label.classList.add('text-blue-500');
  }
});

inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    labels.forEach((label) => {
      if (document.getElementById(label.attributes['for'].value).checked) {
        label.classList.add('bg-white');
        label.classList.add('text-blue-500');
        label.classList.add('rounded');
      } else {
        label.classList.remove('bg-white');
        label.classList.remove('text-blue-500');
        label.classList.remove('rounded');
      }
    });
  });
});
