import { aboutUslogo, forumsLogo, greyPokemonlogo, pokemonlogo, scarletLogo, shopLogo } from "../../assets/images";
import "./pokemon-topnav.css"

export default function Index() {
    var blurImage = (ele) => {
        var img1 = document.getElementById("img1")
        var img2 = document.getElementById("img2")
        var img3 = document.getElementById("img3")
        ele.target.id == "img1" ? (img2.parentNode.classList.toggle("blur-image"), img3.parentNode.classList.toggle("blur-image")) : null;
        ele.target.id == "img2" ? (img1.parentNode.classList.toggle("blur-image"), img3.parentNode.classList.toggle("blur-image")) : null;
        ele.target.id == "img3" ? (img1.parentNode.classList.toggle("blur-image"), img2.parentNode.classList.toggle("blur-image")) : null;
    }
    var stopimageblur = (ele) => {
        var img1 = document.getElementById("img1")
        var img2 = document.getElementById("img2")
        var img3 = document.getElementById("img3")
        ele.target.id == "img1" ? (img2.parentNode.classList.toggle("blur-image"), img3.parentNode.classList.toggle("blur-image")) : null;
        ele.target.id == "img2" ? (img1.parentNode.classList.toggle("blur-image"), img3.parentNode.classList.toggle("blur-image")) : null;
        ele.target.id == "img3" ? (img1.parentNode.classList.toggle("blur-image"), img2.parentNode.classList.toggle("blur-image")) : null;

    }
    return (
        <div className="topnavdiv">
            <div className="shadow-right"><img className="image-div" src={pokemonlogo} alt="" /></div>
            <div className="border-right heartbeat"><img className="image-div" src={shopLogo} alt="" /></div>
            <div className="border-right heartbeat"><img className="image-div" src={aboutUslogo} alt="" /></div>
            <div className="fourth-div img-attention">
                <div>
                    <img src={greyPokemonlogo} onMouseOver={blurImage} onMouseOut={stopimageblur} alt="image-div" id="img1" />
                </div>
                <div>
                    <img src={scarletLogo} onMouseOver={blurImage} onMouseOut={stopimageblur} alt="image-div blur-image" id="img2" />
                </div>
                <div>
                    <img src={forumsLogo} onMouseOver={blurImage} onMouseOut={stopimageblur} alt="image-div" id="img3" />
                </div>
            </div>
        </div>)
}