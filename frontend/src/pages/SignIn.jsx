import { signInWithPopup, auth, provider } from "../firebase";
import './SignIn.css';
export default function SignIn({ onSignIn }) {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Signed in:", user.displayName);
      onSignIn(user); // Send user to App.jsx
    } catch (err) {
      console.error("❌ Sign-in error:", err.message);
    }
  };

  return (
    <div className="SignInOverlay">
      <div className="SignInCard">
        <h1 className="SignInTitle">Welcome to SwingSense</h1>
        <p className="SignInSubtitle">Sign in with Google to begin tracking your golf swings.</p>
        <button className="SignInButton" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
