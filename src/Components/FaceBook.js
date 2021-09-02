import React from "react";
import profiles from "../data/berlin.json";

class FaceBook extends React.Component {
    state = {
        selectedCountry: "all",
        profileObj: profiles,
        searchText: "",
        originalProfiles: [...profiles]
    };

    
    countriesArr = this.state.profileObj.map(profile => profile.country)
    uniqueCountries = [...new Set(this.countriesArr)].sort((a,b) => {
        return a.localeCompare(b)
    })
    
    
    paintBackground = (event) => {
        this.setState({selectedCountry: event.target.innerText})
    }

    sortByName = () => {
        this.setState({profileObj: this.state.profileObj.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        })})
    }

    sortInverseName = () => {
        this.setState({profileObj: this.state.profileObj.sort((a, b) => {
            return b.firstName.localeCompare(a.firstName);
        })})
    }

    sortByCountry = () => {
        this.setState({profileObj: this.state.profileObj.sort((a, b) => {
            return a.country.localeCompare(b.country);
        })})
    }

    changeText = (event) => {
        this.setState({searchText: event.target.value})
    }

    search = (event) => {
        event.preventDefault();
        this.reset()
        setTimeout(() => {
            this.setState({profileObj: this.state.profileObj.filter((profile) => {
                const firstName = profile.firstName.toLowerCase().includes(this.state.searchText.toLowerCase());
                const lastName = profile.lastName.toLowerCase().includes(this.state.searchText.toLowerCase());
                const country = profile.country.toLowerCase().includes(this.state.searchText.toLowerCase());
        
                return firstName || lastName || country;
            })})
        }, 5);
        
    }

    reset = () => {
        this.setState({profileObj: this.state.originalProfiles});
    }

    render() {
        return (    
            <div>
            {this.uniqueCountries.map((country) => {
                return (
                    <button className="m-1" onClick={this.paintBackground}>{country}</button>
                );
            })}

            <div>
                <button className="btn btn-warning mt-4 mx-1" onClick={this.sortByName}>Sort by Name</button>
                <button className="btn btn-primary mt-4 mx-1" onClick={this.sortInverseName}>Inverse Sort by Name</button>
                <button className="btn btn-danger mt-4 mx-1" onClick={this.sortByCountry}>Inverse Sort by Country</button>
            </div>

            <form className="mt-5">
                <label htmlFor="site-search">Search the profiles:</label>
                <input onChange={this.changeText} className="mx-3" type="search" id="site-search" name="q" aria-label="Search through site content"/>
                <button type="submit" onClick={this.search}>Search</button>
                <button onClick={this.reset}>Reset</button>
                
            </form>
            
            {this.state.profileObj.map((profile) => {
                return(
                    <div className="card mb-2 mt-2" style={{maxWidth: "540px", backgroundColor: (profile.country === this.state.selectedCountry ? "blue" : "white")}}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={profile.img}  className="img-fluid rounded-start" alt="profile"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text fw-bold">First name: {profile.firstName}<span className="fw-normal"></span></p>
                                    <p className="card-text fw-bold">Last Name: {profile.lastName}<span className="fw-normal"></span></p>
                                    <p className="card-text fw-bold">Country: {profile.country}<span className="fw-normal"></span></p>
                                    <p className="card-text fw-bold">Type: {profile.isStudent ? "Student" : "Teacher"}<span className="fw-normal"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default FaceBook;