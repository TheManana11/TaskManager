import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import PostCard from "../../components/PostCard/PostCard";
import type { Post } from "../../types/posts";
import "./styles.css";

function Posts() {
  const posts: Post[] = [];

  return (
    <main className="posts-page">
      <header className="posts-page__header">
        <div>
          <h1 className="posts-page__title">Posts</h1>
          <p className="posts-page__subtitle">
            Explore and manage your posts in one place.
          </p>
        </div>

        <Link to="/dashboard/create-post" className="posts-page__button">
          <IoIosAddCircleOutline size={20} />
          Create Post
        </Link>
      </header>

      <section className="posts-page__stats">
        <p className="posts-page__stat-label">Total Posts</p>
        <p className="posts-page__stat-value">{posts.length}</p>
      </section>

      {posts.length > 0 ? (
        <section className="posts-page__grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <section className="posts-page__empty">
          <div className="posts-page__empty-icon">
            <IoIosAddCircleOutline size={28} />
          </div>

          <h2>No posts to display</h2>

          <p>Your fetched posts will appear here.</p>

          <Link to="/dashboard/create-post" className="posts-page__button">
            Create your first post
          </Link>
        </section>
      )}
    </main>
  );
}

export default Posts;