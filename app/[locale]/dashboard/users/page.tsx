import { DataTable } from "@/components/datatable/DataTable";
import { userColumns } from "@/components/datatable/Columns";
import { getUsers } from "@/services/user.service";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <DataTable columns={userColumns} data={users} />
    </div>
  );
}
