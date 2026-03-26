import { useState, useMemo } from "react";
import { users } from "../data/data";

export default function DataTable() {
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [page, setPage] = useState(1);

    const perPage = 4;

    const processedData = useMemo(() => {
        const filtered = users.filter((u) =>
            u.name.toLowerCase().includes(search.toLowerCase())
        );

        const sorted = [...filtered].sort((a, b) =>
            sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );

        return sorted;
    }, [search, sortAsc]);

    const totalPages = Math.ceil(processedData.length / perPage);
    const start = (page - 1) * perPage;
    const displayedUsers = processedData.slice(start, start + perPage);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>

                <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="border px-4 py-2 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-400"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />

                    <button
                        onClick={() => setSortAsc(!sortAsc)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Sort {sortAsc ? "A → Z" : "Z → A"}
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="p-3 text-left">ID</th>
                                <th className="p-3 text-left">User</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Role</th>
                            </tr>
                        </thead>

                        <tbody>
                            {displayedUsers.map((u) => (
                                <tr
                                    key={u.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">#{u.id}</td>

                                    <td className="p-3 flex items-center gap-3">
                                        <span className="font-medium">{u.name}</span>
                                    </td>

                                    <td className="p-3 text-gray-600">{u.email}</td>

                                    <td className="p-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${u.role === "Admin"
                                                ? "bg-green-100 text-green-700"
                                                : u.role === "Editor"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {u.role}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-5">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="text-sm text-gray-600">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
