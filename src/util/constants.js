import mockexamapp_img from '../images/mockexamapp.PNG';
import alexanderacademy_logo from '../images/alexanderacademy_logo.png';
import ycarchive_img from '../images/ycarchive.PNG';
import ycarchive_logo from '../images/ycarchive_logo.jpg';
import stocktools_logo from '../images/stocktools_logo.png';
import stocktools_img from '../images/stocktools.png';

// css color theme
export const colors = {
    peach: '#ED938A',
    indigo: '#435BB2',
    ultramarine: '#031424',
    light_blue: '#ABC6F9',
};

export const skills = ['ReactJS', 'Python', 'C Programming', 'Heroku', 'AWS', 'SQL', 'Postgres', 'Django', 'Bootstrap', 'JavaScript', 'Git', 
                        'NLP', 'REST', 'CSS', "Data Science", "Data Mining", "Web Development"]

export const my_linkedin_url = 'https://www.linkedin.com/in/benjamin-chen-07402b142/'
export const my_github_url = 'https://github.com/BenTheNetizen'
export const resume_url = 'https://alexander-academy-files.s3.us-east-2.amazonaws.com/Benjamin+Chen+Resume.pdf'

export const projects = [
    {
        title: "MockExamApp",
        url: "https://www.mockexamapp.com/exam-list/",
        github: "https://github.com/BenTheNetizen/online-testing-app",
        description: `Built a full-stack web application for tutoring company AlexanderAcademy.
        Web app allows students to take both the SAT and ACT examinations using an intuitive interface that features an in-depth scoring
        report, extended time options, and many more testing conveniences.`,
        technologies: ["Django", "Postgres", "Heroku", "AWS S3", "JavaScript"],
        image: mockexamapp_img,
        logo: alexanderacademy_logo,
    },
    {
        title: "YC Archive",
        url: "https://www.ycarchive.com/",
        github: "https://github.com/BenTheNetizen/YC-Archive",
        description: `Built ecommerce website using Shopify Liquid for my custom vintage clothing company YC Archive. Features include text message reminders, 
        embedded Instagram feed, email confirmations, and a custom checkout process.`,
        technologes: ["Shopify Liquid", "Klaviyo", "Instafeed", "SMSBump"],
        image: ycarchive_img,
        logo: ycarchive_logo,
    },
    {
        title: "StockTools",
        url: "https://www.stocktools.co/",
        github: "https://github.com/BenTheNetizen/StockTools",
        description: `StockTools is a free-online resource for users to explore various stock-market related tools.
        Primary features is "StockScraper," a Python application that takes a given subredd on Reddit and performs
        natural language processing to find the hottest stocks in discussion.`,
        technologies: ["Django", "PRAW Library", "NLP", "Openpyxl"],
        image: stocktools_img,
        logo: stocktools_logo,
    },
    {
        title: "All About NLP (AAN)",
        url: "https://aan.how/",
        github: "https://github.com/IreneZihuiLi/AAN2021",
        description: `The AAN Project is a database of papers, tutorials, surveys, lectures, and software that are relevant to NLP. NLP is rapidly growing,
        and, as a result, participating in the field can seem daunting to a student or researcher. The AAN Project aims to provide a platform for learners 
        to quickly find resources that can help them learn NLP. My role was to develop features on the site and maintain its database.`,
        technologies: ["Python", "MySQL", "Django", "Apache Solr"],
    },
    {
        title: "GoodWork", 
        url: null,
        github: "https://github.com/maxyuan6717/GoodWork",
        description: `Why waste energy alone in the gym when you could be using that energy to both positively influence those around you and improve your health?
        GoodWork is an android application that crawls volunteermatch.org for volunteer opportunities around you and uses machine learning to determine which opportunities should be pushed to the user.
        The data that is crawled from the website is first uploaded to a Firebase realtime database. The android app can then access this data and display it to the user. 
        The "10004.txt" file is the training data for the text classification routine within the crawler code, which uses linear regression to predict whether or not a certain volunteer opportunity requires any physical exertion.`,
        technologies: ["Android Studio", "Java", "Firebase", "Text Classification", "Web Scraping"],
    }
]

export const experiences = [
    {
      company: "Orthogonal Trading",
      title: "Quantitative Analyst",
      location: "Sydney, Australia",
      startDate: "April 2021",
      endDate: "August 2021",
      description: `Worked closely with the CTO to develop trading models and back test the firm's trading strategies,
          specifically on their long gamma strategies. Assuming an Ornstein-Uhlenbeck process, developed a strategy for identifying large scale liquidation events
          in the crypto market using statistical techniques and optimization routines. Established Twitter sentiment analysis project as a basis for future trading strategies,
          creating a data pipeline that stored over 1 million tweets in a Postgres database.`,
      technologies: [
        "Python",
        "SQL",
        "Postgres",
        "TweePy",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Scikit-Learn",
      ],
    },
    {
      company: "Firm Prospects",
      title: "Data Analyst",
      location: "Boston, Massachusetts",
      startDate: "June 2021",
      endDate: "August 2021",
      description: `Worked closely with the head of data to redesign the company's data scraping pipeline using Python, involving scraping, clearning,
          validation, and entity extraction. Implemented entity extraction using the SpaCy library for identifying educational credentials in a lawyer's biography,
          achieving an F1 score of 0.87 on a set of 30K+ lawyer bios.`,
      technologies: [
        "Python",
        "Octoparse",
        "SpaCy",
        "NLTK",
        "Named Entity Recognition",
      ],
    },
    {
      company: "Language, Information, and Learning Lab at Yale (LILY)",
      title: "Web Developer",
      location: "New Haven, Connecticut",
      startDate: "March 2021",
      endDate: "Present",
      description: `Assisted Professor Radev and his team in the AAN Project in creating a search for browsing their corpus of 
          resources on NLP and related fields. Maintained MySQL database of the corpus, and created various web features for searching the corpus.`,
      technologies: ["Python", "MySQL", "Django"],
    },
  ];
  