import { NextPage } from "next";

const Home: NextPage<{
  data: ReadonlyArray<{ name: string; email: string }>;
}> = ({ data }) => <div>{JSON.stringify(data)}</div>;

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/v1/users").then((response) => response.json());

  return {
    props: { data },
  };
};

export default Home;
