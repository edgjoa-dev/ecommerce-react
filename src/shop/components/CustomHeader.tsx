import { useRef, useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryParams } from "@/hooks/useQueryParams";
import { Link, useParams } from "react-router";
import { cn } from "@/lib/utils";

export const CustomHeader = () => {
  const [cartCount] = useState(3);

  const { getParam, setParam } = useQueryParams();
  const { gender } = useParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const query = getParam("query");

  const handleInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    const value = inputRef.current?.value || "";
    setParam("query", value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold tracking-tight">MRKT | SHOP</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "link-underline text-sm font-medium transition-colors hover:text-primary",
                !gender ? "link-underline-active" : ""
              )}
            >
              Todos
            </Link>
            <Link
              to="/gender/men"
              className={cn(
                "link-underline text-sm font-medium transition-colors hover:text-primary",
                gender === "men" ? "link-underline-active" : ""
              )}
            >
              Hombres
            </Link>
            <Link
              to="/gender/women"
              className={cn(
                "link-underline text-sm font-medium transition-colors hover:text-primary",
                gender === "women" ? "link-underline-active" : ""
              )}
            >
              Mujeres
            </Link>
            <Link
              to="/gender/kids"
              className={cn(
                "link-underline text-sm font-medium transition-colors hover:text-primary",
                gender === "kids" ? "link-underline-active" : ""
              )}
            >
              Niños
            </Link>
          </nav>


          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  defaultValue={query}
                  onKeyDown={handleInputSearch}
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            <Link to="/auth/login" className="ml-8">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>

            <Link to="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
