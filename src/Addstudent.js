import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addstudent(){
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    return(
        <>
        
        <div className="form-container">
            <h1 class="mb-3 head text-light">Add Bus Details</h1>
        {/* <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,createdAt:e.target.value})}}></input>
                <label for="floatingInput">Created At..</label>
        </div> */}
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Bus Name" onChange={(e)=>{
                setData({...data,BusName:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder=" Bus Image Link" onChange={(e)=>{
                setData({...data,BusImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Bus Average" onChange={(e)=>{
                setData({...data,BusAverage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus Average..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="BusNoOfKM" onChange={(e)=>{
                setData({...data,BusNoOfKM:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusNoOfKM..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder=" Bus RTO Number" onChange={(e)=>{
                setData({...data,BusRTONumber:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus RTO Number..</label>
        </div>

            <input type="button" className="add-button mt-3" value="AddStudent" onClick={()=>{
                fetch('https://630eea73498924524a819323.mockapi.io/Bus'
                ,{method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
                })
                .then((res)=>{
                    navigate('/Student');
                })
            }}></input>
         </div>
        </>
    )
}
export default Addstudent;