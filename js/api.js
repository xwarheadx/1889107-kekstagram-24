const getData = (onSuccess, onFail) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error('Не удалось загрузить данные с сервера');
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};

export {getData, sendData};
