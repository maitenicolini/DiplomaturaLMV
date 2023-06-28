import '../styles/home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const HomePage = (props) => {

    const settings = {
        arrows: false,
        Infinity: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true
    }
    return (
        <div className="galeria">
            <Slider {...settings}>
                <img src="/images/img01.jpg" alt="" />
                <img src="/images/img02.jpg" alt="" />
                <img src="/images/img03.jpg" alt="" />
                <img src="/images/img04.jpg" alt="" />
                <img src="/images/img05.jpg" alt="" />
            </Slider>
        </div>
    )
}

export default HomePage;