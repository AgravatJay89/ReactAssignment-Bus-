import './index.css';
import {useNavigate, useParams} from "react-router-dom"
function Home(){
    const navigate= useNavigate();
    return (
    <>
    <div className='homecontaint'>
       
        <h1>👨🏻‍💻:-) Hello World 🪄❤️</h1>
       
        {/* <div className="logo ">
                <span id="sapnl" style={{color:"red"}}>Lets Tour</span><span id="sogo" style={{color:"white"}}> with us</span>
            </div> */}

        <h3>Welcome To Our Page</h3>

        <h4 style={{color:"teal"}}>
            Lets Tour With Us...
        </h4>

        <p className='text-gray-400'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
        </p>
       
        <button onClick={()=>{
            navigate("/About")
          }} class="home-button">Let's Start <span> <i class="fa fa-arrow-right"></i></span> </button>
           <a href='https://mail.google.com/mail/u/0/?ogbl#sent?compose=new'>
            <br/>
           <h4> For Any suggestion click Below Gmail Button</h4>
            <button>
                <h5>G-mail</h5> 
            </button>
          </a>
    </div>
    </>
    )
}

export default Home;