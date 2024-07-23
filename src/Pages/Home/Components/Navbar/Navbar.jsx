import React, { useEffect, useState } from 'react'
import Navimage from "../../../../assets/icons8-netflix-logo-240.png";
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';
import { selectImage } from '../../../../features/imageSlice';

const Navbar = () => {
    const [Scroll, setScroll] = useState(false);

    const nav = useNavigate();

    const sign = useSelector(selectUser);

    const img=useSelector(selectImage);

    const changeBg = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const navHome=()=>{
        nav("/")
    }

    const handlesignIn = () => {
        nav("/signup")
    }

    const navProfile=()=>{
        nav("/profile");
    }
    useEffect(() => {
        window.addEventListener("scroll", changeBg);
        return () => window.removeEventListener("scroll", changeBg);
    }, []);


    return (
        <div className={`nav ${Scroll && "background"}`}>
            <div>
                <img src={Navimage} onClick={navHome} alt="" className='navigate_logo' />
            </div>
            <div class="sign__in">
                <select name="Language" id="Lang">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                {!sign ? (<button className='navigate_signin' onClick={handlesignIn}>Sign in</button>) : <img style={{width:"40px",objectFit:"cover",border:"none",borderRadius:"50%",height:"40px"}} onClick={navProfile} src={img} alt='profile__img'></img>}
            </div>
        </div>
    )
}

export default Navbar;