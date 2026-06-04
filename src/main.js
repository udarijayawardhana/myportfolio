// === Styles ===
import './styles/index.css';

// === Components ===
import { Grain } from './components/Grain.js';
import { Nav } from './components/Nav.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Experience } from './components/Experience.js';
import { Achievements } from './components/Achievements.js';
import { Education } from './components/Education.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// === Features ===
import { initCursor } from './features/cursor.js';
import { initNav } from './features/nav.js';
import { initReveal } from './features/reveal.js';
import { initSkillBars } from './features/skillBars.js';
import { initTimeline } from './features/timeline.js';
import { initTyper } from './features/typer.js';
import { initContactForm, initFooterYear } from './features/contactForm.js';

// === Build DOM ===
const app = document.getElementById('app');

app.innerHTML = [
  Grain(),
  Nav(),
  '<main>',
  Hero(),
  About(),
  Skills(),
  Projects(),
  Experience(),
  Achievements(),
  Education(),
  Contact(),
  '</main>',
  Footer(),
].join('\n');

// === Initialize Features ===
initCursor();
initNav();
initReveal();
initSkillBars();
initTimeline();
initTyper();
initContactForm();
initFooterYear();
