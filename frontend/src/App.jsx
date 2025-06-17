import { useState } from "react";
import SignIn from "./pages/SignIn";
import UploadForm from "./components/UploadForm";

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <div className="p-6">
      <p className="mb-4 text-green-700 font-bold">Welcome, {user.displayName}!</p>
      <UploadForm />
    </div>
  ) : (
    <SignIn onSignIn={setUser} />
  );
}

export default App;

