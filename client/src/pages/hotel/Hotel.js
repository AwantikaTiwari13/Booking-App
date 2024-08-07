import "./hotel.css";
import Navbar from "../../components/Navbar/navbar"
import Header from "../../components/Header/header"
import MailList from "../../components/mailList/mailList";
// import Footer from "../../components/footer/Footer";
import Reserve from "../../components/Reserve/Reserve.js";
import { useLocation ,useNavigate} from 'react-router-dom';
import useFetch from "../../hooks/useFetch.js"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState , useContext} from "react";
import { SearchContext } from "../../context/SearchContext";
import Footer from "../../components/Footer/footer";
import { AuthContext } from "../../context/AuthContext.js";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openReserve, setOpenReserve] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const navigate = useNavigate();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
 
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const handleClick = () => {
    if (user) {
      setOpenReserve(true);
    } else {
      navigate("/login");
    }
  };
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "Loading":
      ( <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over{data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                  <b>₹{days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer></Footer>
      </div>)}
      {openReserve && <Reserve setOpen={setOpenReserve} hotelId={id}/>}
    </div>
  );
};

export default Hotel;