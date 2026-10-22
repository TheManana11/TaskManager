
import type { Post } from "../../types/posts";
import "./styles.css";

type PostCardProps = {
  post: Post;
};

 function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card__top">
        <span className="post-card__badge">Post #{post.id}</span>
        <span className="post-card__user">
          User ID: {post.userId}
        </span>
      </div>

      <h2 className="post-card__title">{post.title}</h2>

      <p className="post-card__body">{post.body}</p>

      <div className="post-card__footer">
        Published post · ID {post.id}
      </div>
    </article>
  );
}

export default PostCard;
