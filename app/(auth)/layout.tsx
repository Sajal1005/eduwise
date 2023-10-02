const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex items-center justify-center">
      {/* Component for displaying login & signup page */}
      {children}
    </div>
   );
}
 
export default AuthLayout;