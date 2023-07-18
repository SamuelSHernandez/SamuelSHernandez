import React, { useState } from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Tabs,
    Tab,
} from '@mui/material';

interface Project {
    name: string;
    description: string;
    githubLink: string;
    imageUrl: string;
}

const projectsData: Project[] = [
    {
        name: 'Avidrone Avalanche Rescue',
        description: 'I contributed to the Avidrone Avalanche Rescue project as part of my Senior Capstone project, whose goal was to create a drone capable of completing an avalanche rescue searching procedure autonomously. During the 2021-2022 academic year, we expanded search missions by implementing primary search and creating testing tools for both search algorithms. We improved hardware by fixing pre-existing shortcomings which prevented practical use. Additionally, we designed a user interface for fast deployment and an improved user experience. We successfully improved the drone on all fronts, bringing it closer to real-life deployment.',
        githubLink: 'https://github.com/AviDrone/backend',
        imageUrl: 'https://free4kwallpapers.com/uploads/originals/2015/10/12/avalanche-wallpaper.jpg',
    },
    {
        name: 'Formula AI',
        description: 'I created a basic Reinforced Learning algorithm to teach a simulated car how to go around a track. Taking inspiration from Formula 1, I used real-life tracks from the F1 2022 calendar.',
        githubLink: 'https://github.com/SamuelSHernandez/FormulaAI',
        imageUrl: 'https://raw.githubusercontent.com/SamuelSHernandez/FormulaAI/main/assets/Monza_.png',
    },
    {
        name: 'Personal Portfolio Site',
        description: 'The website you\'re exploring right now was built using React (Typescript) and uses Material UI for styling and creating the elements you see.',
        githubLink: 'https://github.com/SamuelSHernandez/SamuelSHernandez/tree/main/app',
        imageUrl: 'url_to_project3_image',
    },
];

function ProjectDetails({ project, onPrev, onNext }: { project: Project; onPrev: () => void; onNext: () => void }) {
    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '80%', maxWidth: 800 }}>
                    <CardMedia component="img" image={project.imageUrl} title={project.name} height="420" />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            {project.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={project.githubLink} target="_blank">
                            GitHub
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button color="primary" onClick={onPrev}>
                    Back
                </Button>
                <Button color="primary" onClick={onNext}>
                    Next
                </Button>
            </Box>
        </div>
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedProject(newValue);
    };

    const handlePrev = () => {
        setSelectedProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedProject((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Projects Page
            </Typography>
            <Tabs value={selectedProject} onChange={handleChange} indicatorColor="primary">
                {projectsData.map((project, index) => (
                    <Tab key={index} label={project.name} />
                ))}
            </Tabs>
            <ProjectDetails
                project={projectsData[selectedProject]}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
}

export default Projects;