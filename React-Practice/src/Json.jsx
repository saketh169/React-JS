import students from './students.json'

function Json(){
   return(
    <>
    <h1>JSON Data</h1>
    <div>
         {students.map((student , index)=>(
        <div key={index} >
             <p>Name :{student.name}</p>
        </div>
       
     ) )}
    </div>
    
    </>
   )
}

export default Json;