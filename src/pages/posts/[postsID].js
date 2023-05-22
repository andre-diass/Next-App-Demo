export default function Post({ post }) {
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p> {post.body} </p>
    </div>
  );
}

//the key paths determines wich paths to be statically generated at build time; the key is an array of objects; each object contains a params key, wich in turn is an object that contais the router parameter with its value; the return object must also contain a key called fallback
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postsID: "1" } },
      { params: { postsID: "2" } },
      { params: { postsID: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postsID}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
