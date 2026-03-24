import DataCard from "./DataCard";

const DataList = ({ data, deleteData, setEditItem }) => {
    return (
        <div className="p-4 grid md:grid-cols-3 gap-4">
            {data.map((item) => (
                <DataCard
                    key={item.id}
                    item={item}
                    deleteData={deleteData}
                    setEditItem={setEditItem}
                />
            ))}
        </div>
    );
};

export default DataList;