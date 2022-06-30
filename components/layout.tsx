import Footer from "./footer";

export default function Layout({ children, home, year }) {
    return (
        <div className="container lg mx-auto px-4 pt-8 pb-6">
            <main>{children}</main>
            <Footer year={year}></Footer>
        </div>
    );
}