/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactFragment,
    useEffect,
    useRef,
} from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

interface Props {
    messages: any;
}

function AlwaysScrollToBottom() {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = elementRef.current;
        node?.scrollIntoView();
    }, []);

    return <div ref={elementRef} />;
}

export default function Messages(props: Props) {
    const { messages } = props;
    return (
        <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
            {messages.map(
                (
                    item: {
                        from: string;
                        text:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                  any,
                                  string | JSXElementConstructor<any>
                              >
                            | ReactFragment
                            | null
                            | undefined;
                    },
                    index: Key | null | undefined
                ) => {
                    if (item.from === "me") {
                        return (
                            <Flex key={index} w="100%" justify="flex-end">
                                <Flex
                                    bg="black"
                                    color="white"
                                    minW="100px"
                                    maxW="350px"
                                    my="1"
                                    p="3"
                                >
                                    <Text>{item.text}</Text>
                                </Flex>
                            </Flex>
                        );
                    }
                    return (
                        <Flex key={index} w="100%">
                            <Avatar
                                name="OpenAI"
                                src="openai.png"
                                bg="blue.300"
                            />
                            <Flex
                                bg="gray.100"
                                color="black"
                                minW="100px"
                                maxW="350px"
                                my="1"
                                p="3"
                            >
                                <Text>{item.text}</Text>
                            </Flex>
                        </Flex>
                    );
                }
            )}
            <AlwaysScrollToBottom />
        </Flex>
    );
}
