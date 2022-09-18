//Import Images
import react from "./img/react1.jpg";
import react2 from "./img/react2.jpg";
import js from "./img/js1.jpg";
import js2 from "./img/js1.jpg";
import soon from "./img/soon1.jpg";
import soon2 from "./img/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interaktiv React va Redux",
      mainImg: react,
      price: 700,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      price: 500,
      url: "/courses/soon",
      secondaryImg: soon2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Interaktiv JavaScript",
      mainImg: js,
      price: 600,
      url: "/courses/javascript",
      secondaryImg: js2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
