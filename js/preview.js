const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileSelector = document.querySelector('#upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');

fileSelector.addEventListener('change', () => {
  const file = fileSelector.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});

