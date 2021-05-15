import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title="About">
    <div className="mt-2 md:mt-4 ml-2 md:ml-4">
      <Link href="/">
        <a className="text-gray-400 sm:text-xs md:text-xs lg:text-base">👈  Back to Product List</a>
      </Link>
    </div>
    <h1 className="text-center text-3xl lg:text-4xl mt-4 lg:mt-8 font-mono">About</h1>
    <div className="px-4 mt-4 md:w-2/3 md:mx-auto md:mt-8">
      <p className="text-gray-500">
        We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be
      </p>
    </div>
  </Layout>
);

export default AboutPage;
