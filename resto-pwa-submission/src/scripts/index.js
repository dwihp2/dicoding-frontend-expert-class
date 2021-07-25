import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import swRegister from '../scripts/utils/sw-register';
import App from './views/app';
import {} from '../scripts/views/templates/customHero';
import {} from '../scripts/views/templates/customFooter';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.content').scrollIntoView();
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
  // WebsocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
