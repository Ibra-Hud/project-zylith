import React from "react";
import AppNavigator from "./components/AppNavigator";
import { UserProvider } from "./contexts/UserContext";

// This app is built to teach me a React Native. In this case this is a todo app.
// The app below will allow users to create a todo list and complete tasks
export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
