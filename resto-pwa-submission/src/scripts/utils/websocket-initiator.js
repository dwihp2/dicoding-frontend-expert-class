import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebsocketInitiator = {
  init(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${resto.title} is on cinema!`,
      options: {
        body: resto.overview,
        image: `${CONFIG.BASE_IMAGE_URL + resto.poster_path}`,
      },
    });
  },
};

export default WebsocketInitiator;
