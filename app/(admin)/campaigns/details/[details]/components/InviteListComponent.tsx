import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const InviteListComponent = () => {
  return (
    <>
      <Card className="my-4">
        <CardContent className="pt-4">
          <Tabs defaultValue="emailInvites">
            <div className="inline-flex">
              <TabsList className="inline-flex w-full">
                <TabsTrigger value="emailInvites">Email Invites</TabsTrigger>
                <TabsTrigger value="socialShareHistory">
                  Social Share History
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full">
              <TabsContent value="emailInvites">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="table-cell">Name</TableHead>
                      <TableHead className="table-cell">Email</TableHead>
                      <TableHead className="table-cell">Date Invited</TableHead>
                      <TableHead className="table-cell">Action</TableHead>
                      <TableHead className="table-cell">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="socialShareHistory">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>History</TableHead>
                      <TableHead className="table-cell">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default InviteListComponent;
