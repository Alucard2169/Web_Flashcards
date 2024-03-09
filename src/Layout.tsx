import { ReactNode } from "react";
import Navbar from "./ui/Navbar";

const Layout = ({children}:{children: ReactNode}) => {
    return (
      <main className="bg-MAIN h-full w-full flex flex-col">
       <Navbar/>
        <div className="pt-12">{children}</div>
      </main>
    );
}
 
export default Layout;