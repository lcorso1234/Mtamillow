import dynamic from "next/dynamic";

// Dynamically import the existing App component to preserve original code
const App = dynamic(() => import("../src/App"), { ssr: false });

export default function Home() {
  return <App />;
}
