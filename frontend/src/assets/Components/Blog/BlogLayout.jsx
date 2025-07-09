import React from 'react';

const BlogLayout = ({ posts, recentPosts, categories }) => {
  return (
    <div className="container py-5">
      <div className="row gy-4">
        {/* Main Blog Content */}
        <div className="col-lg-8">
          <div className="row g-4">
            {posts.map((post, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted small mb-2">{post.date}</p>
                    <p className="card-text">{post.excerpt}</p>
                    <a href={post.link} className="stretched-link text-decoration-none">Read more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Recent Posts */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3 border-bottom pb-2">Recent Posts</h5>
            <ul className="list-unstyled">
              {recentPosts.map((post, i) => (
                <li key={i} className="mb-2">
                  <a href={post.link} className="text-decoration-none text-secondary">
                    • {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="fw-bold mb-3 border-bottom pb-2">Categories</h5>
            <div className="d-flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span key={i} className="badge bg-secondary">{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
