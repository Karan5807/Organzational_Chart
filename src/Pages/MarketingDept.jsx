import React from "react";
import MemberCard from "./MemberCard";
import demoData from "../Database/demoData";
import { Tree, TreeNode } from "react-organizational-chart";

const MarketingDept = () => {
  const companyData = demoData?.[0];
  const employeeList = companyData.employees;

  // Function to filter data based on name
  function filterData(data, Level) {
    return data.filter(
      (item) => item.Level === Level && item.department === "Marketing"
    );
  }

  const Level2 = filterData(employeeList, 2);
  const Level5 = filterData(employeeList, 5);

  const MarketingTeam = () => (
    <Tree
      lineWidth={"2px"}
      lineColor={"green"}
      lineBorderRadius={"10px"}
      label={
        <h2>
          {Level2.map((data, idx) => (
            <MemberCard
              key={idx}
              employeeName={data.first_name + " " + data.last_name}
              email={data.email}
              role={data.position}
            />
          ))}
        </h2>
      }
    >
      {Level5.map((data, idx) => (
        <TreeNode
          key={idx}
          label={
            <MemberCard
              employeeName={data.first_name + " " + data.last_name}
              email={data.email}
              role={data.position}
            />
          }
        />
      ))}
    </Tree>
  );
  return <MarketingTeam />;
};

export default MarketingDept;
