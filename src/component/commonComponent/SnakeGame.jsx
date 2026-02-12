import React, { useState, useEffect, useRef } from "react";
import { LuChevronUp, LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const GRID_SIZE = 18;
const CELL_SIZE = 16; // প্রতিটি ঘরের সাইজ ১৬ পিক্সেল

const SnakeGame = () => {
  // ১. সকল স্টেট
  const [snake, setSnake] = useState([[9, 8], [9, 9], [9, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState("UP");
  const [isStarted, setIsStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // ২. রিফ (Ref) ব্যবহার করা হয়েছে যাতে ইন্টারভ্যাল সবসময় লেটেস্ট ডাটা পায়
  const gameLoopRef = useRef();
  const directionRef = useRef("UP");

  // ডিরেকশন পরিবর্তন হ্যান্ডেল করা
  const changeDirection = (newDir) => {
    const opposites = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (newDir !== opposites[directionRef.current]) {
      setDirection(newDir);
      directionRef.current = newDir;
    }
  };

  // ৩. গেমের মূল লজিক ফাংশন
  const moveSnake = () => {
    setSnake((prevSnake) => {
      const head = [...prevSnake[0]];
      const currentDir = directionRef.current;

      if (currentDir === "UP") head[1] -= 1;
      if (currentDir === "DOWN") head[1] += 1;
      if (currentDir === "LEFT") head[0] -= 1;
      if (currentDir === "RIGHT") head[0] += 1;

      // কলাইশন চেক (দেয়াল)
      if (head[0] < 0 || head[0] >= GRID_SIZE || head[1] < 0 || head[1] >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // কলাইশন চেক (নিজের শরীর)
      for (let segment of prevSnake) {
        if (head[0] === segment[0] && head[1] === segment[1]) {
          setGameOver(true);
          return prevSnake;
        }
      }

      const newSnake = [head, ...prevSnake];

      // খাবার খাওয়া চেক
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(s => s + 1);
        // নতুন খাবার তৈরি
        setFood([
          Math.floor(Math.random() * GRID_SIZE),
          Math.floor(Math.random() * GRID_SIZE)
        ]);
      } else {
        newSnake.pop(); // লেজ কেটে ফেলা (যদি খাবার না খায়)
      }

      return newSnake;
    });
  };

  // ৪. ইন্টারভ্যাল কন্ট্রোল
  useEffect(() => {
    if (isStarted && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, 150);
    } else {
      clearInterval(gameLoopRef.current);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [isStarted, gameOver, food]); // food এখানে রাখা হয়েছে যাতে খাবারের পজিশন আপডেট হলে লুপ ঠিক থাকে

  // ৫. কিবোর্ড ইনপুট
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") changeDirection("UP");
      if (e.key === "ArrowDown") changeDirection("DOWN");
      if (e.key === "ArrowLeft") changeDirection("LEFT");
      if (e.key === "ArrowRight") changeDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const resetGame = () => {
    setSnake([[9, 8], [9, 9], [9, 10]]);
    setFood([5, 5]);
    setDirection("UP");
    directionRef.current = "UP";
    setGameOver(false);
    setIsStarted(true);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0d1b2a] p-4 font-mono min-h-[500px]">
      <div className="bg-[#1b434d] p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row gap-8">
      
        <div 
          className="relative bg-[#011627] border-4 border-[#0a1e2f] rounded-lg overflow-hidden shadow-inner"
          style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        >
          {/* সাপ */}
          {snake.map((s, i) => (
            <div key={i} className="absolute bg-[#43d9ad] rounded-sm"
              style={{
                width: CELL_SIZE, height: CELL_SIZE,
                left: s[0] * CELL_SIZE, top: s[1] * CELL_SIZE,
                boxShadow: "0 0 5px #43d9ad",
                opacity: 1 - i * 0.05
              }}
            />
          ))}


          <div className="absolute bg-[#ff5f5f] rounded-full"
            style={{
              width: CELL_SIZE - 2, height: CELL_SIZE - 2,
              left: food[0] * CELL_SIZE + 1, top: food[1] * CELL_SIZE + 1,
              boxShadow: "0 0 10px #ff5f5f"
            }}
          />


          {(!isStarted || gameOver) && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
              {gameOver && <h2 className="text-[#ff5f5f] text-2xl font-bold mb-4 animate-pulse">GAME OVER</h2>}
              <button 
                onClick={resetGame}
                className="bg-[#fea55f] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#ffb37a] transition-all transform active:scale-95"
              >
                {gameOver ? "TRY AGAIN" : "START GAME"}
              </button>
            </div>
          )}
        </div>


        <div className="flex flex-col justify-between w-48">
          <div className="text-center bg-[#011627] p-4 rounded-xl border border-white/5 mb-4">
            <p className="text-gray-400 text-xs uppercase tracking-tighter">Score</p>
            <h3 className="text-[#43d9ad] text-3xl font-bold">{score}</h3>
          </div>

          <div className="bg-[#011627] p-4 rounded-xl border border-white/5">
            <div className="grid grid-cols-3 gap-2 mx-auto w-fit">
              <div />
              <button onClick={() => changeDirection("UP")} className="p-3 bg-[#112a3d] rounded-lg text-white hover:bg-[#1b434d]"><LuChevronUp /></button>
              <div />
              <button onClick={() => changeDirection("LEFT")} className="p-3 bg-[#112a3d] rounded-lg text-white hover:bg-[#1b434d]"><LuChevronLeft /></button>
              <button onClick={() => changeDirection("DOWN")} className="p-3 bg-[#112a3d] rounded-lg text-white hover:bg-[#1b434d]"><LuChevronDown /></button>
              <button onClick={() => changeDirection("RIGHT")} className="p-3 bg-[#112a3d] rounded-lg text-white hover:bg-[#1b434d]"><LuChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
