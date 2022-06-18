import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/layout";
import ImageCard from "../components/image-card";

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <ImageCard src="ella/ella-105.jpg" caption="Ella" />
        </Container>
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

{
  /* <img
  srcset="https://ik.imagekit.io/mfimages/ella/ella-105.jpg?tr=w-300 300w,
	  https://ik.imagekit.io/mfimages/ella/ella-105?tr=w-600 600w,
    https://ik.imagekit.io/mfimages/ella/ella-105?tr=w-900 900w"
  sizes="(max-width: 480px) 300px, 50vw" /> */
}

export default Home;
