"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavbarMobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClickOnLink = () => {
    setOpen(false);
  };
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-card pt-12">
        <SheetHeader className="w-full">
          <SheetTitle className="text-start text-2xl">
            Developers blog
          </SheetTitle>
        </SheetHeader>
        <div className="my-1 border-b border-border/50"></div>

        <div className="flex h-full flex-col justify-between">
          <nav className="flex w-full flex-col text-xl">
            <Link
              href={"/skills"}
              onClick={handleClickOnLink}
              className="rounded-lg px-4 py-4 hover:bg-secondary/40"
            >
              Skills
            </Link>

            <Link
              href={"/projects"}
              onClick={handleClickOnLink}
              className="rounded-lg px-4 py-4 hover:bg-secondary/40"
            >
              Projects
            </Link>
            <Link
              href={"/about"}
              onClick={handleClickOnLink}
              className="rounded-lg px-4 py-4 hover:bg-secondary/40"
            >
              About Me
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileMenu;
