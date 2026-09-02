import Pagination from "@/components/common/Pagination";
import BlogListCard from "@/components/common/BlogListCard";
import BlogSidebar from "@/components/common/BlogSidebar";
import { blogListPosts } from "@/data/blogs";

function BlogList() {
  return (
    <>
      <section className="tf-section3 flat-blog-list flat-property">
        <div className="container">
          <div className="inner-heading flex-two flex-wrap gap-20">
            <h2 className="heading-listing">Blog List</h2>
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
            <div className="col-lg-8">
              <div className="post">
                <div className="flat-blog">
                  <div className="wrap-blog">
                    {blogListPosts.map((blog) => (
                      <BlogListCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>
                <Pagination totalPages={10} />
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;
