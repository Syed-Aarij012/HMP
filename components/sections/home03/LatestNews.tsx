import BlogHome03Card from "@/components/common/BlogHome03Card";
import {
  home03FeaturedBlog,
  home03SideBlogs,
} from "@/data/blogs";

function LatestNews() {
  return (
    <>
      <section className="section-blog tf-section3 position-relative z-1 bg-white">
        <div className="container">
          <div className="heading-section center mb-50 wow fadeInUp">
            <h2 className="heading-tittle">The Latest News Car</h2>
            <p className="fs-18 fw-4">
              The latest new car offers modern style and advanced features,
              giving drivers comfort and performance.
            </p>
          </div>
          <div className="blog-wrap wow fadeInUp">
            <div className="blog-article-left">
              <BlogHome03Card blog={home03FeaturedBlog} variant="featured" />
            </div>
            <div className="blog-article-right">
              {home03SideBlogs.map((blog) => (
                <BlogHome03Card key={blog.id} blog={blog} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
