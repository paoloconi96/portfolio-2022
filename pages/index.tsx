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

                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png"/>
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png"/>
                <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16"/>
                <meta name="msapplication-TileImage" content="assets/img/favicon/mstile-144x144.png" />
                <script id="cookieyes" type="text/javascript" defer
                        src="https://cdn-cookieyes.com/client_data/3f488cc825f717e7896160e1/script.js"></script>
            </Head>

            <main className={styles.main}>
                <section className="w-100 text-center container">
                    <div className="mb-12">
                        <Image className="rounded-full" src="/me.jpg" width="150px" height="150px" alt={"Paolo portrait"}></Image>
                    </div>
                    <h1>{`Hey 🤙 I'm Paolo`}</h1>
                    <p className={"text-xl mt-4 text-slate-400"}>
                        {`I'm a Software Developer and Project Manager, living in 🇮🇹.`}<br/>
                    </p>

                    <section className={"md:w-9/12 lg:w-7/12 mx-auto"}>
                        <p className={"mt-12 mb-4"}>I have <strong className={"text-blue-500"}>over five years in
                            software development</strong>, working on different
                            projects for size and technology used. Over the last few years, in several cases, as coordinator
                            and project manager.</p>
                        <p className={"mt-2 mb-4"}>I consider myself <strong className={"text-blue-500"}>very curious,
                            fast learner and proficient handling my time</strong>; I also have strong teamwork and
                            leadership skills. Because of these qualities, in the last several years, I have been
                            entrusted with many responsibilities. These duties also allowed me to improve in many areas
                            of interest.</p>
                        <p className={"mt-2 mb-4"}>During my relatively short career, I had the opportunity to fill
                            different roles and perform numerous activities types. This dynamism allows me to
                            <strong className={"text-blue-500"}> master the handling of the entire production workflow
                            </strong> and integrate different operational groups.</p>
                    </section>

                    <Link href="mailto:paolo@conizzoli.com">
                        <a className={"mt-8 mr-2 inline-block py-2 px-4 bg-white rounded-lg text-black text-lg"}>{`Let's chat!`}</a>
                    </Link>
                    <Link href="https://cv.conizzoli.com">
                        <a className={"mt-8 inline-block py-2 px-4 bg-white rounded-lg text-black text-lg"}>{`Look at my CV ↗`}</a>
                    </Link>
                </section>
            </main>
        </Layout>
    )
}
