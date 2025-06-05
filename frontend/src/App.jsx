import { useState } from 'react';
import SignIn from './pages/SignIn';
// import UploadForm from './components/UploadForm'; // keep this for after login

function App() {
  const [user, setUser] = useState(null); // Replace with Firebase auth later

  const handleSignIn = () => {
    console.log('🔐 Sign-in clicked — this will trigger Firebase Google Auth soon.');
    // Example: setUser({ name: 'Madhav Donepudi' }); // Simulated login
  };

  return user ? (
    <div className="p-6">Welcome, {user.name}!</div>
    // or: <UploadForm />
  ) : (
    <SignIn onSignInClick={handleSignIn} />
  );
}

export default App;
