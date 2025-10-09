import React, { useState, useMemo } from 'react';
import data from '../../data/blogs.json';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

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

  // Get current blogs for pagination
  const currentBlogs = useMemo(() => {
    const reversedBlogs = [...filteredBlogs].reverse();
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    return reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  }, [filteredBlogs, currentPage, blogsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Clear search term and reset to page 1
  const clearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Reset to page 1 when search term or category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // In the middle
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
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
                <i className="ti-search fz-60 mb-20 d-block golden-text"></i>
                <h4 className="fz-30 mb-10 golden-text">No results found</h4>
                <p className="fz-16">Try different search terms or browse all categories</p>
                {searchTerm && (
                  <button
                    className="btn golden-btn mt-3"
                    onClick={clearSearch}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="md-mb80 blog">
                  <div className="row">
                    {currentBlogs.map((values, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="item mb-50 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                          <div className="img fit-img position-relative overflow-hidden">
                            <img src={values.img} alt={values.title} className="img-fluid hover-scale" />
                            <div className="date-tag bg-dark text-light position-absolute px-3 py-1">
                              {values.date}
                            </div>
                          </div>
                          <div className="cont pt-40">
                            
                            <h4 className="fz-30 mb-20">
                              <a className='custom-link golden-link' href={values.link}>{values.title}</a>
                            </h4>

                            <a
                              href={values.link}
                              className="butn-crev d-flex align-items-center golden-btn"
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination-container mt-50">
                    <nav aria-label="Blog pagination">
                      <ul className="pagination justify-content-center">
                        {/* Previous Button */}
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button
                            className="page-link pagination-btn"
                            onClick={prevPage}
                            disabled={currentPage === 1}
                          >
                            <i className="ti-arrow-left mr-2"></i>
                            Previous
                          </button>
                        </li>

                        {/* Page Numbers */}
                        {getPageNumbers().map((pageNumber, index) => (
                          <li
                            key={index}
                            className={`page-item ${
                              pageNumber === currentPage ? 'active' : ''
                            } ${pageNumber === '...' ? 'disabled' : ''}`}
                          >
                            {pageNumber === '...' ? (
                              <span className="page-link pagination-ellipsis">...</span>
                            ) : (
                              <button
                                className="page-link pagination-btn"
                                onClick={() => paginate(pageNumber)}
                              >
                                {pageNumber}
                              </button>
                            )}
                          </li>
                        ))}

                        {/* Next Button */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button
                            className="page-link pagination-btn"
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                          >
                            Next
                            <i className="ti-arrow-right ml-2"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {/* Page Info */}
                    <div className="text-center mt-3">
                      <p className="fz-14 golden-text">
                        Showing {((currentPage - 1) * blogsPerPage) + 1} to{' '}
                        {Math.min(currentPage * blogsPerPage, filteredBlogs.length)} of{' '}
                        {filteredBlogs.length} results
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="col-lg-4">
            <div className="sidebar sticky-sidebar">
              <div className="widget mb-40">
                <h6 className="title-widget mb-20 golden-text">Search Here</h6>
                <div className="search-box position-relative">
                  <input
                    type="text"
                    name="search-post"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="blog-search-box golden-input"
                  />
                  <span className="icon pe-7s-search position-absolute golden-icon"></span>
                </div>
              </div>

              <div className="widget last-post-thum mb-40">
                <h6 className="title-widget mb-20 golden-text">Latest Posts</h6>
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
                        <a href={post.link} className="golden-link">{post.title}</a>
                      </h6>
                      <span className="golden-text fz-12">{post.date}</span>
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