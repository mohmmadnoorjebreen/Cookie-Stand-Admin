import Link from 'next/link'


export default function CookieStandHeader({ title }) {
    return (
        <header >
            <h1  >
                {title}
                </h1>
            <div >
                <nav>
                <Link href="/overview"><a>Overview</a></Link>
                </nav>
            </div>
        </header>
    )
}