import './Reviews.css';
import reviewer1 from '../../assets/13.png';
import reviewer2 from '../../assets/21.png';

export default function Reviews() {
  const reviewArr = [
    {
      src: reviewer1,
      name: 'Maria Martinez',
      review:
        "I absolutely found the meals easy to make even though I haven't not done this for long",
    },

    {
      src: reviewer2,
      name: 'Ngani Faith',
      review:
        'Found it easy to use and I can modify it to suit my specific needs and the recipes re',
    },
  ];
  return (
    <div className="reviews" id="reviews">
      {reviewArr.map((review) => {
        return (
          <div className="review-map">
            <div className="review-img">
              <img src={review.src} alt="" />
            </div>
            <div className="review-txt"></div>
          </div>
        );
      })}
    </div>
  );
}
