import { MovieCard } from '../components/Card';

async function getMovie() {
    const res = await fetch(
        `https://api.kinopoisk.dev/v1.3/movie/random`,
        {
            method: 'GET',
            headers: {
                'X-API-KEY': 'H83S4C1-BGW458B-NEB6X68-Q9GKBNX',
                accept: 'application/json',
            },
        }
    );
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function Home() {
    // const movie = await getMovie()
    // console.log(movie)
  return (
    <main className="">
      <MovieCard />
    </main>
  );
}
