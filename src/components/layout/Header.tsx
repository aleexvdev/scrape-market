"use client"

// import { useDispatch } from "react-redux";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export const Header = () => {
  // const dispatch = useDispatch();

  return (
    <header className="py-4 responsive-padding bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Scrape Market</h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="hover-effect touch-effect">
                <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Ver carrito</DropdownMenuItem>
              <DropdownMenuItem>Checkout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant={"outline"} size={"icon"} className="sm:hidden hover-effect touch-effect">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </header>
  );
}