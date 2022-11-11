

function CarouselFadeExample() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZYvC7hF/e-learning-banner-design-template-23-2149113592.jpg" className="w-full" />
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mr-5">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/k5kQnJ0/download.jpg" className="w-full" />
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mr-5 ">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZYvC7hF/e-learning-banner-design-template-23-2149113592.jpg" className="w-full" />
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mr-5">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZYvC7hF/e-learning-banner-design-template-23-2149113592.jpg" className="w-full" />
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mr-5">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
}

export default CarouselFadeExample;