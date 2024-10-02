import React from "react";
import MemberCard from "./MemberCard";
import demoData from "../Database/demoData";
import { Tree, TreeNode } from "react-organizational-chart";

const EnggDept = () => {
    const companyData = demoData?.[0];
    const employeeList = companyData.employees;
  
    // Function to filter data based on name
    function filterData(data, Level) {
      return data.filter((item) => item.Level === Level && item.department === "Engineering");
    }
  
    const  Level2 = filterData(employeeList, 2);
    const Level3 = filterData(employeeList,3);
    const Level5 = filterData(employeeList, 5);
    
    console.log(Level3);
    
    const EnggTeam = () => (
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"20px"}
        label={<h2>{Level2.map((data,idx)=>(<MemberCard key={idx}  label={data.first_name+" "+data.last_name} email={data.email} role={data.position}/>))}</h2>}
      >
        <TreeNode label={<h4>{Level3.map((data,idx)=>(<MemberCard key={idx}  employeeName={data.first_name+" "+data.last_name} email={data.email} role={data.position}/>))}</h4>}>
          

        {Level5.map((data,idx)=>(<TreeNode key={idx} label={<MemberCard employeeName={data.first_name+" "+data.last_name} email={data.email} role={data.position}/>}/>))}
        </TreeNode>

      </Tree>
    );
    return (<EnggTeam/>); 
}

export default EnggDept;