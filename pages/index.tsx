import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Message";

export default function Home() {
    const [messages, setMessages] = useState([
        { from: "computer", text: "Hi, My Name is HoneyChat" },
        { from: "me", text: "Hey there" },
        { from: "me", text: "Myself Ferin Patel" },
        {
            from: "computer",
            text: "Nice to meet you. You can send me message and i'll reply you with same message.",
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = () => {
        if (!inputMessage.trim().length) {
            return;
        }
        const data = inputMessage;

        setMessages(old => [...old, { from: "me", text: data }]);
        setInputMessage("");

        setTimeout(() => {
            setMessages(old => [...old, { from: "computer", text: data }]);
        }, 1000);
    };
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
            <Flex w="100%" h="100vh" justify="center" align="center">
                <Flex w="100%" h="90%" flexDir="column">
                    <Header />
                    <Divider />
                    <Messages messages={messages} />
                    <Divider />
                    <Footer
                        inputMessage={inputMessage}
                        setInputMessage={setInputMessage}
                        handleSendMessage={handleSendMessage}
                    />
                </Flex>
            </Flex>
        </>
    );
}
