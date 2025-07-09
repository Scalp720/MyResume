import Hero from '@/components/Hero';
import NavigationBar from '@/components/NavigationBar';
import MyProjects from '@/components/MyProjects';
import Skills from '@/components/Skills';
import AchievementsShowcase from '@/components/Achievements';
import Resume from '@/components/Resume';
import Footers from '@/components/Footers';
import global from 'global.css'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#212121]">
      <NavigationBar />

      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <AchievementsShowcase />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <Footers />
    </div>
  );
}

