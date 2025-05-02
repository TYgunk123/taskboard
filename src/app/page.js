'use client';  // 聲明這是客戶端組件，允許使用 React hooks 和事件處理

// 導入必要的依賴
import Image from "next/image";  // Next.js 的圖片優化組件
import { useState } from "react";  // React 的狀態管理 hook
import TaskList from "./components/TaskList";  // 導入自定義的任務列表組件

export default function Home() {
  // 狀態管理
  // tasks: 儲存所有任務的陣列
  // setTasks: 用於更新 tasks 陣列的函數
  const [tasks, setTasks] = useState([]);

  // newTask: 儲存新任務的輸入值
  // setNewTask: 用於更新輸入值的函數
  const [newTask, setNewTask] = useState('');

  // 添加新任務的處理函數
  const addTask = () => {
    console.log("Before:", tasks);  // 記錄添加前的任務列表
    console.log("New Task:", newTask);  // 記錄新添加的任務
    
    // 創建新的任務陣列，使用展開運算符 (...) 複製原有任務，並添加新任務
    const updateTasks = [...tasks, newTask];
    
    // 更新任務列表狀態
    setTasks(updateTasks);
    console.log("After:", updateTasks);  // 記錄更新後的任務列表
    
    // 清空輸入框
    setNewTask('');
  }; 

  // 渲染用戶界面
  return (
    // main 容器，使用 Tailwind CSS 添加內邊距
    <main className="p-4">
      {/* 標題區域 */}
      <h1 className="text-2xl font-bold">Task Board</h1>

      {/* 輸入區域：包含輸入框和添加按鈕 */}
      <div className="flex gap-2 mb-4">
        {/* 任務輸入框 */}
        <input 
          className="border p-2 flex-1"  // 樣式：邊框、內邊距、彈性佈局
          placeholder="Enter a task"  // 佔位提示文字
          value={newTask}  // 綁定到 newTask 狀態
          onChange={(e) => setNewTask(e.target.value)}  // 當輸入改變時更新 newTask
        />
        {/* 添加按鈕 */}
        <button
          className="bg-blue-500 text-white  px-4"  // 樣式：藍色背景、白色文字、水平內邊距
          onClick={addTask}  // 點擊時執行 addTask 函數
        >Add</button>
      </div>  

      {/* 任務列表組件：傳入 tasks 陣列作為 props */}
      <TaskList tasks={tasks}/>
    </main>
  );
}