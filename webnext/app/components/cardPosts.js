import Link from 'next/link';
import React from 'react';

const CardPosts = ({ titulo, descripcion, link1, tags }) => { 
    const idrecortau = link1.substring(0, 6);
    const descripcionbien = descripcion.substring(0, 20);
    return (
        <div className="card bg-gray-900 text-white p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{titulo}</h1>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: `${descripcionbien}...` }} />
            {tags && (
                <p className="text-sm text-center">{tags}</p>
            )}
            {link1 && (
                <Link href={`/blog/post/${idrecortau}`} className="text-center text-orange-500" style={{ textDecoration: 'none' }}>
                    Leer
                </Link>
            )}
        </div>
    );
};

export default CardPosts;
