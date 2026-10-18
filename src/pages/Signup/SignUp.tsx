
import {
  FiCheck,
  FiCheckCircle,
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

const Signup = () => {
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

        <div className="signup-illustration-card">
          <div className="signup-illustration-top">
            <div>
              <span className="signup-illustration-label">
                YOUR PROGRESS
              </span>
              <h3>A productive day</h3>
            </div>
            <div className="signup-illustration-check">
              <FiCheckCircle />
            </div>
          </div>

          <div className="signup-progress-track">
            <div className="signup-progress-fill" />
          </div>

          <div className="signup-progress-footer">
            <span>You're building momentum</span>
            <strong>75%</strong>
          </div>

          <div className="signup-mini-tasks">
            <div className="signup-mini-task">
              <span className="signup-mini-check">
                <FiCheck />
              </span>
              <span className="signup-mini-task-done">
                Plan your priorities
              </span>
              <span className="signup-mini-task-status">Done</span>
            </div>

            <div className="signup-mini-task">
              <span className="signup-mini-check">
                <FiCheck />
              </span>
              <span className="signup-mini-task-done">
                Review your goals
              </span>
              <span className="signup-mini-task-status">Done</span>
            </div>

            <div className="signup-mini-task">
              <span className="signup-mini-pending" />
              <span>Finish today's tasks</span>
              <span className="signup-mini-task-status">In progress</span>
            </div>
          </div>
        </div>

        <p className="signup-visual-footer">
          A clearer mind starts with a clearer plan.
        </p>
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

          <form className="signup-form">
            <div className="signup-field">
              <label htmlFor="fullName">Full name</label>
              <div className="signup-input-wrapper">
                <FiUser className="signup-input-icon" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="signup-field">
              <label htmlFor="email">Email address</label>
              <div className="signup-input-wrapper">
                <FiMail className="signup-input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="signup-field">
              <label htmlFor="password">Password</label>
              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
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

            <div className="signup-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="signup-input-wrapper">
                <FiLock className="signup-input-icon" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your password again"
                  autoComplete="new-password"
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

            <label className="signup-terms">
              <input type="checkbox" name="acceptTerms" />
              <span className="signup-custom-checkbox">
                <FiCheck />
              </span>
              <span>
                I agree to the{" "}
                <a href="/terms">Terms of Service</a> and{" "}
                <a href="/privacy">Privacy Policy</a>.
              </span>
            </label>

            <button className="signup-submit-button" type="submit">
              Create account
              <FiArrowRight />
            </button>

            <div className="signup-divider">
              <span>YOUR PRODUCTIVITY JOURNEY STARTS HERE</span>
            </div>

            <p className="signup-login-prompt">
              Already have an account?{" "}
              <a href="/login">Sign in</a>
            </p>
          </form>

          <p className="signup-security-note">
            <FiLock />
            Your information stays private and secure.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
