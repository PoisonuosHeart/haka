import 'materialize-css'
import '../../src/index.css'


import {ContentAbout} from './components/ContentAbout'

export const MainPage = () => {

    return(
        <div>
            <ContentAbout/>
            <div className="row">
                <div className= "col-1 center-block">
                <button className="waves-effect waves-light btn-small center-block">Start your work</button>
                </div>
            </div>
            <div id='webcam-container'></div>
            <div id='label-container'></div>
            <div className="row justify-content-center" width = "90px"/>
        </div>
        
    )
}
