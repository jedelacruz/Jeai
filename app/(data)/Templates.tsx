export default [
    
    
    {
        name: "AI General Chat - English",
        desc: "A tool to have a general conversation with AI on any topic.",
        category: "General",
        icon: "https://cdn-icons-png.flaticon.com/128/5154/5154780.png", 
        aiPrompt: "Engage in a conversation on any topic with the user. Provide friendly and helpful responses.",
        slug: "ai-chat",
        form: [
            {
                label: "Enter your question or topic",
                field: "textarea",
                name: "query",
                required: true
            }
        ]
    },

    {
        name: "AI General Chat - TagLish",
        desc: "Isang tool para makipag-usap sa AI gamit ang kombinasyon ng Tagalog at English sa kahit anong paksa.",
        category: "General",
        icon: "https://cdn-icons-png.flaticon.com/128/5154/5154780.png", 
        aiPrompt: "Makipag-usap sa user gamit ang kombinasyon ng Tagalog at English sa kahit anong paksa. Magbigay ng magiliw at kapaki-pakinabang na mga sagot na nakakaintindi ng Taglish.",
        slug: "ai-chat-taglish",
        form: [
            {
                label: "Ilagay ang iyong tanong o paksa",
                field: "textarea",
                name: "query",
                required: true
            }
        ]
    },
    


    

    {
        name: "Plagiarism Rewriter",
        desc: "Rewrites the provided text to make it sound original and human-written, effectively reducing plagiarism.",
        category: "Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/891/891462.png",
        aiPrompt: "Rewrite the following text to sound more natural, human-like, and original. Ensure the rewritten content is free of plagiarism while retaining the original meaning.",
        slug: "plagiarism-rewriter",
        form: [
            {
                label: "Paste the text you want to rewrite",
                field: "textarea",
                name: "inputText",
                required: true
            }
        ]
    },

    {
        name: "Generate Code",
        desc: "Generates code snippets based on a given description or requirement.",
        category: "Development",
        icon: "https://cdn-icons-png.flaticon.com/128/1965/1965604.png",
        aiPrompt: "Generate a code snippet for the following description in the specified programming language. Format the code properly and include comments for clarity.",
        slug: "generate-code",
        form: [
            {
                label: "Describe what the code should do",
                field: "textarea",
                name: "description",
                required: true
            },
            {
                label: "Specify programming language",
                field: "input",
                name: "language",
                required: true
            }
        ]
    },
    {
        name: "Explain Code",
        desc: "Provides a detailed explanation of the provided code snippet.",
        category: "Development",
        icon: "https://cdn-icons-png.flaticon.com/128/3312/3312719.png",
        aiPrompt: "Explain the following code snippet in detail. Include explanations of key functions, syntax, and purpose. Suggest improvements if possible.",
        slug: "explain-code",
        form: [
            {
                label: "Paste your code here",
                field: "textarea",
                name: "code",
                required: true
            },
            {
                label: "Specify language (optional)",
                field: "input",
                name: "language"
            }
        ]
    }
];
