browser.runtime.sendMessage({ greeting: 'hello' }).then((response) => {
  console.log('Received response: ', response);

  let elem = document.createElement('div');
  elem.classList.add('ready');
  elem.textContent = 'ready!';
  document.head.insertAdjacentHTML("beforeend", `<style>
    .ready {
      position: fixed;
      bottom: 0;
      z-index: 99999;
      background-color: red;
      color: #fff;
      width: 100%;
      padding: 10px;
    }
    </style>`
  );
  document.body.prepend(elem);
});

browser.runtime.onMessage.addListener((request) => {
  console.log('Received request: ', request);
});
