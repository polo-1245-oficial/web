import Link from 'next/link';
import React from 'react';

const Card = ({ titulo, descripcion, link1, link2, link3, textlink1, textlink2, textlink3}) => { //lo de los links es una chapuza pero que me da pereza aquí que si array y que si su puta madre
  
      return (
        <div className="card bg-gray-900 text-white p-4 rounded-lg max-w-sm">
          <h1 className="text-2xl font-bold">{titulo}</h1>
          <p>{descripcion}</p>
          {link1 && (
            <Link href={link1} className="text-orange-500" style={{ textDecoration: 'none' }}>
              {textlink1}
            </Link>
          )}
          {link2 && (
            <Link href={link2} className="ml-5 text-orange-500" style={{ textDecoration: 'none' }}>
              {textlink2}
            </Link>
          )}
          {link3 && (
            <Link href={link3} className="ml-5 text-orange-500" style={{ textDecoration: 'none' }}>
              {textlink3}
            </Link>
          )}
        </div>
      );
    };
    
export default Card;
    