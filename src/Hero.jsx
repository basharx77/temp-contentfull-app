import heroImg from './assets/hero.svg';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            earum rerum labore cum ut nulla ipsum deleniti similique, impedit
            quam facilis. Maxime repudiandae non a molestiae necessitatibus quo
            eum quos!
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
