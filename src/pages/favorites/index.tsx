import { useEffect, useState } from 'react';
import { FavoritePokemons, Layout, Nofavorites } from '../../../components';
import { localFavorites } from '../../../utils';

export const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <Nofavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};
export default FavoritePage;
