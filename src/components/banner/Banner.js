import { React } from "react"
import './Banner.css'
//Imports Images
import img1 from '../../static/background/bannerfront.png'
import img2 from '../../static/background/bannerlove.png'
const Banner = () => {
    return (<div className='banner'>
        <div className='container'>
                <div className='col-xl-4 col-lg-5 data'>
                    <h1>LOVE BEGINS LIFE BEGINS</h1>
                    <div className="form">
                    </div>
                </div>
                <div className='col-xl-8 col-lg-7 image'>
                    <img className='img1 img-fluid' src={img1}/>
                    <img className='img2 img-fluid' src={img2}/>
                </div>
        </div>
    </div>);
}
export default Banner