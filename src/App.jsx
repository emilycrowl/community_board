import './App.css';
import ResourceCard from './ResourceCard';
import chicago from './assets/chicago.jpg';
import dali from './assets/dali.jpg';
import lacma from './assets/lacma.jpg';
import meowwolf from './assets/meowwolf.jpg';
import met from './assets/met.jpg';
import moma from './assets/moma.jpg';
import nationalgallery from './assets/nationalgallery.jpg';
import npg from './assets/npg.jpg';
import philly from './assets/philly.jpg';
import warhol from './assets/warhol.jpg';

function App() {
  const resources = [
    { title: 'Metropolitan Museum of Art', description: 'At New York City\'s most visited museum and attraction, you will experience over 5,000 years of art from around the world. The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect.', image: met },
    { title: 'Art Institute of Chicago', description: 'See why the Art Institute of Chicago is the only museum in the world to be top-ranked by TripAdvisor four years in a row! Experience the greatest Impressionist collection outside Paris, and view contemporary masterpieces in the spectacular Modern Wing. Stand before classics like Nighthawks, and travel the globe through galleries devoted to the art of ancient Greece, Japan, Africa, and the Americas.', image: chicago },
    { title: 'Meow Wolf Santa Fe', description: 'The original permanent Meow Wolf exhibition, House of Eternal Return, is a monumental achievement in DIY world creation and collaboration, featuring over 70 rooms made by local and community artists. House of Eternal Return is an unique & immersive art installation with multimedia elements and a mysterious narrative throughout. All Meow Wolf Exhibitions are now Certified Autism Centers™', image: meowwolf },
    { title: 'The Dali Museum', description: 'An unparalleled collection of Salvador Dali artworks, spanning his life and career, featuring works in many media. #TheDali', image: dali },
    { title: 'Museum of Modern Art', description: 'Located in the heart of Manhattan, The Museum of Modern Art (MoMA) is home to the world’s greatest collection of modern and contemporary art. The collection features Vincent van Gogh’s “The Starry Night,” along with works by Claude Monet, Pablo Picasso, Frida Kahlo, Andy Warhol, Salvador Dalí, and many other great artists of our time. MoMA\'s collection also showcases photography, film, architecture, design, media, and performance art. Visitors can also enjoy the flagship MoMA Store and a range of high-quality dining options.', image: moma },
    { title: 'National Gallery of Art', description: 'This national art museum holds over 141,000 works of western art, spanning from the middle ages through today. Bonus: It\'s completely free to visit.', image: nationalgallery },
    { title: 'Philadelphia Museum of Art', description: 'A surprise around every corner - discover the cultural heart of Philadelphia. The museum’s landmark building houses one of the most remarkable collections in the country, featuring some of the greatest works of American, Asia, and European art anywhere. You’ll find van Gogh\'s Sunflowers, the world\’s largest Marcel Duchamp and the only dedicated Rodin Museum outside France.', image: philly },
    { title: 'The Andy Warhol Museum', description: 'Located in Pittsburgh, Pennsylvania, the place of Andy Warhol’s birth, The Andy Warhol Museum holds the largest collection of Warhol’s artworks and archival materials. We are one of the most comprehensive single-artist museums in the world and the largest in North America.', image: warhol },
    { title: 'Los Angeles County Museum of Art', description: 'Since its inception in 1965, the Los Angeles County Museum of Art (LACMA) has been devoted to collecting works of art that span both history and geography, in addition to representing Los Angeles\'s uniquely diverse population. Today LACMA is the largest art museum in the western United States, with a collection that includes over 120,000 objects dating from antiquity to the present, encompassing the geographic world and nearly the entire history of art.', image: lacma },
    { title: 'National Portrait Gallery', description: 'Housed in the Old Patent Office Building, this art museum presents portraiture of prominent figures in American history, from presidents and inventors to even pop stars.', image: npg },
  ];

  return (
    <div className="resource-list">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          image={resource.image}
        />
      ))}
    </div>
  );
}

export default App;
