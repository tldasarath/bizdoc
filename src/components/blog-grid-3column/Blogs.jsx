import React from 'react';
import data from '../../data/services';

function Blogs() {
  return (
    <section className="blog-main blog section-padding">
      <div className="container">
        <div className="row">
          {data.map((values, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex">
              <div className="item mb-50 d-flex flex-column w-100">
                {/* Image */}
                <div className="img fit-img">
                  <img src={values.img} alt={values.title} />
                </div>

                {/* Content */}
                <div className="cont pt-40 d-flex flex-column flex-grow-1">
                  <h5 className="fz-30 flex-grow-1"><a className='custom-link' href={values.link}>{values.title}</a></h5>

                  {/* Button fixed at bottom */}
                  <div className="mt-30">
                    <a
                      href={values.link}
                      className="butn-crev d-flex align-items-center"
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">Read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
