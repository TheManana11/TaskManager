
import {
  FiCheck,
  FiEye,
  FiLock,
  FiMail,
  FiUser,
  FiArrowRight,
  FiClipboard,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import "./styles.css";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, type SignupFormValues } from '../../schemas/signupSchema';

const Signup = () => {

  const navigate = useNavigate();

  const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm<SignupFormValues>({
  resolver: zodResolver(signupSchema),
  mode: "onTouched",
});

const onSubmit = (data: SignupFormValues) => {
  console.log("Signup data:", data);
  reset();
  navigate("/dashboard");
};


  return (
    <main className="signup-page">
      <section className="signup-visual-panel">
        <div className="signup-visual-background signup-orb-one" />
        <div className="signup-visual-background signup-orb-two" />

        <div className="signup-brand">
          <div className="signup-brand-icon">
            <FiCheck />
          </div>
          <span>TaskManager</span>
        </div>

        <div className="signup-visual-content">
          <span className="signup-eyebrow">
            <span className="signup-eyebrow-dot" />
            YOUR SPACE TO GET THINGS DONE
          </span>

          <h1>
            Make room for
            <br />
            <span>what matters.</span>
          </h1>

          <p className="signup-visual-description">
            Bring your tasks, goals, and daily plans together.
            A little more clarity can make a big difference.
          </p>

          <div className="signup-feature-list">
            <div className="signup-feature">
              <div className="signup-feature-icon">
                <FiClipboard />
              </div>
              <div>
                <h3>Everything in one place</h3>
                <p>Keep your day organized and under control.</p>
              </div>
            </div>

            <div className="signup-feature">
              <div className="signup-feature-icon">
                <FiTarget />
              </div>
              <div>
                <h3>Focus on your priorities</h3>
                <p>Know what matters and what comes next.</p>
              </div>
            </div>

            <div className="signup-feature">
              <div className="signup-feature-icon">
                <FiTrendingUp />
              </div>
              <div>
                <h3>Make progress every day</h3>
                <p>Turn small steps into meaningful results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-form-panel">
        <div className="signup-form-wrapper">
          <div className="signup-mobile-brand">
            <div className="signup-brand-icon">
              <FiCheck />
            </div>
            <span>TaskManager</span>
          </div>

          <div className="signup-form-heading">
            <span className="signup-form-step">GET STARTED — IT'S FREE</span>
            <h2>Create your account</h2>
            <p>
              Start organizing your day and make progress
              toward your goals.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <div className="signup-field">
              <label htmlFor="fullName">Full name</label>
              <div className="signup-input-wrapper">
                <FiUser className="signup-input-icon" />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  {...register("fullName")}
                />
              </div>

              {errors.fullName && (
                <span className="signup-field-error" role="alert">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="signup-field">
              <label htmlFor="email">Email address</label>
              <div className="signup-input-wrapper">
                <FiMail className="signup-input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <span className="signup-field-error" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="signup-field">
              <label htmlFor="password">Password</label>
              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />
                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  { ...register("password") }
                />
                <button
                  className="signup-password-icon"
                  type="button"
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
              <span className="signup-field-hint">
                Use at least 8 characters for your password.
              </span>
            </div>

            {errors.password && (
            <span className="signup-field-error" role="alert">
              {errors.password.message}
            </span>
          )}

            <div className="signup-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  { ...register('confirmPassword') }
                />
                <button
                  className="signup-password-icon"
                  type="button"
                  aria-label="Show confirm password"
                >
                  <FiEye />
                </button>
              </div>
            </div>

            {errors.confirmPassword && (
          <span className="signup-field-error" role="alert">
            {errors.confirmPassword.message}
          </span>
            )}

            <button className="signup-submit-button" type="submit">
              Create account
              <FiArrowRight />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
