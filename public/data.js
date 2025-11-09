// Professional data for Michał Korzeniewski
// This file contains merged data from linkedin.json and resume-3.json
// Update this file to easily modify website content

const profileData = {
    basics: {
        name: "Michał Korzeniewski",
        title: "Senior Data Engineer",
        email: "me@mkorzeniewski.com",
        phone: "+48 725421189",
        location: "Lublin, Poland",
        website: "mkorzeniewski.com",
        linkedin: "https://www.linkedin.com/in/mkorzeniewski/",
        photo: "/images/my-photo.png"
    },
    about: "I'm a software engineer with expertise in cloud technologies, distributed systems, and big data. I mostly work with JVM languages such as Scala, Java, and Kotlin. Proficiency in microservices architecture enable me to design and develop robust and scalable software systems. My interests lie in big data and performance optimization. I also keen on various types of data bases and DevOps technologies. I value collaboration and effective communication, which have been key to the success. If you're seeking a dedicated engineer with a passion for innovative solutions, let's connect.",
    work: [
        {
            position: "Senior Data Engineer",
            company: "Tesco Technology",
            location: "Remote, Poland",
            startDate: "2023",
            endDate: "Present",
            highlights: [
                "Develop and maintain ETL pipelines using Scala and Apache Spark on Hadoop to process large-scale customer order data. Enabling better decision-making and analytics.",
                "Led the modernization of a legacy codebase by introducing CI/CD processes, improving deployment efficiency and reducing manual interventions.",
                "Established and advocate engineering best practices, enhancing code quality, maintainability, and collaboration within the team."
            ]
        },
        {
            position: "Data Engineer",
            company: "Allegro",
            location: "Warsaw, Poland",
            startDate: "2021",
            endDate: "2023",
            highlights: [
                "Worked on PPC/PPV Advertising System based on lambda architecture (stream & batch processing) with usage of technologies such as Spark, GCP, Kafka, RxJava, TDD, hexagonal architecture",
                "Migrated ETL processing on GCP, designed and optimized data pipelines, making cost optimisation (infrastructure costs reduced over 60%)",
                "Coordinated process of expanding internationally; designed strategy, cooperated across department"
            ]
        },
        {
            position: "Software Engineer",
            company: "Roche",
            location: "Warsaw, Poland",
            startDate: "2020",
            endDate: "2021",
            highlights: [
                "Developed distributed research decision platform leveraging ML & AI. Collaborated with scientist teams based in US",
                "Enabled product to scale by leading changes and advocating reactive approach in my team (instance numbers have been reduced from 25 to 2 with no memory leaks)"
            ]
        },
        {
            position: "Software Engineer",
            company: "Reckitt Benckiser",
            location: "Warsaw, Poland",
            startDate: "2018",
            endDate: "2020",
            highlights: [
                "Developed a distributed system for collecting worldwide clients survey data with technologies like Vert.x, RxJava, Hazelcast",
                "Led architecting and implementing a data stream processing solution using AWS Kinesis, Lambda (Python) with an IOC written in terraform"
            ]
        }
    ],
    skills: {
        languages: ["Java", "Scala", "Kotlin", "Python", "Bash"],
        bigData: ["Apache Spark", "Apache Airflow", "BigQuery", "Dataproc", "Hive", "Hadoop", "Jupyter Notebooks"],
        aiLangchain: ["LangChain", "LLM", "Huggingface", "Machine Learning"],
        cloudDevops: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "Linux"],
        frameworks: ["Spring Boot", "Spring Cloud", "Spring Webflux", "RxJava", "Spock"],
        data: ["Kafka", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elastic Search"]
    },
    education: [
        {
            degree: "Master's Degree in Computer Science",
            institution: "Warsaw University of Technology",
            location: "Warsaw, Poland",
            startDate: "2019",
            endDate: "2021",
            gpa: "4.63/5 - Very Good",
            thesis: "Cloud computing security – a secure container orchestration"
        },
        {
            degree: "Bachelor's Degree in Mechanical Engineering",
            institution: "Warsaw University of Technology",
            location: "Warsaw, Poland",
            startDate: "2015",
            endDate: "2019",
            thesis: "Computational analysis of flow around levitating oil droplet"
        }
    ],
    certifications: [
        {
            name: "Professional Data Engineer",
            issuer: "Google Cloud",
            issued: "May 2022",
            expired: "May 2024",
            credentialUrl: "https://www.credential.net/c1495d63-756e-43c0-b632-3fe1589db335"
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services (AWS)",
            issued: "Aug 2022",
            expired: "Aug 2025",
            credentialUrl: "https://www.credly.com/badges/6cb0f813-7d47-483e-967b-4ca7c6ba866d/linked_in_profile"
        }
    ],
    projects: [
        {
            name: "Hackathons",
            description: "Member of the award-winning hackathon team",
            url: "https://krakenteam.it",
            technologies: ["Python", "Django", "Huggingface", "LLM", "Postgres", "Docker"],
            awards: [
                "Participant of Hack(art)hon (Sep 2022)",
                "Finalist of Kimaton dla Miast (Nov 2021)"
            ]
        },
        {
            name: "TokLok",
            description: "Messaging app - improving infrastructure, optimising costs, developing integration with payment system",
            technologies: ["Java", "MongoDB", "MQTT", "Redis", "RabbitMQ", "Spring Boot", "AWS", "Axon"]
        },
        {
            name: "OpenTelemetry Java",
            description: "Contribution to an open source project",
            technologies: ["Java", "Open Source"]
        }
    ]
};

