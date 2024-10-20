class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });     
        shadow.append(this.build(), this.styles()); 
    }

    // Método de estruturação do HTML
    build(){
        const componentRoot = document.createElement("div");
        // Setando o atributo "class"
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        // Setando o atributo "class"
        cardLeft.setAttribute("class", "card__left");

        // Criando os elementos filhos do "cardLeft"
        const spanAuthor = document.createElement("span");
        spanAuthor.textContent = "By "+ (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");

        linkTitle.href =  this.getAttribute("link") || "#";
        const textNews = document.createElement("p");
        textNews.textContent = this.getAttribute("content"); 

        cardLeft.append(spanAuthor, linkTitle, textNews);

        const cardRight = document.createElement("div");
        // Setando o atributo "class"
        cardRight.setAttribute("class", "card__right");

        // Criando os elementos filhos do "cardRight"
        const imgNews = document.createElement("img");
        imgNews.src = this.getAttribute("photo") || "assets/notFound.png";
        imgNews.alt = this.getAttribute("photoAlt") || "Foto da notícia";
        cardRight.appendChild(imgNews);

        // Adicionando os cards left e right ao card principal
        componentRoot.append(cardLeft, cardRight);

        return componentRoot;
    }

    // Método de estilização do component
    styles(){
        const styles = document.createElement("style")

        styles.textContent = `
            .card{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 720px;
                -webkit-box-shadow: 10px 10px 28px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 28px 0px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
            }
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                gap: 5px;
            }

            .card__left span{
                font-weight: 300;
            }

            .card__left a{
                font-size: 25px;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }

            .card__left p{
                color: rgb(70, 70, 70);
            }

            .card__right img{
                width: 200px;
                height:100%;
            }
        `

        return styles;
    }
}

// Criando o componente customizado (Nome, Classe) - O nome do componente HTML tem que ter '-'
customElements.define('card-news', CardNews)