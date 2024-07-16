"use client";

import React, { useState, useEffect } from "react";
import { ReloadIcon, CaretSortIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userCampaign } from "@/types/userCampaign";

interface Props {
  domain: string;
}

const CampaignTable = ({ domain }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<userCampaign[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    
    const getUserCampaigns = async () => {
      setLoading(true);
      const res = await fetch("/api/campaigns/get", {
        method: "POST",
        body: JSON.stringify({ domain: domain })
      });
      const ret = await res.json();
      if (ret.success) {
        setTableData(ret.data as userCampaign[]);
      }
      setLoading(false);
    };
    getUserCampaigns();
    // eslint-disable-next-line
  }, []);

  const columns: ColumnDef<userCampaign>[] = [
    {
      accessorKey: "campaign_name",
      header: "Campaign",
      cell: ({ row }) => (
        <a
          className="text-sm text-blue-600 inline-block"
          href={`/campaigns/details/${row.original.campaign_id}`}
        >
          {row.getValue("campaign_name")}
        </a>
      )
    },
    {
      accessorKey: "socialClicks.email",
      header: "Email Clicks"
    },
    {
      accessorKey: "socialClicks.facebook",
      header: "FB Clicks"
    },
    // {
    //   accessorKey: "socialClicks.gplus",
    //   header: "Google Clicks"
    // },
    {
      accessorKey: "socialClicks.linkedin",
      header: "LinkedIn Clicks"
    },
    // {
    //   accessorKey: "socialClicks.twitter",
    //   header: "Twitter Clicks"
    // },
    {
      accessorKey: "socialClicks.pinterest",
      header: "Pinterest Clicks"
    }
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection
    }
  });

  return (
    <Card className="flex flex-col">
      <CardHeader className="px-7">
        <CardTitle>Referral Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4">
          <Input
            placeholder="Filter campaigns..."
            value={
              (table.getColumn("campaign_name")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("campaign_name")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <div className="w-full flex items-center justify-center text-gray-500/70">
                      <ReloadIcon className="h-4 w-4 animate-spin mr-2" />
                      Loading...
                    </div>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignTable;
