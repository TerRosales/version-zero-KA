
const ParentSidebar = () => {
    const onClickCalendar = () => {
        console.log('Calendar button clicked');
        // Add your Calendar button logic here
    };

    const onClickManageChildren = () => {
        console.log('Manage Children button clicked');
        // Add your Manage Children button logic here
    };

    const onClickManageChores = () => {
        console.log('Manage Chores button clicked');
        // Add your Manage Chores button logic here
    };

    const onClickGrades = () => {
        console.log('Grades button clicked');
        // Add your Grades button logic here
    };

    const onClickLeaderboards = () => {
        console.log('Leaderboards button clicked');
        // Add your Leaderboards button logic here
    };

    const onClickWhatsNew = () => {
        console.log("What's New button clicked");
        // Add your What's New button logic here
    };

    const onClickSettings = () => {
        console.log('Settings button clicked');
        // Add your Settings button logic here
    };

    const onClickLogOut = () => {
        console.log('Log Out button clicked');
        // Add your Log Out button logic here
    };

    //TODO
    // Add button functionality
    // sidebar responsiveness(on small screen)
    // Pass UserType from Login whether its Guardian, Kid, Parent and update view
    return (
        <div className="flex flex-col max-w-96">
            <p className="pl-3 py-1 border border-black overflow-wrap break-words">UserType</p>
            <div className="p-3 border border-black">
                <button className="sidebarButton overflow-wrap break-words" type="button" onClick={onClickCalendar}>
                    Calendar
                </button>
            </div>
            <div className="p-3 border border-black ">
                <button className="sidebarButton" type="button" onClick={onClickManageChildren}>
                    Manage Children
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickManageChores}>
                    Manage Chores
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickGrades}>
                    Grades
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickLeaderboards}>
                    Leaderboards
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickWhatsNew}>
                    What's New
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickSettings}>
                    Settings
                </button>
            </div>
            <div className="p-3 border border-black">
                <button className="sidebarButton" type="button" onClick={onClickLogOut}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ParentSidebar;
