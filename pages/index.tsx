import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>ChatGPT App</title>
                <meta
                    name="description"
                    content="A nextjs app using the openAI"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>Chat page</p>
            </main>
        </>
    );
}
