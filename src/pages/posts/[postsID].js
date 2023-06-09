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

//this is basically going to give the under brackest [] parameters its values
/*
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
*/

//I can also fetch a specific number of parameters and create paths dinamically using those paremeters
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postsID: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

//this context parameter is an object wich contains a key called params; this method of getting the endpoint dynamic parameter workd the same way if I use getServerSideProps
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
