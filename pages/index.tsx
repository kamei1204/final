import Main from "components/Main";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default Home;
