import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Photos from '../../services/Photos';
import Image from '../../components/image';
import { Gallery as GalleryType } from '../../types/types';

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

// TODO: Include caption in props
type GalleryProps = {
  photos?: string[];
};

const Gallery: NextPage = ({ photos }: GalleryProps) => {
  return (
    <div>
      <Head>
        <title>X Gallery</title>
        <meta name="description" content="X Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <Grid>
            {photos?.map((url: string) => (
              <Image key={url} src={url} width={300} height={300} alt={url} />
            ))}
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  // Call an external API endpoint to get posts
  const photos = await Photos.getPhotos(params.id);

  return {
    props: {
      photos,
    },
  };
}

// Build static pages for galleries at build time
export async function getStaticPaths() {
  const galleries: GalleryType[] = await Photos.getGalleries();

  const paths = galleries.map(({ folder }) => ({ params: { id: folder } }));
  //  Pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Gallery;
