import Link from "next/link";

export default function Footer({year}) {
    return (
        <footer className="text-center mt-16 md:mt-12">
            <ul className="mt-10">
                <li className="inline m-2"><a href="https://www.github.com/paoloconi96">Github</a></li>
                <li className="inline m-2"><a href="https://www.linkedin.com/in/conizzoli/">Linkedin</a></li>
                <li className="inline m-2"><a href="https://twitter.com/paoloconi96">Twitter</a></li>
                <li className="inline m-2"><a href="https://www.instagram.com/paoloconi96/">Instagram</a></li>
            </ul>
            <p className="mt-2">© Copyright {year} - Paolo Conizzoli, All right reserved.</p>
            <p className={"mt-2 text-slate-500"}>
                Made in <Link href="https://nextjs.org/"><a>Next.js</a></Link>, deployed on
                <Link href="https://vercel.com/"><a>Vercel</a></Link>.
            </p>
        </footer>
    );
}