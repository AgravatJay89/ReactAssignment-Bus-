import './index.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {useNavigate, useParams} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ConsumeApis(){
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
      fetch('https://630eea73498924524a819323.mockapi.io/Bus').then((res)=>{
        return res.json();
        }).then((res)=>{
        setdata(res)
        // console.log(res)
    });
    },[]);
   
  
    const formatestudent=data.map((stu)=>{
     return(
      <>

        <div className='card-container'>
        
          <div className='card'>
          <Link to={"../Student/" + stu.id} id="link">
            <img src={stu.BusImage} class="card-img-top" alt="..."></img>
              <div className='info'>
                <h4>{stu.BusName}</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="icons">
                  <i class="fa fa-instagram" style={{fontSize:"20px",color:"gray"}}/>
                  <i class="fa fa-facebook-f" style={{fontSize:"20px",color:"gray"}}/>
                  <i class="fa fa-linkedin" style={{fontSize:"20px",color:"gray"}}/>
                  </div>
              </div>
              </Link>
              {/* <button onClick={()=>{
             fetch('https://630eea73498924524a819323.mockapi.io/Bus/' +stu.id,{method:"DELETE"})
             .then((res)=>{
              navigate('/Student')
             })
           }} class="delete-button m-2"><span style={{fontSize:'15px'}}>&#10060;</span>DELETE</button> */}
          </div>
        </div>
      
      </>
      ) 
    });
 
    return formatestudent;
  }

  export default ConsumeApis;

  // <div className="card" style={{width: "18rem"}}>
  //       <img src={stu.avatar} class="card-img-top" alt="..."></img>
  //       <div class="card-body">
  //      
  //      </div>
  //     </div>