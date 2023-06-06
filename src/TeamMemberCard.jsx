import {useContext} from "react"
import DataContext from "./Context/DataContext"
import male from "./employeeImg/male.jpg";
import male1 from "./employeeImg/male1.jpg";
import male2 from "./employeeImg/male2.jpg";
import male3 from "./employeeImg/male3.jpg";
import male4 from "./employeeImg/male4.jpg";
import male5 from "./employeeImg/male5.jpg";
import female from "./employeeImg/female.jpg";
import female1 from "./employeeImg/female1.jpg";
import female2 from "./employeeImg/female2.jpg";
import female3 from "./employeeImg/female3.jpg";
import female4 from "./employeeImg/female4.jpg";
import female5 from "./employeeImg/female5.jpg";



const TeamMemberCard =({employee})=>{
  const {selectedTeam,handleClick} = useContext(DataContext)
 return(
   <div id={employee.id} key={employee.id} onClick={handleClick} style={{cursor:"pointer"}} 
        className={(employee.team === selectedTeam ? "card m-2 heightLight" : "card m-2")}>
     
       {employee.fullName === "Rick Grime"?<img src={male} height="178px"/>:
        employee.fullName ==="Carl"?<img src={male1}/>:
        employee.fullName === "Daryol"?<img src={male2}/>:
        employee.fullName === "Jesus"? <img src={male3} height="178px"/>:
        employee.fullName === "Glan"?<img src = {male4} height="178px"/>:
        employee.fullName === "Negan"?<img src = {male5}/>:
        employee.fullName === "Lory"?<img src = {female}/>:
        employee.fullName === "Dutit"?<img src = {female1} height="178px"/>:
        employee.fullName === "Latti"?<img src={female2}/>:
        employee.fullName === "Tara"?<img src={female3} height="178px"/>:
        employee.fullName === "Maggie"?<img src={female4}/>:
        <img src={female5}/>}
     
     <div className="card-body">
       <h5>Full Name: {employee.fullName}</h5>
       <p><b>Desgination:</b> {employee.title}</p>
       <p>Team: {employee.team === selectedTeam?(<b>{employee.team}</b>):(employee.team) }</p>
     </div>
   </div>
 )
}
export default TeamMemberCard;