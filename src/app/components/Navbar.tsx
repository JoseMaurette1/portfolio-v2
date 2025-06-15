"use client"
import React from 'react'
import { Github, Instagram, Linkedin } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <Dock direction='middle'>
        <DockIcon onClick={() => window.open("https://github.com/JoseMaurette1", "_blank")}>
          <Github className="h-6 w-6 text-zinc-200 hover:text-zinc-50" />
        </DockIcon>
        <DockIcon onClick={() => window.open("https://linkedin.com/in/josemaurette", "_blank")}>
          <Linkedin className="h-6 w-6 text-zinc-200 hover:text-zinc-50" />
        </DockIcon>
      </Dock>
    </div>
  )
}

export default Navbar