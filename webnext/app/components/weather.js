"use client"
import { useState, useEffect} from "react";

export default function Tiempo() {

    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('https://api.web.tux.software/meteo', { cache: "no-store" });
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          const newData = await res.json();
          console.log(newData)
          setData(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      const interval = setInterval(fetchData, 5000); 
  
      return () => clearInterval(interval);
    }, []);

  
    
    if (data == null) {
    }      else {
                
                return(
                  <div className="flex justify-center mt-10 items-center">
                  <div className="flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-4">
                      <img src={data && data.icon} alt="Icono lluvia" className="w-20 h-20 rounded-lg mb-4" />
                      <div className="text-center">
                          <p className="text-white font-semibold">{data && data.temp}°</p>
                          <p className="text-gray-500">{data && data.condicion}</p>
                      </div>
                  </div>
              </div>
    )
}}