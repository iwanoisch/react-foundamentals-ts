export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    reviews: Review[];
}

export interface Review {
    comment: string;
    reviewer: string;
}

export const getAllProducts = async (): Promise<IProduct[]> => {
    await wait(1000);
    return mockProducts;
};

export const getSingleProduct = async (id: number): Promise<IProduct | null> => {
    await wait(1000);
    const foundProducts = mockProducts.filter(product => product.id === id);
    return foundProducts.length === 0 ? null : foundProducts[0]
}

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const mockProducts: IProduct[] = [
    {
        description:
            "A collection of navigational components that compose declaratively with your app",
        id: 1,
        name: "React Router",
        price: 8,
        reviews: [
            {
                comment: "Excellent! This does everything I want",
                reviewer: "Billy"
            },
            { comment: "The best router I've ever worked with", reviewer: "Sally" }
        ]
    },
    {
        description: "A library that helps manage state across your app",
        id: 2,
        name: "React Redux",
        price: 12,
        reviews: [
            {
                comment: "I've found this really useful in a large app I'm working on",
                reviewer: "Billy"
            },
            {
                comment: "A bit confusing at first but simple when you get used to it",
                reviewer: "Sally"
            }
        ]
    },
    {
        description: "A library that helps you interact with a GraphQL backend",
        id: 3,
        name: "React Apollo",
        price: 12,
        reviews: [
            {
                comment: "I'll never work with a REST API again!",
                reviewer: "Billy"
            },
            {
                comment: "It makes working with GraphQL backends a breeze",
                reviewer: "Sally"
            }
        ]
    }
];
