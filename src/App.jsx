
import './App.css'
import Card from './components/Section'
import SearchIcon from './assets/SearchIcon.svg'
import Lamp from './assets/Lamp.svg'
import TeamBuilder from './assets/TeamBuilder.svg'
import Monitor from './assets/Monitor.svg'

function App() {
  const images = [
    { name: 'SearchIcon', src: SearchIcon },
    { name: 'Lamp', src: Lamp },
    { name: 'TeamBuilder', src: TeamBuilder },
    { name: 'Monitor', src: Monitor }
  ];
  const cardTopSideColors = ["#44D3D2", "#EA5454", "#FCAE4A", "#549EF2"];
  const textPartTitles = ["Supervisor", "Team Builder", "Karma", "Calculator"];
  const textPartParagraphs =[
    "Monitors activity to identify project roadblocks", 
    "Scans our talent network to create the optimal team for your project", 
    "Regularly evaluates our talent to ensure quality", 
    "Uses data from past projects to provide better delivery estimates"
  ]


  return (
    <main className='mainContainer'>
      <header className='header'>
        <h1 className='title'>Reliable, efficient delivery <br /><span>Powered by Technology</span></h1>
        <p className='headerParagraph'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>
      <section className='mainSection'>
        <Card 
          image={images[0]}
          cardTopSideColor={cardTopSideColors[0]} 
          textPartTitle={textPartTitles[0]}
          textPartParagraph={textPartParagraphs[0]}
        />
        <div className='middleTwoCards'>
          <Card 
            image={images[1]}
            cardTopSideColor={cardTopSideColors[1]}  
            textPartTitle={textPartTitles[1]}
            textPartParagraph={textPartParagraphs[1]}
          />
          <Card 
            image={images[2]}
            cardTopSideColor={cardTopSideColors[2]} 
            textPartTitle={textPartTitles[2]} 
            textPartParagraph={textPartParagraphs[2]}
          />
        </div>
        <Card 
          image={images[3]} 
          cardTopSideColor={cardTopSideColors[3]} 
          textPartTitle={textPartTitles[3]}
          textPartParagraph={textPartParagraphs[3]}
        />
      </section>
    </main>
  )
}

export default App



















