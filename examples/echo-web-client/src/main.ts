import { EchoRequest, EchoReverseRequest, EchoReverseResponse } from './echo';
import './style.css';
import Centrifuge from 'centrifuge/build/protobuf';

import { token } from './token';

const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket', {
  token,
  protocol: 'protobuf',
});

centrifuge
  .on('connected', async function () {
    const app = document.querySelector('#app');
    if (app) {
      app.innerHTML = `
        <form>
          <input id="input" value="Hello!">
          <button>Send</button>
        </form>
      `;
    }

    document
      .querySelector('form')
      ?.addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = EchoReverseRequest.encode({
          message:
            (document.querySelector('#input') as HTMLInputElement).value ?? '',
        }).finish();
        const [res] = await Promise.all([
          centrifuge.rpc('EchoService:EchoReverse', data),
        ]);
        alert(EchoReverseResponse.decode(res.data).message);
      });
  })
  .connect();
