import "./featuredPRoperty.css"
const FeaturedProperties = () => {
    return (
      <div className="fp">
        <div className="fpItem">
          <img
            src="http://res.cloudinary.com/dwkwcqlox/image/upload/v1721140282/wesuryl7yywfc0fwtdue.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hotel Sun Plaza</span>
          <span className="fpCity">Delhi</span>
          <span className="fpPrice">Starting from ₹1000</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="http://res.cloudinary.com/dwkwcqlox/image/upload/v1721143472/jvrwgsn9yymbve9p9r6c.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hotel Isra International, BKC</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from ₹1000</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="http://res.cloudinary.com/dwkwcqlox/image/upload/v1721145651/b5widtcxhq2q2tbfqf74.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Luxmi Hotel</span>
          <span className="fpCity">Prayagraj</span>
          <span className="fpPrice">Starting from ₹1000</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="http://res.cloudinary.com/dwkwcqlox/image/upload/v1721142693/tfgcr8doifwrb7horzyf.jpg"
            className="fpImg"
          />
          <span className="fpName">Hotel Royal Sky </span>
          <span className="fpCity">Delhi</span>
          <span className="fpPrice">Starting from ₹1000</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedProperties;