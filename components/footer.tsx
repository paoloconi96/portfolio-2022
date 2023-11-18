import Link from "next/link";

export default function Footer({year}) {
    return (
        <footer className="text-center mt-16 md:mt-12">
            <ul className="mt-10">
                <li className="inline m-2"><Link
                    href="https://www.github.com/paoloconi96"
                    className={"hover:underline focus:underline"}>
                    Github
                </Link></li>
                <li className="inline m-2"><Link
                    href="https://www.linkedin.com/in/paolo-conizzoli"
                    className={"hover:underline focus:underline"}>
                    Linkedin
                </Link></li>
            </ul>
            <p className="mt-2">© Copyright {year} - Paolo Conizzoli, All right reserved.</p>
            <p className={"mt-2 text-slate-500"}>
                Made in <Link href="https://nextjs.org/" className={"hover:underline focus:underline"}>Next.js</Link>, deployed on <Link href="https://vercel.com/" className={"hover:underline focus:underline"}>Vercel</Link>.
            </p>
        </footer>
    );
}
