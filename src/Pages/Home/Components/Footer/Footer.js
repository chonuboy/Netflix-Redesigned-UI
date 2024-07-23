import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <hr />
    <div className='footer'>
        <h3>Questions? Call <span className='num'>000-800-919-1694</span></h3>
        <div className='footer__list'>
        <ul>
            <li>FAQ</li>
            <li>Account</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Speed Test</li>
            <li>Only on Netflix</li>
        </ul>
        <ul>
            <li>Help Centre</li>
            <li>Media Centre</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Cookie Preferences</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
        </ul>
        </div>
        <select name="Language Menu" id="inter">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
        <h3 className='footer__name'>Netflix India</h3>
    </div>
    </>
  )
}

export default Footer