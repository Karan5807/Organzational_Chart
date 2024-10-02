import demoData from "./Database/demoData.js";
import MemberCard from "./Pages/MemberCard.jsx";
import CompanyCard from "./Pages/CompanyCard.jsx";
import MarketingDept from "./Pages/MarketingDept.jsx";
import EnggDept from "./Pages/EnggDept.jsx";
import { Tree, TreeNode } from "react-organizational-chart";

const App = () => {
  const companyData = demoData?.[0];
  const employeeList = companyData.employees;

  // Function to filter data based on name
  function filterDataByBranch(data, department) {
    return data.filter((item) => item.department === department);
  }
  const CEO = filterDataByBranch(employeeList, "CEO");
  return (
    <div>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div>
            {demoData.map((data, idx) => (
              <CompanyCard
                key={idx}
                companyName={data.name}
                ceo={data.ceo}
                industry={data.industry}
              />
            ))}
          </div>
        }
      >
        {/* Section for CEO */}
        <TreeNode
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={
            <div>
              {CEO.map((data, idx) => ( <TreeNode label={
                <MemberCard
                  key={idx}
                  employeeName={data.first_name + " " + data.last_name}
                  email={data.email}
                />}/>
              ))}
            </div>
          }
        >
          <TreeNode label={<EnggDept />} />
          <TreeNode label={<MarketingDept />} />
        </TreeNode>
      </Tree>
    </div>
  );
};

export default App;
