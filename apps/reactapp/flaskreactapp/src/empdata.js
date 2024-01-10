import React from 'react';

import axios from 'axios';
import { useEffect,useState } from 'react';

const CreateEmpData=({updateflag})=>{
    const [empdata,setEmpData]=useState({
        'empname':'',
        'empcountry':'',
        'empcity':'',
        'empcontact':'',
        'empsalary':'',
        'empcontract':''
    });

    const setempdata=(e)=>{
        
        const {name,value}=e.target;
        setEmpData({...empdata,[name]:value})        
    }
    const submitEmpData = async (e)=>{
        e.preventDefault();
        try{
            const reponse = await axios.post('http://127.0.0.1:5000/createempdetails',empdata);
            console.log(reponse.data);
            setEmpData({
                'empname':'',
                'empcountry':'',
                'empcity':'',
                'empcontact':'',
                'empsalary':'',
                'empcontract':''
            });
            updateflag();
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <div className='createempdata'>
            <form onSubmit={submitEmpData}>
                <label>
                    EmpName: 
                    <input type = "text" value={empdata.empname} name="empname" onChange={setempdata} autoComplete="off"></input>

                </label><br></br><br></br>
                <label>
                    EmpCountry:
                    <input name="empcountry" value = {empdata.empcountry} type = "text" onChange={setempdata} autoComplete='off' />
                </label><br></br><br></br>

                <label>
                    EmpCity: 
                    <input type='text' name='empcity' value={empdata.empcity} onChange={setempdata} autoComplete='off'></input>
                </label><br></br><br></br>

                <label>
                    EmpContact: 
                    <input type='text' name = 'empcontact' value={empdata.empcontact} onChange={setempdata} autoComplete='off' />
                </label><br></br><br></br>

                <label>
                    EmpSalary: 
                    <input type='text' name = 'empsalary' value={empdata.empsalary} onChange={setempdata} autoComplete='off' />
                </label><br></br><br></br>

                <label>
                    EmpContract: 
                    <input type='text' name = 'empcontract' value={empdata.empcontract} onChange={setempdata} autoComplete='off' />
                </label><br></br><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


const FetchEmpData = ({updateflag})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/empdetails')
        .then(response=>{
            setData(response.data)
        })
        .then(error=>{
            console.error(error)
        })
    },[updateflag])

    return(
        <div>
            <h1>Employes Details</h1>
            <ul>
                {data.map((e,key)=>(
                    <div key={key}>
                        <h1>Employes Details {e.empname}</h1>
                        <li>{e.empname}</li><br></br>
                        <li>{e.empcountry}</li><br></br>
                        <li>{e.empcity}</li><br></br>
                        <li>{e.empcontact}</li><br></br>
                        <li>{e.empsalary}</li><br></br>
                        <li>{e.empcontract}</li><br></br>

                    </div>
                ))
                }
            </ul>
        </div>
    )
}


export {FetchEmpData,CreateEmpData};
