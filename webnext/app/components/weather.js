async function getData() {
  const res = await fetch('https://api.tux.software/meteo', { cache: "no-store" });

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
   if(data !== null){
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
)} else {
  return null;
}
}
