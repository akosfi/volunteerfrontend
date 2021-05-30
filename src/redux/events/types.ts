export type Event = {
    id: number;
    name: string;
    details: string;
    startDate: string;
    endDate: string;
    location: string;
    contact: string;
    category: string;
    coverUrl: string;
};

export type Member = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
};
