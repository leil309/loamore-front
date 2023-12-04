import RootHeader from "@/components/layout/root-header";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <RootHeader />
            {children}
            <footer>
                <div>
                    <span>footer</span>
                </div>
            </footer>
        </div>
    );
}
export default Layout;