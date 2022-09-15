import { useState , useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import './index.css';

function EditStudent(){
    const navigate = useNavigate();
    const [data , setData] = useState({});
    const param =useParams();
    useEffect(()=>{
        fetch('https://630eea73498924524a819323.mockapi.io/Bus' + param.id,{method:"GET"}).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res)
            // console.log(res);
        });
    },[])

    return(
        <>
        <div className="form-container">
            <h1 class="mb-3 head text-light">Edit Bus Details</h1>
        {/* <div class="form-floating mb-3">
            <input type="text" value={data.createdAt} class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,createdAt:e.target.value})}}></input>
                <label for="floatingInput">Created At..</label>
        </div> */}
        <div class="form-floating">
            <input type="text" value={data.BusName} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,BusName:e.target.value})}}></input>
                <label for="floatingPassword">Enter Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.BusImage} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,BusImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.BusAverage} class="form-control" id="floatingPassword" placeholder="Roll No" onChange={(e)=>{
                setData({...data,BusAverage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus Average..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.BusNoOfKM} class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                setData({...data,BusNoOfKM:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusNoOfKM..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.BusRTONumber} class="form-control" id="floatingPassword" placeholder="City" onChange={(e)=>{
                setData({...data,BusRTONumber:e.target.value})}}></input>
                <label for="floatingPassword">Enter Bus RTO Number..</label>
        </div>
        
            <input type="button" class="edit-button mt-3" value="Edit Buses" onClick={()=>{
                fetch('https://630eea73498924524a819323.mockapi.io/Bus'+param.id
                ,{method:"PUT",
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


export default EditStudent;