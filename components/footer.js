// Footer Component
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)