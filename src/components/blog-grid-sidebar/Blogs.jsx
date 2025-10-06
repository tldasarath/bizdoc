import React, { useState, useMemo } from 'react';
import data from '../../data/blogs.json';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from the blog data
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(data.map(blog => blog.category))];
    return cats;
  }, []);

  // Filter blogs based on search term and selected category
  const filteredBlogs = useMemo(() => {
    return data.filter(blog => {
      const matchesSearch = blog.title?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        blog.content?.toLowerCase().includes(searchTerm?.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Clear search term
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-8">
            <div className="section-head mb-60">
              <h2 className="fz-50">Our Blog</h2>
              <p className="fz-18">Discover the latest insights, trends, and stories</p>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="no-results text-center py-5">
                <i className="ti-search fz-60 mb-20 d-block main-color"></i>
                <h4 className="fz-30 mb-10 main-color">No results found</h4>
                <p className="fz-16">Try different search terms or browse all categories</p>
                {searchTerm && (
                  <button
                    className="btn btn-dark mt-3"
                    onClick={clearSearch}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <div className="md-mb80 blog">
                <div className="row">
                  {filteredBlogs.map((values, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="item mb-50 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                        <div className="img fit-img position-relative overflow-hidden">
                          <img src={values.img} alt={values.title} className="img-fluid hover-scale" />
                          <div className="date-tag bg-dark text-light position-absolute px-3 py-1">
                            {values.date}
                          </div>
                        </div>
                        <div className="cont pt-40">
                          <div className="info sub-title p-color d-flex align-items-center mb-15">
                            <span className="category-badge bg-cream px-3 py-1 rounded">
                              {values.category}
                            </span>
                            {/* <span className="ml-20">
                              <i className="ti-time mr-5"></i>{values.readTime} min read
                            </span> */}
                          </div>
                          <h4  className="fz-30 mb-20">
                            <a className='custom-link' href={values.link}>{values.title}</a>
                          </h4>

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
                  ))}
                </div>
              </div>
            )}

            {filteredBlogs.length > 0 && (
              <div className="pagination-wrapper text-center mt-30">
                <ul className="pagination">
                  <li><a href="#"><i className="ti-arrow-left"></i></a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="ti-arrow-right"></i></a></li>
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="sidebar sticky-sidebar">
              <div className="widget mb-40">
                <h6 className="title-widget mb-20">Search Here</h6>
                <div className="search-box position-relative">
                  <input
                    type="text"
                    name="search-post"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="blog-search-box"
                  />
                  <span className="icon pe-7s-search position-absolute"></span>

                </div>
              </div>



              <div className="widget last-post-thum mb-40">
                <h6 className="title-widget mb-20">Latest Posts</h6>
                {data.slice(0, 3).map((post, index) => (
                  <div className="item d-flex align-items-center mb-20" key={index}>
                    <div className="flex-shrink-0">
                      <div className="img overflow-hidden rounded">
                        <a href={post.link}>
                          <img src={post.img} alt={post.title} className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className="flex-grow-1 ml-15">
                      <h6 className="fz-16">
                        <a href={post.link}>{post.title}</a>
                      </h6>
                      <span className="color-999 fz-12">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;