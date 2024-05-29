import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import axios from "axios";

// Create authentication context
export const AuthContext = createContext(null);

// Initialize Firebase authentication instance
const auth = getAuth(app);

// AuthProvider component
const AuthProvider = ({ children }) => {
  // State to hold user information
  const [user, setUser] = useState(null);
  // State to indicate loading state
  const [loading, setLoading] = useState(true);

  // Function to create user with email and password
  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = result.user;

      // Update user's profile with display name
      await updateProfile(currentUser, {
        displayName: displayName,
      });

      setUser(currentUser);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Function to sign in with email and password
  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const currentUser = result.user;
      setUser(currentUser);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Function to sign in with Google
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const currentUser = result.user;

      // Fetch user's profile image URL from currentUser object
      const profileImageUrl = currentUser.photoURL;

      // Update user state with profile image URL
      setUser({ ...currentUser, profileImageUrl });
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Function to sign out
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      // Check if user object exists and has a displayName property
      if (user && user.displayName) {
        // Attempt to read the display name
        console.log("Logging out user:", user.displayName);
      } else {
        // If user object doesn't exist or doesn't have a displayName property
        console.log("Logging out user");
      }
      setUser(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if user exist then issue a toke

      if (currentUser) {
        axios
          .post(
            "https://assingment-11-server-kappa.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://assingment-11-server-kappa.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    // Clean up subscription
    return () => unsubscribe();
  }, []);

  // Value provided to consuming components
  const authContextValue = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
