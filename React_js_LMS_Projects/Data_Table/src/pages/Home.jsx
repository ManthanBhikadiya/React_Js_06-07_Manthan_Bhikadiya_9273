import DataTable from "../components/DataTable";
import { users } from "../data/data";

export default function Home() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <DataTable data={users} />
        </div>
    );
}