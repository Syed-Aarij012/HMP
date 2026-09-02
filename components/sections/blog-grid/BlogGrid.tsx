import Pagination from "@/components/common/Pagination";
import BlogGridCard from "@/components/common/BlogGridCard";
import { blogGridPosts } from "@/data/blogs";

function BlogGrid() {
  return (
    <>
      <section className="tf-section3 flat-blog-grid flat-property">
        <div className="container">
          <div className="inner-heading flex-two flex-wrap gap-20">
            <h2 className="heading-listing">Blog grid</h2>
            <div className="social-listing flex-six flex-wrap">
              <p className="fs-16">Share this page:</p>
              <div className="icon-social style1">
                <a href="facebook.com">
                  <i className="icon-carus-facebook" />
                </a>
                <a href="linkein.com">
                  <i className="icon-carus-in" />
                </a>
                <a href="x.com">
                  <i className="icon-carus-x" />
                </a>
                <a href="instagram.com">
                  <i className="icon-carus-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="post">
                <div className="flat-blog">
                  <div className="row">
                    <div className="list-car-grid-3 gap-36">
                      {blogGridPosts.map((blog) => (
                        <BlogGridCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  </div>
                </div>
                <Pagination
                  className="center"
                  listClassName="justify-center"
                  totalPages={10}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogGrid;
