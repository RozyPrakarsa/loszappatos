import Link from 'next/Link';

const Daftarartikel = () => (
    <p>
        Daftar artikel : <br />
        <ul>
            <li><Link href="/artikel/[kode]" as="/artikel/1"><a>profil</a></Link></li>
            <li><Link href="/artikel/[kode]" as="/artikel/2"><a>Nike</a></Link></li>
            <li><Link href="/artikel/[kode]" as="/artikel/3"><a>Reebok</a></Link></li>
            <li><Link href="/artikel/[kode]" as="/artikel/4"><a>Adidas</a></Link></li>
        </ul>
    </p>
)

export default Daftarartikel;