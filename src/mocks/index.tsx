import { Event } from "redux/events/types";

const events: Event[] = [
    {
        id: 1,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 2,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 3,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 4,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 5,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 6,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    },
    {
        id: 7,
        name: "14. Győrkőcfesztivál",
        details:
            "A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13. Győrkőcfesztivált le kelle...",
        startDate: "2021.07.02. 17:00",
        endDate: "2021.07.04. 19:00",
        location: "Győr Városháza",
        contact: "Elérhetőség megtalálható a Facebook eseménynél.",
        category: "Fesztivál",
        coverUrl: "http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
    }
];

export const fetchEvents = () => new Promise(resolve => setTimeout(() => resolve(events), 1000));
