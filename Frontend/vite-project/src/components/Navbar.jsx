import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">MindNest</h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"}
                            className="btn bg-blue-700 text-white border-none hover:bg-blue-600">
                            <PlusIcon className="size-5" />
                            <span>Build a nest</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;