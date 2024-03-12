import { ComponentType } from "react";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";

interface LayoutProps {
    component: ComponentType<any>;
}
const Layout: React.FC<LayoutProps> = ({ component: Component }) => {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">{Component && <Component />}</div>
      </div>
    );
};
export default Layout;
