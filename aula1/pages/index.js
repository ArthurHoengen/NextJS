import Link from 'next/link';

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
