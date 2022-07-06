import React,{useState, useEffect} from 'react'
import { View } from './components/View';
import './App.css';

const getDatafromLS=()=>{
  const data = localStorage.getItem('foorms');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
export const App = () => {
  const [foorms, setforms]=useState(getDatafromLS());
  const [NAME, setNAME]=useState('');
  const [LNAME, setLNAME]=useState('');
  const [COM, setCOM]=useState('');
  const [mail, setmail]=useState('');

  // form submit event
  const handlefeedback=(e)=>{
    e.preventDefault();
   
    let foorm={
      NAME,
      LNAME,
      mail,
      COM

    }
    setforms([...foorms,foorm]);
    setNAME('');
    setLNAME('');
    setCOM('');
    setmail('');
  }


  const deleteform=(NAME)=>{
    const filteredforms=foorms.filter((element,index)=>{
      return element.NAME !== NAME
    })
    setforms(filteredforms);
  }


  useEffect(()=>{
    localStorage.setItem('foorms',JSON.stringify(foorms));
  },[foorms])

  return (
    <div className='wrapper'>
      <h1 >FEEDBACK FORM</h1>
     
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handlefeedback}>
            <label>FIRST NAME</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setNAME(e.target.value)} value={NAME}></input>
            <br></br>
            <label>LAST NAME</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLNAME(e.target.value)} value={LNAME}></input>
            <br></br>
            
            <label>EMAIL</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setmail(e.target.value)} value={mail}></input>
            <br></br>

            <label>COMMENT</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setCOM(e.target.value)} value={COM}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              SUBMIT
            </button>
          </form>
        </div>

        <div className='view-container'>
          {foorms.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>   </th>
                    <th>COMMENT</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View foorms={foorms} deleteform={deleteform}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setforms([])}>Remove All</button>
          </>}
          {foorms.length < 1 && <div>No comment are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
