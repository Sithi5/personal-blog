'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';
import GomokuImage from '/assets/images/gomoku-board.svg';
import CrimeHackerIcon from '/assets/images/crime-hacker-icon.svg';
import ExpertSystemIcon from '/assets/images/expert-system.svg';
import InceptionIcon from '/assets/images/inception.svg';

export default function ProjectsCardsSlide() {
    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
                <ProjectCard
                    projectTitle="Gomoku"
                    svgImage={GomokuImage}
                    projectFocus="AI programming project"
                    programmingLanguage="Rust/Python"
                    href="https://github.com/Sithi5/Gomoku"
                    projectDescription={
                        'A game of Gomoku integrates an AI player capable of defeating a human player using a negamax with heuristic and alpha beta pruning algorithm'
                    }
                />
                <ProjectCard
                    projectTitle="Override"
                    svgImage={CrimeHackerIcon}
                    projectFocus="System exploitation project"
                    programmingLanguage="C/GDB/Shell/Python"
                    href="https://github.com/Sithi5/Override"
                    projectDescription={
                        'CTF challenge to deepen understanding of security and improve problem-solving skills like those found on root-me.org'
                    }
                />
                <ProjectCard
                    projectTitle="Expert System"
                    svgImage={ExpertSystemIcon}
                    projectFocus="AI programming project"
                    programmingLanguage="Python"
                    href="https://github.com/Sithi5/expert-system"
                    projectDescription={
                        'Expert system for propositional calculus using a backward-chaining inference engine to evaluate rules and facts with "AND", "OR", "XOR" conditions and negation'
                    }
                />
                <ProjectCard
                    projectTitle="Inception-of-Things"
                    svgImage={InceptionIcon}
                    projectFocus="IOT and deployment project"
                    programmingLanguage="K3d/Kubernetes/Vagrant/CentOs/VirtualBox"
                    href="https://github.com/Sithi5/Inception-of-Things"
                    projectDescription={
                        'This project aims to introduce the basics of Kubernetes by setting up virtual environments using Vagrant, K3s, and K3d with Argo CD.'
                    }
                />
            </div>
        </Slide>
    );
}
