import React from "react";
import ParentSidebar from "../ParentSidebar/ParentSidebar";
import ChildSidebar from "../ChildSidebar/ChildSidebar";
import ParentView from "./ParentView";
import ChildView from "./ChildView";
interface User {
  username: string;
  emailAddress: string;
  securityPin: string;
  password: string;
  id: string;
  guardianship?: string;
  gradeLevel?: string;
}

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  // Check if the user has guardianship
  const isParent = user.guardianship !== undefined;

  return (
    <>
      <div className="flex">
        {isParent ? <ParentSidebar /> : <ChildSidebar />}
        {isParent ? <ParentView /> : <ChildView />}
      </div>
    </>
  );
};

export default Dashboard;
