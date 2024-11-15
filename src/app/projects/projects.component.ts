import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';

interface Project {
  title: string;
  desc: string;
  src: string;
  link: string;
  stack: string[];
  serverLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule, DividerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Chamomile Express',
      desc: 'Train ticket booking application with appropriate functionality, authorization features, and management of schedules, car types, stations and trips for administrative access.',
      src: 'train.png',
      link: 'https://train-app.netlify.app/',
      stack: [
        'Angular',
        'RxJS',
        'NgRx',
        'PrimeNG',
        'TypeScript',
        'SCSS',
        'Jest',
      ],
    },
    {
      title: 'Echoes of vinyl',
      desc: 'E-commerce app for selling vinyl records and record players. The "commercetools" platform was used as API. No third-party libraries were used.',
      src: 'e-commerce.png',
      link: 'https://echoes-of-vinyl.netlify.app/',
      stack: ['TypeScript', 'SASS', 'Webpack', 'ESLint', 'Husky', 'Jest'],
    },
    {
      title: 'Youtube Client',
      desc: 'The first application developed using Angular framework. Basic features of the framework and Youtube API were used.',
      src: 'youtube.png',
      link: 'https://task7-youtube-client.netlify.app/',
      stack: ['Angular', 'RxJS', 'NgRx', 'TypeScript', 'SCSS', 'Jest'],
    },
    {
      title: 'Async-Race',
      desc: "Racing application where cars respond to requests sent to a server. The server's responses determine their speed and manage errors, enabling realistic animations or stops. (requires running a local server)",
      src: 'race.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/async-race/',
      serverLink: 'https://github.com/mikhama/async-race-api',
      stack: ['TypeScript', 'CSS', 'Webpack', 'ESLint', 'Prettier'],
    },
    {
      title: 'Fun Chat',
      desc: 'A chat application for communication, using WebSocket technology. (requires running a local server)',
      src: 'chat.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/fun-chat/',
      serverLink: 'https://github.com/rolling-scopes-school/fun-chat-server',
      stack: [
        'TypeScript',
        'CSS',
        'Webpack',
        'Husky',
        'ESLint',
        'Prettier',
        'WebSocket',
      ],
    },
    {
      title: 'Puzzle',
      desc: 'A game for learning English by assembling pictures from puzzles. It supports progress tracking through the levels.',
      src: 'puzzle.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/rss-puzzle/',
      stack: ['TypeScript', 'CSS', 'Webpack', 'Husky', 'ESLint', 'Prettier'],
    },
    {
      title: 'Nonograms',
      desc: 'A Nonograms game where you need to reveal the hidden picture using numerical clues. The game supports progress saving and a leaderboard.',
      src: 'nonogram.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/nonograms/',
      stack: ['JavaScript', 'CSS'],
    },
    {
      title: 'Hangman',
      desc: 'A Hangman game where you need to guess the word based on a given clue, with a limited number of attempts.',
      src: 'hangman.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/hangman/',
      stack: ['JavaScript', 'CSS'],
    },
    {
      title: 'Coffee house',
      desc: 'Layout created from Figma, with added interactivity using JavaScript.',
      src: 'coffee.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/coffee-house/home.html',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
  ];
}
