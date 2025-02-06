
"use client"
import { useState, useEffect } from 'react';

function MyComponent() {
  const [, setData] = useState<string | null>(null);

  useEffect(() => {
    // Kiểm tra xem đang chạy trên client-side
    if (typeof window !== 'undefined') {
      // Lấy dữ liệu từ sessionStorage
      const storedData = sessionStorage.getItem('myData');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, []);

  const handleSave = () => {
    const newData = "Duong van Xo"
    setData(newData);
    // Lưu dữ liệu vào sessionStorage
    sessionStorage.setItem('myData', JSON.stringify(newData));
  };

  return (
    <div className='w-96 mt-20 flex justify-center'>
      {/* Hiển thị dữ liệu */}
      <button className='border-1 rounded-sm bg-red-500' onClick={handleSave}>Lưu dữ liệu</button>
    </div>
  );
}

export default MyComponent;
