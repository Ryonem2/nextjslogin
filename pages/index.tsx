import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../models/Navbar/components/Navbar";
// import { Provider } from "react-redux";
// import configureStore from "../store/configureStore";

// const store = configureStore();

const Home: NextPage = (): any => {
  return (
    <>
      {/* <Provider store={store}> */}
      <Head>
        <title>Next JS login and ToDoList</title>
      </Head>

      <Navbar />
      {/* </Provider> */}
    </>
  );
};

export default Home;
