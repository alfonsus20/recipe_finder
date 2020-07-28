import pic from "../../assets/309.jpg";

class LandingPage extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
            .title-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .title {
                font-family: "Montserrat";
                font-size: 2.6rem;
            }
            
            .title-description {
                font-family: "Roboto";
                font-size: 1.5rem;
                margin-top: 10px;
                margin-bottom: 18px;
            }
            
            #title-image {
                margin: auto;
                width: 78%;
                height: auto;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
            
            .find-recipe{
                width: 30%;
                color: white;
                background-color: #feb201;
            }
            
            .wave {
                position: absolute;
                bottom: 0;
            }

            .navbar-nav {
                font-size: 1.1rem;
                font-family: "Roboto";
            }
              
            .navbar-brand {
                font-family: "Montserrat";
                font-size: 1.4rem;
            }
              
            .nav-item {
                margin: 15px 10px 15px 10px;
            }
              
            .nav-item .nav-link {
                color: black !important;
                font-family: "Roboto-Regular";
            }
              
            .nav-item .nav-link:hover {
                color: #feb201 !important;
            }

        @media screen and (max-width:768px){
            .wave{
                position: relative;
            }
            .title{
                font-size: 2.1rem;
            }
            .title-description{
                font-size: 1.2rem;
            }
            .find-recipe{
                position: relative;
                left:50%;
                transform: translateX(-50%);
            }

            .navbar-brand {
                font-family: "Montserrat";
                font-size: 1rem;
            }
        }
        </style>
        <nav class="navbar navbar-expand-lg navbar-light container-fluid">
            <a class="navbar-brand" href="#">Recipe Finder</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#recommendation">Recommendation</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#search-menu">Find Recipe</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 title-container">
                    <div class="title">Recipe Finder</div>
                    <div class="title-description">
                        Find out many food recipes for your daily meals
                    </div>
                    <a href="#search-menu"><button class="btn find-recipe">Find Recipe</button></a>
                </div>
                <div class="col-lg-6 col-md-6 title-image-description">
                    <img id="title-image" src="${pic}" alt="kitchen-pic">
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 180" class="wave">
            <path fill="#FEB201" fill-opacity="1"
                d="M0,32L80,48C160,64,320,96,480,101.3C640,107,800,85,960,112C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
            </path>
        </svg>`;
    }
}

customElements.define("landing-page", LandingPage);
