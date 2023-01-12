import React, { useContext } from "react";

const contentData = {
    NEWS_LIST_DATA: [
        {
            id: "1",
            title: "First News Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "2",
            title: "Second News Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "3",
            title: "Third News Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "4",
            title: "Fourth News Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "5",
            title: "Fifth News Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        }
    ],
    RESOURCES_LIST_DATA: [
        {
            id: "1",
            title: "First Resources Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "2",
            title: "Second Resources Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "3",
            title: "Third Resources Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "4",
            title: "Fourth Resources Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        },
        {
            id: "5",
            title: "Fifth Resources Item",
            // imageSrc: require("../assets/adaptive-icon.png"),
            newsLink: "https://google.com"
        }
    ],
    CREDITS: ["credit1", "credit2"],
    GLOSSARY_LIST: [
        {
            id: "1",
            title: "Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "2",
            title: "Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "3",
            title: "Z Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "4",
            title: "C Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "5",
            title: "Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "6",
            title: "A Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        },
        {
            id: "7",
            title: "B Example text",
            paragraph1: "text text text text text text",
            image: "",
            paragraph2: "text text text text text text"
        }
    ],
    TASK_PARTS: [
        {
            title: "Part 1",
            description: "Example description of part 1",
            divisions: [
                {
                    title: "Division 1",
                    description: "Example description for division 1 of part 1",
                    tasks: [
                        {
                            title: "Task 1",
                            description:
                                "Example description of task 1 of division 1 of part 1"
                        },
                        {
                            title: "Task 2",
                            description:
                                "Example description of task 2 of division 1 of part 1"
                        }
                    ]
                }
            ]
        },
        {
            title: "Part 2",
            description: "Example description of part 2",
            divisions: [
                {
                    title: "Division 1",
                    description: "Example description for division 1 of part 2",
                    tasks: [
                        {
                            title: "Task 1",
                            description:
                                "Example description of task 1 of division 1 of part 2"
                        },
                        {
                            title: "Task 2",
                            description:
                                "Example description of task 2 of division 1 of part 2"
                        }
                    ]
                }
            ]
        }
    ]
};

export const ContentDataContext = React.createContext();

export function useContentData() {
    return useContext(ContentDataContext);
}

export default function ContentDataProvider({ children }) {
    const value = {
        ...contentData
    };

    return (
        <ContentDataContext.Provider value={value}>
            {children}
        </ContentDataContext.Provider>
    );
}
