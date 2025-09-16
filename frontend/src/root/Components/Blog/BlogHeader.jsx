import React from 'react';

const BlogHeader = () => {
  return (
    <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
      {/* Blog Title */}
      <h2 className="mb-3 mb-md-0 fw-bold">📝Blog</h2>

      {/* Search Bar */}
      <form className="w-100 w-md-auto" style={{ maxWidth: '350px' }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search articles..."
            aria-label="Search blog"
            disabled
          />
          <button className="btn btn-outline-secondary" type="submit" disabled>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogHeader;
