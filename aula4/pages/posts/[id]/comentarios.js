import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Comentarios() {
  const router = useRouter();

  return (
    <div>
      comentários do post com id: {router.query.id}
      <ul>
        <li>
          <Link href={`/posts/${router.query.id}`}>
            Ir para o post
          </Link>
        </li>
        <li>
          <Link href={`/`}>
            Ir para a home
          </Link>
        </li>
      </ul>
    </div>
  );
}