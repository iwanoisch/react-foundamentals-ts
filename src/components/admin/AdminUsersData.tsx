export interface User {
    id: number;
    name: string
    isAdmin: boolean;
}

export const mockAdminusersData: User[] = [
    { id: 1, name: "Fred", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Jane", isAdmin: true },
];
