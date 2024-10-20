class DynamicTitle extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Criando o título
        const componentRoot = document.createElement('h1');

        // Pegando atributos "props"
        componentRoot.textContent = this.getAttribute('value')

        // Criando o estilo
        const style = document.createElement('style');
        style.textContent = `h1 { font-family: 'Courier New', Courier, monospace; width: 100% }`
    
        // Adicionando o componente a shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}

// O nome do componente HTML tem que ter '-'
customElements.define('dynamic-title', DynamicTitle)