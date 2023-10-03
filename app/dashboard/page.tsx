import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "./overview";
import { ModeToggle } from "@/components/mode-toggle";

function DashBoard() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-row ">
        <Heading title="Dashboard" description="Overview of your college" />
        <span className="ml-[1100px]"><ModeToggle/></span>
        </div>
         <Separator />
        <div className="grid gap-4 grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium">
                Total Classrooms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">
                {/* {formatter.format(totalRevenue)} */}
                07
                </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium">
                Total Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">
                {/* {formatter.format(totalRevenue)} */}
                09
                </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className=" font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">
              {/* {salesCount} */}
              04
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className=" font-medium">Total Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">
                {/* {stockCount} */}
                02
                </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
          <Overview  />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashBoard