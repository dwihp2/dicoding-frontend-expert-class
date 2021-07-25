class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <div class="menu-hp">
            <div>
            <a href="/" class="logo-font">
                CULINAREA
            </a>
            </div>
            <div class="menu-container">
            <button aria-label="button menu dropdown on mobile" class="menu" type="button">
                <span class="fa fa-caret-down"></span>
            </button>
            </div>
        </div>

        <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Liked Restaurants</a></li>
            <li class="nav-item">
            <a href="https://github.com/dwihp2" target="_blank" rel="noopener noreferrer"
                >AbouT Us</a
            >
            </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
