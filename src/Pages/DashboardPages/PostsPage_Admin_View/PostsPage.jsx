import "./admin_posts_view.css";
import CardContainer from "../../../Components/PostsCard/CardContainer/CardContainer";

const AdminPostsView = () => {
  const publishedPosts = [
    { id: 1, title: "First Published Post", date: "2025-01-01", author: "Admin" },
    { id: 2, title: "Second Published Post", date: "2025-01-02", author: "Admin" },
  ];

  const pendingPostsCount = 3; // Example number of pending posts

  return (
    <div className="admin-posts w-full px-10 mt-10">
      {/* Header Section */}
      <div className="posts-header flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[var(--primary-color)]">Posts Management</h2>
        <button className="create-post-btn flex items-center gap-2 py-3 px-6 rounded-full">
          <i className="ri-quill-pen-line text-2xl"></i>
          <span>Create Post</span>  {`// TODO: Add a link to the create post page`}
        </button>
      </div>

      {/* Posts Summary */}
      <div className="posts-summary flex gap-6 mb-8">
        <div className="summary-card bg-[var(--secondary-color)] text-[var(--primary-color)] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Published Posts</h3>
          <p className="text-2xl font-bold">{publishedPosts.length}</p>
        </div>
        <div className="summary-card bg-[var(--secondary-color)] text-[var(--primary-color)] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Pending Posts</h3>
          <p className="text-2xl font-bold">{pendingPostsCount}</p>
        </div>
      </div>

      {/* Posts List */}
      <div className="posts-list">
        <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
          Published Posts
        </h3>
        <CardContainer posts={publishedPosts} />
      </div>
    </div>
  );
};

export default AdminPostsView;
