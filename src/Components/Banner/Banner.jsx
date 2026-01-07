import "./Banner.css";

const Banner = ({ image, alt }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} />
    </div>
  );
};

export default Banner;
