import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";
import work7 from "../images/work7.jpg";
import work8 from "../images/work8.jpg";
import work9 from "../images/work9.jpg";
import work10 from "../images/work10.jpg";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";

export const all = {
  services: [
    {
      id: 0,
      name: "Чоловіча зачіска",
      price: "60",
    },
    {
      id: 1,
      name: "Жіноча зачіска",
      price: "100",
    },
    {
      id: 2,
      name: "Дитяча зачіска",
      price: "30",
    },
    {
      id: 3,
      name: "Стильна зачіска",
      price: "150",
    },
    {
      id: 4,
      name: "Бриття",
      price: "20",
    },
  ],

  contacts: {
    address: "ВУЛ.РАСКОВА 13/2",
    phoneNumber: "+38 097 099 09 90",
    schedule: "Пн – Нд: 10:00 – 20:00",
    social: {
      telegram: "#",
      instagram: "#",
      facebook: "#",
      viber: "#",
    },
  },

  works: [
    {
      photo: work1,
    },
    {
      photo: work2,
    },
    {
      photo: work3,
    },
    {
      photo: work4,
    },
    {
      photo: work5,
    },
    {
      photo: work6,
    },
    {
      photo: work7,
    },
    {
      photo: work8,
    },
    {
      photo: work9,
    },
    {
      photo: work10,
    },
  ],

  barbers: [
    {
      id: 0,
      name: "Артур",
      description:
        "Артур - видит что нужно делать, и делает что велит " +
        "собственное чувство стиля. " +
        "Гармония стрижки и стиля - не заменимая часть имиджа...",
      image: barber1,
      schedule: {
        days: [
          {
            id: 0,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 1,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 2,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 3,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 4,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 5,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 6,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 1,
      name: "Сергій",
      description:
        "Сергей,знает свое дело на отлично, " +
        "стрижка и борода - это его стихия.",
      image: barber2,
      schedule: {
        days: [
          {
            id: 0,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 1,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 2,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 3,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 4,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 5,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
          {
            id: 6,
            visits: [
              {
                id: 0,
                time: "09:00 - 10:00",
                isFree: true,
              },
              {
                id: 1,
                time: "10:00 - 11:00",
                isFree: false,
              },
              {
                id: 2,
                time: "11:00 - 12:00",
                isFree: true,
              },
              {
                id: 3,
                time: "12:00 - 13:00",
                isFree: false,
              },
              {
                id: 4,
                time: "13:00 - 14:00",
                isFree: false,
              },
              {
                id: 5,
                time: "14:00 - 15:00",
                isFree: true,
              },
              {
                id: 6,
                time: "15:00 - 16:00",
                isFree: true,
              },
              {
                id: 7,
                time: "16:00 - 17:00",
                isFree: false,
              },
              {
                id: 8,
                time: "17:00 - 18:00",
                isFree: true,
              },
              {
                id: 9,
                time: "18:00 - 19:00",
                isFree: false,
              },
            ],
          },
        ],
      },
    },
  ],
};

export default { all };
