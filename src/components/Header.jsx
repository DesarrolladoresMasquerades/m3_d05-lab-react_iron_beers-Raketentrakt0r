import react from "react"
import { Link } from "react-router-dom"



export default function Header(){
    return (
        <div>
            <Link to="/">
            <img
        src={`https://www.pinclipart.com/picdir/middle/564-5647199_transparent-home-icon-clipart-circle-transparent-home-icon.png`}
        alt="home"
        width="70px"
        height="auto"
      />
            </Link>
        </div>
    )
}