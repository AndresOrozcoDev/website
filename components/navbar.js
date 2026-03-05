class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="/index.html">Home</a>
        <a href="/pages/company/">Company</a>
        <a href="/pages/services/">Services</a>
        <a href="/pages/contact/">Contact Us</a>
      </nav>
    `
  }
}

customElements.define('app-navbar', AppNavbar)