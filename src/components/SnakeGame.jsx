import React, { useState, useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState([{ x: 9, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const box = 20;

  // Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(draw, 120);
    return () => clearInterval(interval);
  });

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * box, food.y * box, box, box);

    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? "lime" : "green";
      ctx.fillRect(part.x * box, part.y * box, box, box);
    });

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= 1;
    if (direction === "UP") snakeY -= 1;
    if (direction === "RIGHT") snakeX += 1;
    if (direction === "DOWN") snakeY += 1;

    let newSnake = [...snake];
    if (snakeX === food.x && snakeY === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * (canvas.width / box)),
        y: Math.floor(Math.random() * (canvas.height / box)),
      });
    } else {
      newSnake.pop();
    }

    const newHead = { x: snakeX, y: snakeY };

    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= canvas.width / box ||
      snakeY >= canvas.height / box ||
      collision(newHead, newSnake)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(newHead);
    setSnake(newSnake);
  };

  const collision = (head, array) => {
    return array.some((part) => part.x === head.x && part.y === head.y);
  };

  const restart = () => {
    setSnake([{ x: 9, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection(null);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-white"
      />
      <div className="mt-4 text-white text-lg">Score: {score}</div>
      {gameOver && (
        <div className="mt-2">
          <p className="text-red-400">Game Over!</p>
          <button
            onClick={restart}
            className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;