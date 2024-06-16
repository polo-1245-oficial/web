async function getData() {
  try {
    const res = await fetch('https://blogapi.tux.software/v1/posts', { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { data: [{ "title": "5xx", "body": "<p>SERVER ERROR</p>" }] };
  }
}

async function findById(partialId) {
  const { data } = await getData();
  if (!data || !Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return [{ title: "5xx", body: "<p>SERVER ERROR</p>" }];
  }
  const filteredData = data.filter(item => item.id.startsWith(partialId));
  if (filteredData.length === 0) {
    return [{ title: "Error", body: "<p>ID NOT FOUND</p>" }];
  }
  return filteredData;
}

export default async function Page({ params }) {
  const test = await findById(params.slug);
  console.log(JSON.stringify(test));
  const item = test[0];


  return (
    <main className="container mx-auto px-4">
      <div className="text-white justify-center flex text-center mt-4 text-7xl">{item?.title}</div>
      <div className="text-white justify-center flex text-center mt-4 text-2xl">{item?.tags}</div>
      <div
        className="text-white justify-center text-center mt-4 text-huge"
        dangerouslySetInnerHTML={{ __html: item?.body || '' }}
      ></div>
    </main>
  );
}
