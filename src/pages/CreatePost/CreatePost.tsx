import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiSend } from "react-icons/fi";
import type { CreatePostForm } from "../../types/posts";
import "./styles.css";

function CreatePost() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostForm>({
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  });

  const onSubmit = (data: CreatePostForm) => {
    
    console.log(data);
  };

  return (
    <main className="create-post-page">
      <Link to="/dashboard/posts" className="create-post-page__back">
        <FiArrowLeft size={17} />
        Back to Posts
      </Link>

      <h1 className="create-post-page__title">Create Post</h1>

      <p className="create-post-page__subtitle">
        Write a new post and share your content.
      </p>

      <form
        className="create-post-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="create-post-form__heading">
          <FiFileText size={19} />
          Post Information
        </div>

        <div className="create-post-form__field">
          <label htmlFor="title">Post Title</label>

          <input
            id="title"
            type="text"
            placeholder="Enter a descriptive title"
            className={errors.title ? "has-error" : ""}
            {...register("title", {
              required: "Title is required.",
              minLength: {
                value: 3,
                message: "Title must contain at least 3 characters.",
              },
              maxLength: {
                value: 100,
                message: "Title cannot exceed 100 characters.",
              },
            })}
          />

          {errors.title && (
            <span className="create-post-form__error">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="create-post-form__field">
          <label htmlFor="body">Post Content</label>

          <textarea
            id="body"
            placeholder="Write your post content here..."
            className={errors.body ? "has-error" : ""}
            {...register("body", {
              required: "Post content is required.",
              minLength: {
                value: 10,
                message: "Content must contain at least 10 characters.",
              },
              maxLength: {
                value: 2000,
                message: "Content cannot exceed 2000 characters.",
              },
            })}
          />

          {errors.body ? (
            <span className="create-post-form__error">
              {errors.body.message}
            </span>
          ) : (
            <span className="create-post-form__hint">
              Provide at least 10 characters of meaningful content.
            </span>
          )}
        </div>

        <div className="create-post-form__field">
          <label htmlFor="userId">User ID</label>

          <input
            id="userId"
            type="number"
            className={errors.userId ? "has-error" : ""}
            {...register("userId", {
              required: "User ID is required.",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "User ID must be greater than 0.",
              },
              max: {
                value: 10,
                message: "User ID must not exceed 10.",
              },
            })}
          />

          {errors.userId && (
            <span className="create-post-form__error">
              {errors.userId.message}
            </span>
          )}
        </div>

        <div className="create-post-form__actions">
          <button
            type="button"
            className="create-post-form__cancel"
            onClick={() => navigate("/posts")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="create-post-form__submit"
          >
            <FiSend size={16} />
            Create Post
          </button>
        </div>
      </form>
    </main>
  );
}
 export default CreatePost;