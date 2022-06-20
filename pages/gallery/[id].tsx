import type { NextPage } from 'next';
import Head from 'next/head';
import Photos from '../../services/Photos';
import { Gallery as GalleryType } from '../../types/types';

type GalleryProps = {
  photos?: string[];
};

const Gallery: NextPage = ({ photos }: GalleryProps) => {
  console.log('🚀 ~ file: [id].tsx ~ line 10 ~ photos', photos);
  return (
    <div>
      <Head>
        <title>X Gallery</title>
        <meta name="description" content="X Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Gallery</main>
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
