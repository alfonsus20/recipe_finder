class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#search-bar").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        input{
            border: 1px solid black;
            width:20rem;
            height: 2.5rem;
            font-size:1rem;
            border-radius: 5px;
        }
        input:focus{
            border: 2px solid #feb201;
            outline:none;
        }
        button{
            height:auto;
            padding: 0.9rem;
            font-size:1rem;
            outline:none;
            background-color: #feb201;
            color: white;
            font-family: Roboto-Regular;
            border-radius: 5px;
            border:none;
        }
        .gg-search {
            box-sizing: border-box;
            display: block;
            transform: scale(var(--ggs,1));
            width:1rem;
            height:1rem;
            border: 2px solid white;
            border-radius: 100%;
            margin-left: -4px;
            margin-top: -4px
        }
        .gg-search::after {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            border-radius: 3px;
            width: 0.125rem;
            height: 0.5rem;
            background: white;
            transform: rotate(-45deg);
            top: 10px;
            left: 12px;
        }

        @media screen and (max-width: 545px){
            input{
                width:auto;
            }
          }
    </style>
    <div>
        <input id="search-bar" type="search" placeholder="Enter the meal's name">
        <button id="search-button"><i class="gg-search"></i></button>
    </div>`;
    this.shadowDOM.querySelector("#search-button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
