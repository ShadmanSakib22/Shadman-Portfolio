import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Shadman Sakib's Portfolio for Intern Front-End Developer Position"
        />
        <title>Shadman's Portfolio</title>
      </Head>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <RecentProjects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
