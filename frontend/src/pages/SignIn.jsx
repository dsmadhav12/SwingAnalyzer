import './SignIn.css';

export default function SignIn({ onSignInClick }) {
  return (
    <div className="SignInOverlay">
      <div className="SignInCard">
        <h1 className="SignInTitle">Welcome to SwingAnalyzer</h1>
        <p className="SignInSubtitle">Sign in with Google to begin tracking your golf swings.</p>
        <button className="SignInButton" onClick={onSignInClick}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
