import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <row g-3>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <br />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Search</button>
                </div>
            </row>
        </div>
    </div>
  )
}

export default SearchStudent