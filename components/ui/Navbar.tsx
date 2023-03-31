import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        background: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            Pokémon
          </Text>
        </Link>
      </NextLink>{' '}
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h4>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
