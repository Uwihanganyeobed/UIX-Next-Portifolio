"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { BsPersonFillLock } from "react-icons/bs";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} className="flex items-center">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Figma UI Design</HoveredLink>
            <HoveredLink href="/analysis">Project Analysis</HoveredLink>
            <HoveredLink href="/expo">App Development</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Admin Panel"
              href="https://commercial-admin-panel-five.vercel.app/"
              src="https://i.imgur.com/6I72WbB.png"
              description="A Best responsive UIX React Admin Panel"
            />
            <ProductItem
              title="E-Commerce Website"
              href="https://commercial-web-theta.vercel.app/"
              src="https://i.imgur.com/PlomUe6.png"
              description="A Best Front-end E-Commerce Website that is fully-Stack Made."
            />
            <ProductItem
              title="Hoobank App"
              href="https://hooband-react-tailwind-app.vercel.app/"
              src="https://i.imgur.com/rAojhk2.png"
              description="Banking Web Generally Made for you Guys, available now made with smooth UI design."
            />
            <ProductItem
              title="Expo App "
              href="https://n-ative-food-delivery-app.vercel.app/"
              src="https://i.imgur.com/GcMdik9.png"
              description="Expo is an open-source framework for apps that run natively on Android, iOS, and the web."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/uwihanganye-obed-ba7a90266/">
              LinkedIn
            </HoveredLink>
            <HoveredLink href="https://github.com/Uwihanganyeobed">
              GitHub
            </HoveredLink>
            <HoveredLink href="https://obed-portifolio-app.vercel.app/">
              Portifolio
            </HoveredLink>
            <HoveredLink href="https://vercel.com/vargas-projects-f7cdfea5">
              Team
            </HoveredLink>
          </div>
        </MenuItem>
        <div className="flex items-center ml-auto -mt-1">
          {" "}
          {/* Adjusted margin to move button up */}
          <Link href="/login">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span className="flex items-center">
                <span className="mr-2">Account</span>
                <BsPersonFillLock size={15} />
              </span>

              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
