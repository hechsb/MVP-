import React from "react"


function Search() {

  return (
    <div>
            <div id="about" className="tm-page-content">
            <div className="tm-black-bg tm-mb-20 tm-about-box-1">              
              <h2 className="tm-text-primary tm-about-header">Search your home</h2>
              <div className="tm-black-bg tm-contact-form-container tm-align-right">
              <form  id="contact-form">
                <div className="tm-form-group">
                  <input type="text" name="name" className="tm-form-control" placeholder="Write a title " required="" />
                </div>
                <div>
                  <button type="submit" className="tm-btn-primary tm-align-right">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
         
          </div>
    </div>
  )
}

export default Search
