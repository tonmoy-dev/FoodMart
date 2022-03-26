import AccountDetails from "../../../src/Components/AccountDetails/AccountDetails";
import DashUserMenu from "../DashMenu/DashUserMenu";

const accountdetails = () => {
    return (

        <>
            <style jsx>
                {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
            </style>

            <div id="dashboard-container" className="h-screen bg-gray-100">
                {/* top bar */}
                <DashUserMenu />
                {/* main content */}
                <div id="main-content" className="pt-10 pr-8 pl-8 lg:pl-64 bg-gray-100">
                    <div>
                        <AccountDetails></AccountDetails>
                    </div>
                </div>
            </div>
        </>
      
    );
};

export default accountdetails;
