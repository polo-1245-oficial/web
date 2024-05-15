import React from 'react';
import Card from '../components/card';
import Link from 'next/link';

const App = () => {
  return (
    <main className="">
      <p className='text-2xl text-white text-center mt-3'>Aquí tienes unos proyectos de donde he trabajado</p>
      <div className='flex justify-center items-center'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-28">
        <Card titulo="ZStats" descripcion="Una API no oficial scrappeando el sitio web de ZoneCraft.es" link1="https://docs.toadstudio.es/" textlink1="Documentación" />
        <Card titulo="zcapipackage" descripcion="Un pequeño paquete para Node.JS para usar la API de ZStats" link1="https://github.com/polo-1245-oficial/zcapipackage" textlink1="Source Code" link2="https://www.npmjs.com/package/toadzonecraftapi" textlink2="Paquete en NPM" />
        <Card titulo="ChillCenter" descripcion="Una pequeña network de Minecraft enfocada en el survival"/>
        <Card titulo="NDI Remastered" descripcion={"Un fork de un mod de Minecraft para poder añadir clientes NDI"} link1="https://modrinth.com/mod/ndi-remastered" textlink1={"Modrinth"} link2="https://www.curseforge.com/minecraft/mc-mods/ndi-remastered" textlink2={"CurseForge"} link3="https://github.com/polo-1245-oficial/MC-NDI-Remastered" textlink3={"Source Code"}/>
        <Card titulo={"tux.software Backend"} descripcion={"El backend en este caso se encarga de realizar peticiones a diferentes APIs como, Lanyard y del tiempo."} link1="https://api.web.tux.software" textlink1={"API"} link2={"https://github.com/polo-1245-oficial/web/tree/main/backend"} textlink2={"Source Code"} />
        <Card titulo={"tux.software Frontend"} descripcion={"(Lo que estás viendo). Se encarga de hacer visualizar la API. Hecho en Next.JS."} link1={"https://github.com/polo-1245-oficial/web/tree/main/webnext"} textlink1={"Source Code"} />
      </div>
      </div>
      <p className='text-xl text-white text-center mt-3'>Quieres más? Aquí tienes enlace a mi GitHub:</p>
      <Link className='text-xl text-white flex justify-center text-center items-center mt-2' href="https://github.com/polo-1245-oficial">GitHub</Link>
    </main>
  );
};

export default App;
