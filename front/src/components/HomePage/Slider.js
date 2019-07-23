import React, {Component} from "react";
import Slider from "react-slick";

class ReviewSlider extends Component {
  render() {
    var settings = {
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000

    };
    return (
        <Slider {...settings}>
          <div className="review-slide">
            <div className="review">
              <div className="reviewer">
                <div className="img"></div>
                <p>name</p>
              </div>
              <div className="info">
                <div className="stars">
                  stars
                </div>
                <p>
                  excellent customer service staff and
                  twenty four hour service they also have a
                  line in grill
                  </p>
                  <p>date</p>
                </div>
              </div>
          </div>
          <div className="review-slide">
            <div className="review">
              <div className="reviewer">
                <div className="img"></div>
                <p>name</p>
              </div>
              <div className="info">
                <div className="stars">
                  stars
                </div>
                <p>
                  excellent customer service staff and
                  twenty four hour service they also have a
                  line in grill
                  </p>
                  <p>date</p>
                </div>
              </div>
          </div>
          <div className="review-slide">
            <div className="review">
              <div className="reviewer">
                <div className="img"></div>
                <p>name</p>
              </div>
              <div className="info">
                <div className="stars">
                  stars
                </div>
                <p>
                  excellent customer service staff and
                  twenty four hour service they also have a
                  line in grill
                  </p>
                  <p>date</p>
                </div>
              </div>
          </div>

        </Slider>
    );
  }
}

export default ReviewSlider;
