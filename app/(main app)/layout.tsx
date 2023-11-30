import {redirect} from "next/navigation";

import {Navigation} from "@/app/(main app)/_components/navigation";
import {currentUser} from "@clerk/nextjs";


const MainLayout = ({
                        children
                    }: {
    children: React.ReactNode
}) => {

    const user = currentUser();

    if (!user) {
        return redirect("/");
    }

    return (
        <div className="h-full flex darl:bg-[#1F1F1F]">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;