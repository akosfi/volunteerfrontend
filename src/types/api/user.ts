export type UserBase = {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    city: string;
};

export type UserRegistrationRequestPayload = UserBase;
