import { NavLink } from "react-router-dom"



export default function HomePage(){
  


    return (
        <nav>
      <NavLink to="/all-beers" >
        <a>All Beers</a>
        <img src={"../beers.png"}/>
      </NavLink>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto itaque at praesentium nihil dolorum consequuntur maxime porro voluptates, commodi voluptas eaque natus iusto quos blanditiis possimus dolorem nulla distinctio? </p>
      <NavLink to="/random-beer" >
        <a>Random Beer</a>
        <img src={"../new-beer.png"}/>
      </NavLink>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto itaque at praesentium nihil dolorum consequuntur maxime porro voluptates, commodi voluptas eaque natus iusto quos blanditiis possimus dolorem nulla distinctio? </p>
      <NavLink to="/new-beer" >
        <a> New Beer</a>
        <img src={"../random-beer.png"}/>
      </NavLink>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto itaque at praesentium nihil dolorum consequuntur maxime porro voluptates, commodi voluptas eaque natus iusto quos blanditiis possimus dolorem nulla distinctio? </p>
    </nav>
    )
}