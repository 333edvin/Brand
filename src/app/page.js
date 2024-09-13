import Hero from "./containers/Hero";
import Service from "./containers/Service";
import About from "./containers/About";
import Process from "./containers/Process";
import Action from "./containers/Action";
import SectionPinning from "./components/Transitions/OverlappingSection";


export default function Home() {

  
  
  return (
    <main>
      <Hero />

      <SectionPinning>
        <div className="about">
          <About />
        </div>

        <div className="service">
          <Service />
        </div>
      </SectionPinning>

      <Process />
      <Action />
    </main>
  );
}
