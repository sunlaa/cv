import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';

interface Project {
  title: string;
  desc: string;
  src: string;
  link: string;
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
      desc: 'Train ticketing app. It was developed in a team of 2 people, using Angular framework and PrimeNG library.',
      src: 'train.png',
      link: 'https://train-app.netlify.app/',
    },
    {
      title: 'Echoes of vinyl',
      desc: 'E-commerce app for selling vinyl records and record players. Developed in a team of 3 people. It was developed without using frameworks and libraries.',
      src: 'e-commerce.png',
      link: 'https://echoes-of-vinyl.netlify.app/',
    },
    {
      title: 'Youtube Client',
      desc: 'The first application developed using Angular framework. Basic features of the framework and Youtube API were used.',
      src: 'youtube.png',
      link: 'https://task7-youtube-client.netlify.app/',
    },
    {
      title: 'Async-Race',
      desc: "Racing application where cars respond to requests sent to a server. The server's responses determine their speed and manage errors, enabling realistic animations or stops. (requires running a local server)",
      src: 'race.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/async-race/',
      serverLink: 'https://github.com/mikhama/async-race-api',
    },
    {
      title: 'Fun Chat',
      desc: 'A chat application for communication, using WebSocket technology. (requires running a local server)',
      src: 'chat.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/fun-chat/',
      serverLink: 'https://github.com/rolling-scopes-school/fun-chat-server',
    },
    {
      title: 'Puzzle',
      desc: 'A game for learning English by assembling pictures from puzzles. It supports progress tracking through the levels.',
      src: 'puzzle.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/rss-puzzle/',
    },
    {
      title: 'Nonograms',
      desc: 'A Nonograms game where you need to reveal the hidden picture using numerical clues. The game supports progress saving and a leaderboard.',
      src: 'nonogram.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/nonograms/',
    },
    {
      title: 'Hangman',
      desc: 'A Hangman game where you need to guess the word based on a given clue, with a limited number of attempts.',
      src: 'hangman.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/hangman/',
    },
    {
      title: 'Coffee house',
      desc: 'Layout created from Figma, with added interactivity using JavaScript.',
      src: 'coffee.png',
      link: 'https://rolling-scopes-school.github.io/sunlaa-JSFE2023Q4/coffee-house/home.html',
    },
  ];
}
