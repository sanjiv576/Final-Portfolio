import {
    mobile,
    backend,
    creator,
    firebase,
    mobileApps,
    iot,
    webApps,
    restApi,
    java,
    python,
    dart,
    flutter,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

    vehicleGPSTrackingImg,
    digitalSchoolImg,
    samanKinamImg,
    mobileTableReservationLogo,
    hgrLogo,
    hgrLSTM,
    fakeNewsDetection,
    healthBankSystem,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "testimonials",
        title: "Testimonials",
    },

];

const services = [
    {
        title: "Mobile Apps",
        icon: mobileApps,
    },
    {
        title: "Web Apps",
        icon: webApps,
    },
    {
        title: "RESTful API",
        icon: restApi,
    },
    {
        title: "IOT",
        icon: iot,
    },
];

const technologies = [
    {
        name: "dart",
        icon: dart,
    },

    {
        name: "flutter",
        icon: flutter,
    },
    {
        name: "firebase",
        icon: firebase,
    },


    {
        name: "HTML 5",
        icon: html,
    },

    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },


];

const experiences = [
    {
        title: "Hand Gesture Detection using LSTM deep neural network",
        company_name: "Academic Thesis - Desktop App",
        icon: hgrLogo,
        iconBg: "#E6DEDD",
        date: "October 2023 - January 2023",
        points: [
            "Train dataset under LSTM model.",
            "Capture live hand gestures using Webcam.",
            "Detect several hand gestures.",
            "Translate recognized hand gestures into text form.",
        ],
    },
    {
        title: "E-commerce API",
        company_name: "RESTful API",
        icon: restApi,
        iconBg: "#E6DEDD",
        date: "October 2023 - December 2023",
        points: [
            "Provides strong security measures like hashing password, session expiration, account lock and so on.",
            "Averts any kinds of Bruteforce and DoS attacks.",
            "HTML tags and input sanitization.",
            "Use of SSL certificate for data encryption.",
        ],
    },
    {
        title: "Table Reservation System",
        company_name: "Mobile App",
        icon: mobileTableReservationLogo,
        iconBg: "#383E56",
        date: "April 2023 - September 2023",
        points: [
            " Provide user-friendly user interfaces for reserving tables based on number of diners, location, and time.",
            "Allow the customers to search restaurants or other food establishments by name or location.",
            "Allow the restaurant owners to maintain reservation system efficiently and conveniently.",
            "Provide flexibility to the customers for modifying the reservation.",
            "Integeration of sensors (Gyroscope and Proximity) for changing theme and take screenshot respectively.",
            "Order food while reserving tables and pay via Khalti.",
        ],
    },
    {
        title: "Table Reservation System",
        company_name: "Web App",
        icon: mobileTableReservationLogo,
        iconBg: "#E6DEDD",
        date: "June 2023 - August 2023",
        points: [
            "Managing phone reservations during peak hours becomes a challenging task for restaurant owners.",
            "Reduce lengthy wait times for a table result in customers opting for alternative dining options, causing restaurant owners to lose potential business",
            "Even after securing a table, customers often experience additional waiting times of 10-15 minutes to receive their ordered food.",
            "Customers desire access to restaurant details and reviews from other patrons before choosing a place to dine with loved ones.",
        ],
    },
    
    
];

const testimonials = [
    {
        id: 1,
        testimonial:
            "Sanjiv excels in teamwork, effectively collaborating to achieve goals, demonstrating resilience, problem-solving skills, and a commitment to continuous learning, showcasing a diligent work ethic.",
        name: "Rohit Jha",
        designation: "Web/ML Developer",
        company: "Pridology InfotTech",
        image: "rohitJha.png",
    },
    {
        id: 2,
        testimonial:
            "Sanjiv Shrestha's exceptional qualities truly stand out in his approach to learning and teamwork. Despite challenges, he demonstrated remarkable resilience by persistently seeking knowledge and actively engaging with the subject matter. His proactive attitude was evident when he took the initiative to ask insightful questions about vulnerabilities, even when others remained silent. Sanjiv's dedication to mastering the material translated into excellent problem-solving skills, as he consistently excelled in assignments and completed tasks promptly. His commitment to learning, coupled with his hard work, made him one of the top students in my security for developer class. Sanjiv's ability to tackle challenges head-on and his unwavering determination truly set him apart.",
        name: "Arya Pokharel",
        designation: "Lecturer",
        company: "Softwarica College of IT and E-commerce",
        image: "aaryaPokharel.jpg",
    },
    {
        id: 3,
        testimonial:
            "Sanjiv is a hardworking and a team person who does his tasks properly and communicates well.",
        name: "Shasmit Basent",
        designation: "Flutter Developer",
        company: "Kathmandu Codes",
        image: "shasmitBasnet.jpg",
    },
    {
        id: 4,
        testimonial:
            "Very hardworking , very curious and always willing to learn.",
        name: "Aaryan Basnet",
        designation: "Associate backend developer",
        company: "Neural Evo",
        image: "aryanBasnet.jpg",
    },
];

