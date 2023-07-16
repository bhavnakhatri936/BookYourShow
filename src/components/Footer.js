import React from 'react'

export default function Footer() {
  return (
  <>
   <footer className="site-footer">
            <div className="container footer">
                <div className="footer-details">
                    <div className="footer-icons">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i className="fab fa-skype"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <i className="far fa-copyright"></i>
                        Copyright-2014-BookYourShow by Bhavna Khatri
                    </div>
                </div>
            </div>
        </footer>
  </>
  )
}
