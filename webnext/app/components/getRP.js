import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TimeStamp from '../utils/timestampTohoraleible'

export default function GetRP({ data }) {
  const spotify = data.spotify;
  const activities = data.act;
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseOver = () => {
    setIsHovered(true);
    controls.start({ opacity: 1, y: 0 });
  }

  const handleMouseOut = () => {
    setIsHovered(false);
    controls.start({ opacity: 0, y: -10 });
  }
 
  const coso = () => {
    const asset = activities.length > 0 ? activities[0].assets : null;
    if (asset && asset.small_text) {
      if (asset.small_text === "Visual Studio Code") {
        const imageUrl = asset.large_image;
        const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.lastIndexOf('.')).toUpperCase();
        return filename;
      }
      return null;
    }
    return null; 
  }
  if (spotify !== false ){
    const content = (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p className="text-gray-400">
          Escuchando {spotify.song}
        </p>
        <motion.div
          style={{ opacity: 0, y: -10 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          {isHovered && <p className="text-gray-400">De {spotify.artist}</p>}
        </motion.div>
      </div>
    ) : (
      <p className="text-gray-400">No estoy haciendo nada</p>
    );
    
    return (
      <div>
        {content}
      </div>
    );
  } else {
  const content = activities.length > 0 ? (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <p className="text-gray-400">
        {activities[0].name === "Code" ? 
          `Programando en ${coso()}` : `Jugando a ${activities[0].name}`}
      </p>
      <motion.div
        style={{ opacity: 0, y: -10 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {isHovered && <p className="text-gray-400">Desde hace: <TimeStamp timestamp={data.act[0].timestamps.start} /></p>}
      </motion.div>
    </div>
  ) : (
    <p className="text-gray-400">No estoy haciendo nada</p>
  );
  
  return (
    <div>
      {content}
    </div>
  );
  }
}
