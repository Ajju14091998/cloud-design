import React from "react";
import "./HomeSection6.scss";

const HomeSection6 = () => {
  return (
    <section className="blog-section">
      <div className="blog-section-main">
        <p className="blog-title">Recent Blogs</p>
        <div className="blog-divider"></div>

        <div className="blog-list">
          <div className="blog-item">
            <a href="" className="blog-link">
              <div className="blog-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/12/19319639.jpeg"
                  className="blog-image"
                  alt=""
                />
              </div>
              <div className="blog-category">
                <div className="blog-category-label">
                  Artificial Intelligence
                </div>
              </div>
              <div className="blog-title-container">
                <h2 className="blog-title-text">
                  AI in Manufacturing: An Essential Introduction
                </h2>
              </div>
              <div className="blog-description">
                <p className="blog-description-text">
                  With the advancements in artificial intelligence, there is
                  great interest in the....
                </p>
              </div>
            </a>
            <a className="author-link">
              <div className="author-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/06/Ketan-Solanki.webp"
                  alt=""
                  className="author-image"
                />
              </div>
              <div className="author-name">
                <p className="author-name-text">Ketan Solanki</p>
              </div>
            </a>
          </div>
          <div className="blog-item">
            <a href="" className="blog-link">
              <div className="blog-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/11/3725328.jpg"
                  className="blog-image"
                  alt=""
                />
              </div>
              <div className="blog-category">
                <div className="blog-category-label">Offshore Development</div>
              </div>
              <div className="blog-title-container">
                <h2 className="blog-title-text">
                Software Offshore Development: A Boon to...
                </h2>
              </div>
              <div className="blog-description">
                <p className="blog-description-text">
                Software offshore development is outsourcing software development tasks to a...
                </p>
              </div>
            </a>
            <a className="author-link">
              <div className="author-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/09/blogprofile.jpg"
                  alt=""
                  className="author-image"
                />
              </div>
              <div className="author-name">
                <p className="author-name-text">Prashant Pawar</p>
              </div>
            </a>
          </div>
          <div className="blog-item">
            <a href="" className="blog-link">
              <div className="blog-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/11/6700615.jpg"
                  className="blog-image"
                  alt=""
                />
              </div>
              <div className="blog-category">
                <div className="blog-category-label">
                Application Modernization
                </div>
              </div>
              <div className="blog-title-container">
                <h2 className="blog-title-text">
                Application Modernization - A Quick Introduction
                </h2>
              </div>
              <div className="blog-description">
                <p className="blog-description-text">
                Application modernization is the process of updating existing software applications to...
                </p>
              </div>
            </a>
            <a className="author-link">
              <div className="author-image-container">
                <img
                  src="https://api.cloudesign.com/blog/wp-content/uploads/2024/06/azmalbasha.jpg"
                  alt=""
                  className="author-image"
                />
              </div>
              <div className="author-name">
                <p className="author-name-text">Azmal Basha Shaik</p>
              </div>
            </a>
          </div>
        </div>
        <a href="" className="explorebtn">
          Explore All
        </a>
      </div>
    </section>
  );
};

export default HomeSection6;
