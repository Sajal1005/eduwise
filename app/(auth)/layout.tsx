const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex items-center justify-center area">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    {/* Component for displaying login & signup page */}
    {children}
  </div>
   );
}
 
export default AuthLayout;