import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../../components';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokemons'>
      <h1>Hola mundo</h1>
      <Button shadow color="gradient" auto>
        Hola
      </Button>
    </Layout>
  );
};

export default HomePage;
