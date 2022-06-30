import '../styles/globals.css'
import {useEffect} from "react";
import { appWithTranslation } from 'next-i18next';

function MyApp({Component, pageProps}) {
    useEffect(() =>
    {
        document.body.classList.add("bg-gradient-to-tr");
        document.body.classList.add("from-black");
        document.body.classList.add("to-slate-900");
        document.body.classList.add("text-white");
        document.body.classList.add("min-h-screen");
        document.body.classList.add("flex");
        document.body.classList.add("items-center");
    });

    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
