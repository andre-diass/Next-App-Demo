export default function Users(props) {
  return (
    <>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  //runs on the server side, that's why if I console log the data, it will shown in the
  //terminal and not on the browser console
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
/*
//Pattern
(1) define the function getStaticProps and fetch the data
(2) return the data as an oject props, wich is going to be available in the component
*/
