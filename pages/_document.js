import Document, {Html, Head, Main, NextScript} from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html className="scroll-smooth">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-tocuh-icon" href="/icon.ong" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,500;0,700;0,800;1,500&family=Raleway:wght@200;700&display=swap" rel="stylesheet" />
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;