import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';
import ImageCard from '../components/image-card';
import Photos from '../services/Photos';
import { Gallery } from '../types/types';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(340px + 1rem));
  grid-gap: 1rem;
  width: 100%;
  max-width: calc(3 * (340px + 1rem) + 2rem); // Inlcudes 2 x gutter
`;

type HomeProps = {
  galleries?: Gallery[];
};

const Home: NextPage = ({ galleries }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <Grid>
            {galleries?.map(({ folder, cover, caption }) => (
              <ImageCard key={folder} src={cover} caption={caption || folder} />
            ))}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const galleries: Gallery[] = await Photos.getGalleries();

  return {
    props: {
      galleries,
    },
  };
}

export default Home;
