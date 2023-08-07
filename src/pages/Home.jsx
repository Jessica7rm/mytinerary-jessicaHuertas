import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layouts/Layout';


const Home = () => {
  return (
      <Layout>
        <main>
          <Hero />
          <Carousel />
        </main>
      </Layout>
  );
};

export default Home