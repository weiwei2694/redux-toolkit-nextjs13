import { routes } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <ul className="flex gap-x-6">
                {routes.map(route => (
                    <Link
                        key={route.href}
                        href={route.href}
                    >
                        {route.title}
                    </Link>
                ))}
            </ul>

            <Button className="rounded-full">Login</Button>
        </nav>
    )
}

export default Navbar