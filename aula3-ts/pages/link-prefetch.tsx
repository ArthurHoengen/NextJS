
import Link from 'next/link';


export default function LinkPrefetchPage(): JSX.Element {
  return (
    <div>
      <li>
        <Link href="/" prefetch={false} >
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={true}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          Link Prefetch
        </Link>
      </li>
    </div>
  )
}
