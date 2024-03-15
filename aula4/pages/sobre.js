import Link from 'next/link';

function SobrePage() {
  return (
    <div>
      Você está na página sobre

      <img src='/images/avatar.png'/>
      <ul>
        <li>
          <Link href="/">
            Ir para a home
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SobrePage;