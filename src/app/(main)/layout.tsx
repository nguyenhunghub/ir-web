import Footer from "../_components/footer";
import Header from "../_components/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
