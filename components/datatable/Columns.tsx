import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export type UserRow = {
    id: string;
    name: string;
    email: string;
    role: {name: string};
};

export const userColumns: ColumnDef<UserRow>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorFn: (row) => row.role.name,
        header: "Role",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
            <Button variant="destructive" size="sm">
                Delete {row.original.name}
            </Button>
        ),
    },
];