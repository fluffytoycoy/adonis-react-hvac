import React, {Component} from "react";
import Slider from "react-slick";
import Loading from '../Utils/Loading/Loading';
import StarRatings from 'react-star-ratings';

class ReviewSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesLoaded: false,
      reviews: ''
    };
  };

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        reviews: this.getReviews()
      })
    }, 2000)
  }

  getReviews() {
  return [{
      "author_name": "Mike A",
      "author_url": "https://www.google.com/maps/contrib/116511538000071290202/reviews",
      "language": "en",
      "profile_photo_url": "https://lh4.googleusercontent.com/-j7G3SrbmuKE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcjPhzFqD23QyPGO58aPQj1qbeA8A/s128-c0x00000000-cc-rp-mo/photo.jpg",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "Great service and reasonable prices. Scheduling is easy and employees are friendly and knowledgeable. Fully recommend!",
      "time": 1562744564
    },
    {
      "author_name": "Teri D McManus",
      "author_url": "https://www.google.com/maps/contrib/109535215913955972349/reviews",
      "language": "en",
      "profile_photo_url": "https://lh5.googleusercontent.com/-I2oEPsjqeOI/AAAAAAAAAAI/AAAAAAAANpw/ySiSF6zCRa4/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
      "rating": 5,
      "relative_time_description": "2 weeks ago",
      "text": "Excellent customer service, friendly knowledgeable staff & 24 hour service.  They also have a line of grills, supplies, spices & rubs, smokers, outdoor living, kitchens & furniture.  Community-based family business.",
      "time": 1562252604
    },
    {
      "author_name": "A Amazing",
      "author_url": "https://www.google.com/maps/contrib/110945720407640765980/reviews",
      "language": "en",
      "profile_photo_url": "https://lh4.googleusercontent.com/-FnmZItP6ZMQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdJYwLR4apSY3wP-9Wm26OW6XxwQw/s128-c0x00000000-cc-rp-mo/photo.jpg",
      "rating": 5,
      "relative_time_description": "a week ago",
      "text": "Quality products! Friendly employees! Great community involvement!",
      "time": 1562939874
    },
    {
      "author_name": "jordan Meeker",
      "author_url": "https://www.google.com/maps/contrib/111373712465841621887/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/-OpYf2QZJ5ok/AAAAAAAAAAI/AAAAAAAAAfY/bdznFVabJN8/s128-c0x00000000-cc-rp-mo/photo.jpg",
      "rating": 5,
      "relative_time_description": "3 weeks ago",
      "text": "Great selection of BBQ equipment.",
      "time": 1561819458
    },
    {
      "author_name": "Dalton Moncivais",
      "author_url": "https://www.google.com/maps/contrib/116750591787242254735/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/-xJyuqRhxL-Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reHpxcXvoWS4YIe_nUQWx5KC-7b0g/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
      "rating": 4,
      "relative_time_description": "2 months ago",
      "text": "Fast service & friendly staff!",
      "time": 1557744880
    }
  ]
}

  render() {
    var settings = {
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000
    };

    return (
        <Slider {...settings}>
        {this.state.reviews ? this.state.reviews.map((review, index)=>{
          return <Review key={index} review={review}/>
        }): <Loading/>}
        </Slider>
    );
  }
}

function Review(props){
  return(
    <div className="review-slide">
        <div className="review">
          <div className="reviewer">
            <img alt="reviewer photo"src={props.review.profile_photo_url} className="img"/>
            <p>{props.review.author_name}</p>
          </div>
          <div className="info">
            <div className="stars">
              <StarRatings
              rating={props.review.rating}
              starRatedColor="#00c0ff"
              numberOfStars={5}
              starDimension='100%'
              />
            </div>
            <p>
              {props.review.text}
              </p>
              <p>{props.review.relative_time_description}</p>
            </div>
          </div>
      </div>)
}

export default ReviewSlider;
