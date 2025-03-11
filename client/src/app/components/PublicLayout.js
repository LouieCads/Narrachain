"use client"

import Image from "next/image"
import Link from "next/link"
import { Bell } from "lucide-react"
import { useState } from "react"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  Avatar,
} from "@mui/material"
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import PeopleIcon from "@mui/icons-material/People"

export default function PublicLayout({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openNotification, setOpenNotification] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [title, setTitle] = useState("Chains")

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark", !isDarkMode) // Toggle dark mode on body
  }

  const navs = [
    {
      name: "Chains",
      href: "/home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
        </svg>
      ),
    },
    {
      name: "Messages",
      href: "/messages",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
        </svg>
      ),
    },
    {
      name: "Networks",
      href: "/networks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
      ),
    },
    {
      name: "Snapshots",
      href: "/snapshots",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-file-image"
          viewBox="0 0 16 16"
        >
          <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z" />
        </svg>
      ),
    },
  ]

  const handleListItemClick = (index) => {
    setSelectedIndex(index)
    setTitle(navs[index].name)
  }

  return (
    <div className="grid grid-cols-[325px_1fr_350px] bg-[#FDFDFD] overflow-x-hidden">
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 325,
            color: "white",
            paddingTop: 3,
            paddingLeft: 2,
            paddingRight: 2,
            paddingBottom: 2,
            backgroundColor: "#FDFDFD",
            // border: "none",
          },
        }}
      >
        <Box>
          <div className="flex items-center gap-[8px] mb-3 pl-3">
            <Link href="/home">
              <Image
                src="/narrachain.png"
                alt="Narrachain logo"
                width={45}
                height={45}
              />
            </Link>
            <p className="text-[19px] text-black font-semibold">Narrachain</p>
          </div>
          <nav>
            <List>
              {navs.map((item, index) => (
                <ListItem key={item.name} disablePadding>
                  <Link
                    href={item.href}
                    style={{ display: "block", width: "100%" }}
                  >
                    <ListItemButton
                      onClick={() => handleListItemClick(index)}
                      sx={{
                        backgroundColor:
                          selectedIndex === index ? "#171B21" : "transparent",
                        color: selectedIndex === index ? "#1D66FE" : "#171B21",
                        borderRadius: 4,
                        "&:hover": {
                          backgroundColor:
                            selectedIndex === index ? "#171B21" : "lightgray",
                        },
                      }}
                    >
                      <div className="flex items-center gap-4 py-[5px]">
                        {item.icon}
                        <ListItemText
                          primary={item.name}
                          sx={{
                            color: "inherit",
                            "& .MuiTypography-root": {
                              fontSize: "14px",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </div>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Drawer>

      <div className="flex flex-col pt-8 px-5">
        {/* Header */}
        <header className="grid grid-cols-[150px_1fr_80px] items-center">
          <p className="text-black font-semibold text-[25px]">{title}</p>
          <div className="relative w-[550px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#171B23"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-1.5 1.5l4.35 4.35z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search address or username..."
              className="text-gray-700 text-[14px] w-full pl-10 pr-3 py-2 border border-[#C7CDD4] rounded-full"
            />
          </div>
          <Button
            variant="ghost"
            className="ml-8"
            onClick={() => setOpenNotification(true)}
          >
            <Bell className="w-5 h-5 fill-current text-[#171B21]" />
          </Button>
        </header>

        {/* Main Content */}
        <main className="mt-5 min-h-screen">{children}</main>
      </div>

      {/* Right Panel */}
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: 350,
            backgroundColor: "#FDFDFD",
            paddingTop: 3,
            paddingRight: 2,
            paddingLeft: 2,
          },
        }}
      >
        <div className="flex items-center justify-end gap-5 mb-10">
          <div
            className="relative inline-block w-16 h-8 bg-gray-300 rounded-full cursor-pointer transition-all"
            onClick={handleToggle}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isDarkMode ? "transform translate-x-8" : ""
              }`}
            ></div>
          </div>
          <Avatar
            alt="Louie"
            src="../public/narrachain.png"
            sx={{
              background: "#1D66FE",
            }}
          />
        </div>
        <div className="w-[100%] flex flex-col gap-3">
          <div className="flex px-5  py-4 flex-col h-[175px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[12px] border border-[#C7CDD4]">
            <div className="flex items-center justify-start gap-2">
              <TrendingUpOutlinedIcon />
              <p className="text=[#171B21] font-semibold text-[16px]">
                Market Stats
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="flex px-5  py-4 flex-col h-[175px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[12px] border border-[#C7CDD4]">
            <div className="flex items-center justify-start gap-2">
              <TimelineOutlinedIcon />
              <p className="text=[#171B21] font-semibold text-[16px]">
                Trending for you
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="flex px-5  py-4 flex-col h-[175px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[12px] border border-[#C7CDD4]">
            <div className="flex items-center justify-start gap-2">
              <PeopleIcon />
              <p className="text=[#171B21] font-semibold text-[16px]">
                Who to network
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
