import Link from "next/link";

export default function Footer({year}) {
    return (
        <footer className="text-center mt-16 md:mt-12">
            <ul className="mt-10">
                <li className="inline m-2"><Link
                    href="/github"
                    className={"hover:underline focus:underline"}>
                    Github
                </Link></li>
                <li className="inline m-2"><Link
                    href="/linkedin"
                    className={"hover:underline focus:underline"}>
                    Linkedin
                </Link></li>
            </ul>
            <p className="mt-2">© Copyright {year} - Paolo Conizzoli, All right reserved.</p>
        </footer>
    );
}