const projects = [

    {
        id: "1",
        name: "Vehicle GPS Tracking System",
        description:
            "This IOT application has been developed to address the abuse of using vehicles for illicit purposes without the knowledge or consent of the vehicle's owner, including companies, government agencies, industries, and organizations. Problems such as student kidnappings from school buses, the use of incorrect routes for delivering raw materials to industries, vehicle theft or loss, and the unauthorized use of vehicles for the personal benefit of drivers are issues faced by vehicle owners. These occurrences not only decrease the financial standing but also tarnish the reputation of the victimized organizations.",
        tags: [
            {
                name: "Neo-6M GPS",
                color: "blue-text-gradient",
            },
            {
                name: "NodeMCU ESP8266",
                color: "green-text-gradient",
            },
            {
                name: "Arduino",
                color: "pink-text-gradient",
            },
        ],
        image: vehicleGPSTrackingImg,
        source_code_link: "https://github.com/sanjiv576/Vehicle_GPS_Tracking_System",
        demo_link: "https://www.youtube.com/watch?v=d4d5YejqvDw",

    },
    {
        id: "2",
        name: "Samaan Kinam (E-commerce)",
        description:
            "Samaan Kinam is a secured online web-based application for purchasing goods and products.This e-commerce application provides security measures against potential threats such as Bruteforce attacks, Defacement, DoS, and XSS. To guarantee the safety of transactions during the purchase of goods, the Khalti payment gateway has been incorporated into the system to create a secure financial transaction environment.",
        tags: [
            {
                name: "MongoDB",
                color: "blue-text-gradient",
            },
            {
                name: "RESTful API",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: samanKinamImg,
        source_code_link: "https://github.com/sanjiv576/E_Commerce_Web",
        demo_link: "https://www.youtube.com",
    },
    {
        id: "3",
        name: "Fake News Detection Using ML algorithms",
        description:
            "This web application determines whether provided news is fake or real by analyzing specific patterns using supervised machine learning algorithms, including Random Forest, Decision Tree, and Logistic Regression. The dataset, sourced from Kaggle.com, comprises approximately 4,009 records from various internet articles, featuring attributes such as URLs, headlines, bodies, and labels. After preprocessing, the dataset size is reduced to 3,988 records, which are categorized into 1,868 real news and 2,120 fake news. For the fake news detection, the application utilizes two key features: text and label. In this context, a label of zero indicates unreliable (fake) news, while a label of one signifies real news.",
        tags: [
            {
                name: "Logistic Regression",
                color: "blue-text-gradient",
            },
            {
                name: "Random Forest",
                color: "green-text-gradient",
            },
            {
                name: "Decision Tree",
                color: "pink-text-gradient",
            },
        ],
        image: fakeNewsDetection,
        source_code_link: "https://github.com/sanjiv576/HGR_LSTM",
        demo_link: "https://www.youtube.com",
    },
    
    {
        id: "4",
        name: "Health Bank System",
        description:
            "This IOT application designed to enhance access to healthcare in remote regions by allowing the monitoring of physical health status. This application is capable of measuring vital signs such as heart rate, body temperature, air quality, surrounding temperature and humidity. By leveraging connected sensors and devices, it collects real-time data from individuals, which can then be transmitted to healthcare providers for analysis and monitoring.",
        tags: [
            {
                name: "Node MCU",
                color: "blue-text-gradient",
            },
            {
                name: "MLX90614",
                color: "green-text-gradient",
            },
            {
                name: "DHT22",
                color: "pink-text-gradient",
            },
            {
                name: "MQ135",
                color: "yellow-text-gradient",
            },
            {
                name: "ECG Sensor AD8232",
                color: "red-text-gradient",
            },
        ],
        image: healthBankSystem,
        source_code_link: "https://github.com/sanjiv576/Health_Bank_Center_App",
        demo_link: "https://www.youtube.com/watch?v=j4aXS20modA",

    },
    {
        id: "5",
        name: "Movie Ticket Booking System API",
        description:
            "This RESTful API offers a comprehensive set of features designed to facilitate the online booking of movie tickets. It allows users to browse a list of currently available movies, complete with essential details such as titles, genres, durations, ratings, and showtimes. Users can view detailed information about each movie to make informed choices. The API supports ticket bookings, enabling users to select preferred showtimes and seats, ensuring a seamless booking experience.",
        tags: [
            {
                name: "MongoDB",
                color: "blue-text-gradient",
            },
            {
                name: "RESTful API",
                color: "green-text-gradient",
            },
            {
                name: "NodeJs",
                color: "pink-text-gradient",
            },
        ],
        image: restApi,
        source_code_link: "https://github.com/sanjiv576/movie_ticket_booking_api",
        demo_link: "https://www.youtube.com",
    },
    {
        id: "6",
        name: "Hand Gesture Recognition System",
        description:
            "This research aims to recognize the hands gestures and show the results into the text to help disabled people in communication. ‘Hello’, ‘Thanks’, and ‘I love you’ hand gestures are used and trained into the model. The proposed system uses the MediaPipe holistic for extracting the landmarks from the face, pose, and hands. Similarly, the LSTM neural network model is used  based on past research works. However, the proposed model architecture is new and different from  the past works, where the preprocessed data are trained into the 3 layers of the LSTM and Dense algorithms. This model gives an 80% accuracy rate.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "LSTM",
                color: "green-text-gradient",
            },
            {
                name: "Neural networks",
                color: "pink-text-gradient",
            },
        ],
        image: hgrLSTM,
        source_code_link: "https://github.com/sanjiv576/HGR_LSTM",
        demo_link: "https://www.youtube.com/watch?v=KYzaswMxN00",
    },
    {
        id: "7",
        name: "Digital School System",
        description:
            "This web application has been developed to address the problems of school and students for having proper announcements. However, it also focuses on conveying the messages and information to the parents and public about the school along with its activities and achievements.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "SQL",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "yellow-text-gradient",
            },
            {
                name: "JavaScript",
                color: "red-text-gradient",
            },
        ],
        image: digitalSchoolImg,
        source_code_link: "https://github.com/sanjiv576/school_website",
        demo_link: "https://www.youtube.com/watch?v=Vwh7E3M2R0U",

    },
    
];

export { services, technologies, experiences, testimonials, projects };