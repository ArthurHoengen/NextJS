import Link from 'next/link';

// export async function getStaticProps() {
//   return {
//     props: {}
//   }
// }

// export async function getServerSideProps() {
//   return {
//     props: {}
//   }
// }

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <ul>
        <li>
          <Link href="/sobre">
            Ir para a /sobre
          </Link>
        </li>
      </ul>
    </div>
    );
}

export default HomePage;
