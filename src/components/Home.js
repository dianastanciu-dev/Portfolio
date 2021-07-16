import {useState} from 'react';
import './Home.css';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

function Home() {

  const defaultItems=[
  {image: img1, name: 'Proiect1', category: 'HTML-CSS'}, 
  {image: img2, name: 'Proiect2', category: 'Javascript'}, 
  {image: img3, name: 'Proiect3', category: 'Javascript'}
]  

  const [items, setItems]= useState(defaultItems)  

  const filteredItems =(filterBy) =>{ // change to filterItems
      let filteredList; //

      if (!filterBy){ //nu avem categorie

          filteredList=defaultItems; //returnam toate itemele
      
        }else{ //cand avem categorie/filterBy filtram lista de iteme dupa numele de categorie

          filteredList =defaultItems.filter( (item)=>{return item.category === filterBy;})

      }

      setItems(filteredList);  //populam lista items cu lista filtrata
  }
  return (

    <div className="home">
        <h1>Home</h1>
        <button onClick={()=>filteredItems('HTML-CSS') }>HTML, CSS</button>
        {/*cu arrow function rulam functia filteredItems cand se face click, nu la incarcarea paginii */}
        <button onClick={()=>filteredItems('Javascript') }>Javascript</button>

        <button onClick={()=>filteredItems() }>All</button>
        <ul>

         {items.map((item)=>{ //afisam lista filtrata sau nefiltrata formatata cu html 
             return( <li>
                 {item.name}
                 <img src={item.image} alt={item.name}/>

             </li>)
         })}

         </ul>  
    </div>
  );
}

export default Home;