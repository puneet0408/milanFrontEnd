import { React } from "react"
import {Link} from 'react-router-dom'
import './Home.css'
//Imports Images
import img1 from '../../static/background/bannerfront.png'
import img2 from '../../static/background/bannerlove.png'
const Home = () => {
    return (<div className='banner'>
        <div className='container'>
                <div className='col-xl-4 col-lg-5 col-sm-12 data'>
                    <h1>LOVE BEGINS LIFE BEGINS</h1>
                    <div className="form">
                        <form>
                            <div className="input_field">
                                <p>I am a : </p>
                                <div className="option">
                                    <input type="radio" name="gender" value="male" id="male"></input>
                                    <label for="male">MALE</label>
                                    <input type="radio" name="gender" value="female" id="female"></input>
                                    <label for="female">FEMALE</label>
                                </div>
                            </div>
                            <div className="input_field">
                                <p>Seeking :</p>
                                <div className="option">
                                    <input type="radio" name="target_gender" value="male" id="target_male"></input>
                                    <label for="target_male">MALE</label>
                                    <input type="radio" name="target_gender" value="female" id="target_female"></input>
                                    <label for="target_female">FEMALE</label>
                                </div>
                            </div>
                            <div className="input_field">
                                <p>Marrital : </p>
                                <div className="option">
                                    <input type="radio" name="married" value={0} id="no"></input>
                                    <label for="no">NO</label>
                                    <input type="radio" name="married" value={1} id="yes"></input>
                                    <label for="yes">YES</label>
                                </div>
                            </div>
                            <div className="input_field">
                                <Link to='/singup'><button type="submit" class="btn custom_btn">Join Now!</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-xl-8 col-lg-7 image'>
                    <img className='img1 img-fluid' src={img1}/>
                    <img className='img2 img-fluid' src={img2}/>
                </div>
        </div>
    </div>);
}
export default Home;