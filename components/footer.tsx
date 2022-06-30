import Link from "next/link";

export default function Footer({year}) {
    return (
        <footer className="text-center mt-16 md:mt-12">
            <ul className="mt-10">
                <li className="inline m-2"><Link href="https://www.github.com/paoloconi96">
                    <a className={"hover:underline focus:underline"}>Github</a>
                </Link></li>
                <li className="inline m-2"><Link href="https://www.linkedin.com/in/conizzoli/">
                    <a className={"hover:underline focus:underline"}>Linkedin</a>
                </Link></li>
                <li className="inline m-2"><Link href="https://twitter.com/paoloconi96">
                    <a className={"hover:underline focus:underline"}>Twitter</a>
                </Link></li>
                <li className="inline m-2"><Link href="https://www.instagram.com/paoloconi96/">
                    <a className={"hover:underline focus:underline"}>Instagram</a>
                </Link></li>
            </ul>
            <p className="mt-2">© Copyright {year} - Paolo Conizzoli, All right reserved.</p>
            <p className={"mt-2 text-slate-500"}>
                Made in <Link href="https://nextjs.org/"><a className={"hover:underline focus:underline"}>Next.js</a></Link>, deployed on <Link
                href="https://vercel.com/"><a className={"hover:underline focus:underline"}>Vercel</a></Link>.
            </p>
        </footer>
    );
}