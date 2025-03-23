<<<<<<< HEAD
export default function DashboardHeader() {
  // Move header code here
=======
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bell,
  Search,
  Settings,
  HelpCircle,
  User,
} from "lucide-react"

export default function DashboardHeader() {
  return (
    <header className="border-b bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search claims, policies..."
              className="w-[300px] pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
>>>>>>> fca8a6cb778a8dc4cdf54d5ff1bf0a53fe2d9ce2
} 