import React from "react";
import "./index.css";
import { Header } from "./components/layout/header";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-14">
        <Hero />
        <h1>Welcome to the React App</h1>
        <p>This is a simple application to demonstrate component structure.</p>
      </main>
    </div>
  );
}

export default App;
