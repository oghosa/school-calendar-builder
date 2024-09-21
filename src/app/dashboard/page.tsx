"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Calendar as CalendarIcon, FileText, User, Upload, LogOut, Menu, Clock } from "lucide-react"
import Link from "next/link"

interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
}

const sampleEvents: Event[] = [
  { id: "1", title: "Math Class", date: "2023-06-15", time: "09:00 AM", description: "Advanced calculus lecture" },
  { id: "2", title: "Science Lab", date: "2023-06-16", time: "02:00 PM", description: "Chemistry experiment" },
  { id: "3", title: "Literature Seminar", date: "2023-06-17", time: "11:00 AM", description: "Discussion on Shakespeare" },
  { id: "4", title: "Physical Education", date: "2023-06-18", time: "10:00 AM", description: "Basketball practice" },
  { id: "5", title: "Art Workshop", date: "2023-06-19", time: "03:00 PM", description: "Watercolor painting session" },
]

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <CalendarIcon className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">School Calendar Builder</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard">Home</Link>
              <Link href="/calendar">Calendar</Link>
              <Link href="/logs">Logs</Link>
              <Link href="/profile">Profile</Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through your School Calendar Builder
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/dashboard" className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link href="/calendar" className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>Calendar</span>
                </Link>
                <Link href="/logs" className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Logs</span>
                </Link>
                <Link href="/profile" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Input className="md:w-[300px]" placeholder="Search..." type="search" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Left Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <Button className="w-full mb-4" onClick={() => setIsUploadModalOpen(true)}>
              <Upload className="mr-2 h-4 w-4" /> Upload Excel Calendar
            </Button>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-semibold">Calendar Import History</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Calendar_2023.xlsx</span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Calendar_2022.xlsx</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Your schedule for the next few days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {sampleEvents.map((event) => (
                      <div key={event.id} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{event.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.date} at {event.time}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Upload Excel Calendar</h2>
            <p className="mb-4">Drag and drop your Excel file here or click to select</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
              <p className="mt-1 text-xs text-gray-500">Excel files only</p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsUploadModalOpen(false)}>Cancel</Button>
              <Button>Upload</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}