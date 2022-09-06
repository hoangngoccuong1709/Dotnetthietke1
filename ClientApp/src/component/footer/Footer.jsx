import React from 'react'
import '../footer/css/Footer.css'
export default function footer() {
  return (
    <div className="footer">
        <div className="footerthongtin">
          <div className="footer1">
            <ul>
              <h3>About</h3>
              <li>History</li>
              <li> Our Team</li>
              <li>Mission Statement</li>
              <li>Terms &amp; Condition</li>
              <li>Privacy Policy </li>
            </ul>
          </div>
          <div className="footer2">
            <ul>
              <h3>What we do</h3>
              <li>News and stories</li>
              <li>Publications</li>
              <li>Take action</li>
              <li>Recomendations</li>
              <li>Help </li>
            </ul>
          </div>
          <div className="footer3">
            <ul>
              <h3>Your Copany</h3>
              <li> Halimun Street 25</li>
              <li>Jakarta, City 1234</li>
              <li>www.yourflowersite.com</li>
            </ul>
          </div>
        </div>
        <div className="iconfooter">
          <h4>Follow us!</h4>
          <div className="iconthongtin">
            <a href>
              <img style={{width: '4.9rem', marginRight: '3.4rem'}} src="image/fb.png" /> 
            </a>
            <a href>
              <img style={{width: '4.9rem', marginRight: '2.5rem'}} src="image/ins.png" /> 
            </a>
            <a href>
              <img style={{width: '4.9rem'}} src="image/yt.png" /> 
            </a>
          </div>
        </div>
      </div>
  )
}
