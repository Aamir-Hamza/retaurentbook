import React from 'react'


function Setting() {
    let restaurant  =  ["Restaurent1","Restaurent2", "Restaurent3",]
    const [data, setData] = React.useState(restaurant)
    const [toggle, settoggle] = React.useState(false)
   
   function togglehandler(){
    settoggle(!toggle)
  
   }
   
  return (
    <>
     {
data.map((ele,index)=>{
  return(
  <>
  
<div key={ele.id}>
  <h2>{ele}</h2>
 <button  onClick={togglehandler}>{toggle?"on":"off"}</button>

 </div>
  
  
  </>)
})
  
 }
    
    
    
    </>
  )
}

export default Setting