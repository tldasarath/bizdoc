import React from 'react';
import data from '../../data/blogs.json'
function Blog() {
  return (
    <section className="blog style2 mb-80">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Blogs</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">Blogs.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/blogs"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
       <div className="row">
  {data.slice(0, 3).map((values, index) => (
    <div className="col-lg-4" key={index}>
      <div className="item md-mb50">
        {/* Info section (if needed) */}
        {/* <div className="info sub-title p-color d-flex align-items-center mb-20">
          <div>
            <a href="/blog-grid-sidebar">By : Admin</a>
          </div>
          <div className="ml-30">
            <a href="/blog-grid-sidebar">August 14, 2023</a>
          </div>
        </div> */}

        <div className="img fit-img">
          <img src={values.img} alt={values.title || "blog image"} />
        </div>

        <div className="cont pt-30">
          <h5><a className='custom-link' href={values.link}>{values.title}</a></h5>
          <a
            href={values.link}
            className="butn-crev d-flex align-items-center mt-30"
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
  ))}
</div>

      </div>
    </section>
  );
}

export default Blog;
