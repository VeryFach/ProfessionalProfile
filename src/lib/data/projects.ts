import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: 'Phishing Email Detection',
        title: 'Phishing Email Detection',
        description: 'Build a robust ML model to detect phishing emails using supervised learning techniques.',
        imageUrl: '/images/projects/emailphising.jpg',
        tags: ['Pandas', 'NumPy', 'Scikit-Learn', 'Wordcloud', 'Matplotlib'],
        demoUrl: 'https://ecommerce-dashboard.example.com',
        githubUrl: 'https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git',
        featured: true,
        completionDate: '2024-12-15'
    },
    {
        id: 'Obesity Risk Classification',
        title: 'Obesity Risk Classification',
        description: 'Develop an obesity classification model considering variables such as gender, age, lifestyle habits, and family history.',
        imageUrl: '/images/projects/obesity.jpg',
        tags: ['Pandas', 'NumPy', 'Scikit-Learn', 'Xgboots', 'Seaborn'],
        demoUrl: 'https://music-app.example.com',
        githubUrl: 'https://github.com/VeryFach/Comprehensive-Predictive-Modeling.git',
        featured: true,
        completionDate: '2024-11-05'
    },
    {
        id: 'House Prices Prediction',
        title: 'House Prices Prediction',
        description: 'Predict house sale prices using the Ames Housing dataset, featuring 79 explanatory variables.',
        imageUrl: '/images/projects/House.jpg',
        tags: ['Pandas', 'NumPy', 'Scikit-Learn', 'Seaborn'],
        demoUrl: 'https://travel.example.com',
        githubUrl: 'https://github.com/VeryFach/House-Prices.git',
        featured: true,
        completionDate: '2024-09-20'
    },
    {
        id: 'Real Rate DevSecOps',
        title: 'Real Rate DevSecOps',
        description: 'RealRate is a web application inspired by IMDb, designed to allow users to rate and review movies.',
        imageUrl: '/images/projects/Rate.jpg',
        tags: ['React', 'Vite', 'Node.js', 'Docker', 'Kubernetes'],
        demoUrl: 'https://travel.example.com',
        githubUrl: 'https://github.com/AmosJuang/DevSecOps.git',
        featured: true,
        completionDate: '2024-09-20'
    },
];