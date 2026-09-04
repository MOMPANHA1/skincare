import React from 'react'
import '../../../../src/assets/css/Material.css';
import pc1 from '../../../assets/img/s8.webp'
import pc2 from '../../../assets/img/s9.webp'
import pc3 from '../../../assets/img/s10.jpg'
import Blog from './Blog';
const deshboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="carousel slide" id="carousel-554496" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-slide-to="0" data-target="#carousel-554496"></li>
                <li data-slide-to="1" data-target="#carousel-554496"></li>
                <li data-slide-to="2" data-target="#carousel-554496" className="active"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap First"
                    src={pc1}
                  />
                  <div className="carousel-caption">
                    <h4>Restaurant View</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap Second"
                    src={pc2}
                  />
                  <div className="carousel-caption">
                    <h4>Printing and Typesetting</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src={pc3}
                  />
                  <div className="carousel-caption">
                    <h4>Printer Took</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel-554496"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-554496"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Blog/>
    </>
  );
};

export default deshboard