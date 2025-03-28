import "./styles.css";
import { useEffect, useState } from "react";

const Progress = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${animatedProgress}%`,
          transition: "width 1s ease-in-out",
        }}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [0, 3, 10, 20, 35, 50, 70, 95, 100];

  return (
    <div className="App">
      <h1>Animated Progress Bars</h1>
      {bars.map((value) => (
        <Progress key={value} progress={value} />
      ))}
    </div>
  );
}
