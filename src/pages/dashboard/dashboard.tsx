import Menu from "../../components/menu";
import Bill from "../../components/bill";
import LocationTable from "../../components/locationTable";
import { TitleText } from "../../components/title";
import "./dashboard.css";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { tableId } = useParams();

  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen gap-1 p-1">
      <div className="lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-13 col-start-1 col-end-13 row-start-6 row-end-11">
        <div className="w-full h-full bg-white rounded shadow-[#1B262C] shadow">
          {Number(tableId) ? <Menu /> : null}
        </div>
      </div>
      <div className="lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-10 col-start-1 col-end-13 row-start-1 row-end-6">
        <div className="w-full h-full bg-white rounded shadow-[#1B262C] shadow">
          {Number(tableId) ? (
            <Bill />
          ) : (
            <>
              <TitleText title="Location table" />
              <LocationTable />
            </>
          )}
        </div>
      </div>
      <div className="lg:col-start-8 lg:col-end-13 lg:row-start-10 lg:row-end-13 col-start-1 col-end-13 row-start-11 row-end-13">
        <div className="w-full h-full bg-white rounded shadow-[#1B262C] shadow-sm "></div>
      </div>
    </div>
  );
}

export default Dashboard;
