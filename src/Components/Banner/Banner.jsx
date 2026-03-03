import "./Banner.css";

const Banner = ({ image, alt }) => {
  return (
    <section className="banner-wrapper">
      <div className="banner-container">
        <img src={image} alt={alt} className="banner-image" />
      </div>
    </section>
  );
};

export default Banner;