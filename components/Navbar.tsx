"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Users", href: "/dashboard/users" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-gray-900">
        MyLogo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-gray-900 transition"
          >
            {item.label}
          </Link>
        ))}

        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button variant="default" size="sm">
          Sign Up
        </Button>
        <LocaleSwitcher />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Login
                </Button>
                <Button variant="default" onClick={() => setOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
