class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li><span>Copyright © 2021 - Culinarea</span></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-custom', CustomFooter);
