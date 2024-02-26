import Himg from '../assets/react-core-concepts.png';


const consta=["Fundamentals","React","Concepts"];
function getRandom(max){

   return Math.floor(Math.random()*(max+1));
}
export default function Header(){
    return(
     <header>
         <img src={Himg} alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
           {consta[getRandom(2)]} you will need for almost any app you are
           going to build!
         </p>
     </header>
    );
 }