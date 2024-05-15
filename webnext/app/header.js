"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GetRP from './components/getRP';
export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.web.tux.software/me', { cache: "no-store" });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); 

    return () => clearInterval(interval);
  }, []);

  const StatusMap = {
    dnd: 'hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)',
    online: 'hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)',
    idle: 'hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)',
    offline: 'hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)',
  }; //no sé de quién se lo robé, pero muchas gracias

  return (
    <main>
      <div className="flex text-center items-center justify-between bg-gray-900 p-4">
        <div className="flex text-center items-center">
          <img
            src={`https://cdn.discordapp.com/avatars/725316907187568701/${data && data.avatar}`}
            alt="Polo_1245 avatar"
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4 flex items-center"> 
            <Link className="text-orange-500 font-bold text-lg" href="/">
              Polo_1245
            </Link>
            {data && 
              <div 
                className="status-indicator ml-2" 
                style={{ backgroundColor: StatusMap[data.status] }} 
              /> 
            }
          </div>

        </div>
        
        {data  && <GetRP data={data} />}
        <div className="flex items-center">
          <Link className="text-orange-500 ml-4" href="/portfolio">
            ¿Qué he hecho?
          </Link>
          <Link className="text-orange-500 ml-4" href="/blog">
            Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
