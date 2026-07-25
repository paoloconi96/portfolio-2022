import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import {InferGetStaticPropsType} from "next";

export const getStaticProps = () => {
    return {
        props: {
            year: (new Date()).getFullYear(),
        }
    }
}

export default function Home({year}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout home year={year}>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Paolo Conizzoli</title>
                <meta content="Paolo Conizzoli: personal portfolio" name="description" />

                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            </Head>

            <main className={styles.main}>
                <section className="w-100 text-center container">
                    <div className="mb-12">
                        <Image className="inline rounded-full" src="/me.jpg" width="150" height="150" alt={"Paolo portrait"}></Image>
                    </div>
                    <h1>{`Hey! I'm Paolo`}</h1>
                    <p className={"text-xl mt-4 text-slate-400"}>
                        {`I'm a Software Engineer, living in 🇨🇭.`}<br/>
                    </p>

                    <section className={"md:w-9/12 lg:w-7/12 mx-auto"}>
                        <p className={"mt-12 mb-4"}>With <strong className={"text-blue-500"}>more than 10 years of
                            professional experience as a Software Engineer,</strong> I specialize in web and cloud
                            development, with a strong experience collaborating with Product Managers, DevOps, and
                            UI/UX teams.</p>
                        <p className={"mt-2 mb-4"}>I am <strong className={"text-blue-500"}>passionate about tackling
                            complex problems, exploring new technologies, and identifying data-driven issues </strong>
                            in the development lifecycle. This helped me gain trust and lead some of my teams&apos;
                            largest and most challenging projects.</p>
                    </section>

                    <Link
                        href="mailto:paolo.conizzoli@gmail.com"
                        className={"mt-8 mr-2 inline-block py-2 px-4 bg-white rounded-lg text-black text-lg " +
                            "hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-2 " +
                            "focus:outline-offset-2 focus:outline-white"}>
                        {`Let's chat!`}
                    </Link>
                    <Link
                        href="/resume/view"
                        target="_blank"
                        className={"mt-8 inline-block py-2 px-4 bg-white rounded-lg text-black text-lg " +
                            "hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-2 " +
                            "focus:outline-offset-2 focus:outline-white"}>
                        {`Get my resume ↓`}
                    </Link>
                </section>
            </main>
        </Layout>
    );
}
