export default function ServerSide({ ids }) {
  console.log(ids);
  return (
    <>
      {ids.map((id) => {
        return <h1 key={id.id}>{id.title}</h1>;
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      ids: data,
    },
  };
}
