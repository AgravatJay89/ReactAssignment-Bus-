import { useNavigate } from 'react-router-dom';
import './index.css';
function Contact(){
    const navigate= useNavigate();
    return(
    <>
        <div className='contactfrom'>
            <h1 className='conhead text-light'>Contact Us</h1>
            <h6>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</h6>
            <div className='conform'>
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control formcon mt-4" placeholder="Name" aria-label="First name"></input>
                    <label for="floatingTextarea2">Name</label>
                    </div>
                    <div class="col">
                    <input type="email" class="form-control formcon mt-4" placeholder="Email" aria-label="Email"></input>
                    <label for="floatingTextarea2">Email</label>
                    </div>
                </div>
                <div class="form-floating mt-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2">Massage</label>
                </div>
                <div className='submit-button-container'>
                    <button type="button" class="btn btn-primary submit-button">Submit</button>
                    <p className='text-light mt-3'>_______________________________________________________</p>
                </div>
                <div className='content-contant'>
                    <a href='#'>example@email.com</a>
                    <p className='text-light'>49 Smith St.<br/>
                    Saint Cloud, MN 56301
                    </p>
                </div>
                <div>
                <i class="fa-brands fa-instagram"></i>
                </div>
                
            </div>
        </div>

        <div class="back-button">
          <button onClick={()=>{
            navigate("/Student")
          }} id="abtbtn"><span><i class="fa fa-arrow-right"></i></span> </button>
          </div>
    </>
    )
}

export default Contact;