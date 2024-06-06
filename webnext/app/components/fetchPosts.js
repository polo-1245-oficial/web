import Cards from '../components/cardPosts'
async function getData() {
  const res = await fetch('https://blogapi.tux.software/v1/posts', { cache: "no-store" });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
    const response = await getData();
    const data = response.data;

    return (
        <main>
            {data.map((post, index) => (
                <div key={index}>
                    <Cards titulo={post.title} descripcion={post.body} tags={post.tags} link1={post.id}/>
                </div>
            ))}
        </main>
    );
}