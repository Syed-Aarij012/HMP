import DashboardListingsTable from "@/components/common/DashboardListingsTable";
import DashboardToggle from "@/components/dashboard/DashboardToggle";
import { myListingCars } from "@/data/cars";

function Dashboard() {
  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard">
                    <h1 className="admin-title mb-3">My listing</h1>
                    <div className="tfcl-dashboard-middle mt-2">
                      <div className="row">
                        <div className="tfcl-dashboard-middle-left col-md-12">
                          <div className="tfcl-dashboard-listing">
                            <DashboardListingsTable
                              initialListings={myListingCars}
                              showFilters
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
