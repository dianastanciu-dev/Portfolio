import {useState, useRef, useLayoutEffect} from 'react';
import './AboutMe.css';
import {defaultItems} from 'data/projects'

function AboutMe() {

                                                   

  const [items, setItems]= useState(defaultItems)  

  const filterItems =(filterBy) =>{ // change to filterItems
      let filteredList; //

      if (!filterBy){ //nu avem categorie

          filteredList=defaultItems; //returnam toate itemele
      
        }else{ //cand avem categorie/filterBy filtram lista de iteme dupa numele de categorie

          filteredList =defaultItems.filter( (item)=>{return item.category === filterBy;})

      }

      setItems(filteredList);  //populam lista items cu lista filtrata
  }


  {/*pentru scroll effect*/}
       
  const container = useRef(null)

  useLayoutEffect(() => {
  const tempElem = container.current;
  
  if (!tempElem) {return;}
  
  tempElem.addEventListener('scroll', handleScroll);
  
  return () => {
  tempElem.removeEventListener('scroll', handleScroll);
  }

  }, [])


  const handleScroll = () => {
    console.log("blabla")
    console.log(container.current.scrollTop)
    console.log(container.current.clientHeight)
    }




  return (

    <div className="container" ref={container} >

   

    <div className="home">
        <div className="quoteBox">
        <h1 className="quote">Roses are red,</h1>
        <h1 className="quote">violets are blue,</h1>
        <h1 className="quote">unexpected {'{'}</h1>
        <h1 className="quote">on line 32</h1>
    </div>


        <div className="scrolldown" onClick={()=>{}}>
        <span id="scroll"></span>
        <span id="scroll"></span>
        </div>

{/*scriptul jquery pentru scrolldown*/}        
{/*$(window).scroll(function(){     
  if($(window).scrollTop() > 100){   NU AVEM ACCES LA ASTA IN REACT
      $(".scroll").hide("slow");
  }
});

$(window).scroll(function(){   
  if($(window).scrollTop() < 100){
      $(".scroll").show("slow");
  }
});
*/}

{/*document.getElementById('window').scroll(() => {
   if(document.getElementById('window'))

})*/}



<div className="buttonBox">
        
        <button onClick={()=>filterItems('HTML-CSS')} className="filterButton">HTML, CSS</button>
        
        {/*cu arrow function rulam functia filteredItems cand se face click, nu la incarcarea paginii */}
        
        <button onClick={()=>filterItems('Javascript')} className="filterButton">Javascript</button>

        <button onClick={()=>filterItems() } className="filterButton">All</button>
</div>
       


        <ul className="listItems">
         {items.map((item)=>{ //afisam lista filtrata sau nefiltrata formatata cu html 
             return( <li>
                 <img src={item.image} alt={item.name}/>
                 <ul>
                   <li className="itemName">{item.name}</li>
                   <li className="itemDetails">{item.details}</li>
                   <a href={item.href} className="itemDetails">{item.details}</a>
                 </ul>
                
             </li>)
         })}

         </ul>  
    </div>

    </div>
  );
}

export default AboutMe;
