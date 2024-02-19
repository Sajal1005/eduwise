import { currentProfile } from "@/lib/current-profile";

async function Header() {
  const profile = await currentProfile();
  return (
    <div className='flex justify-between px-4 pt-4 text-black'>
      <h2>Dashboard</h2>
      <h2>Welcome back, {profile.name}</h2>
    </div>
  )
}

export default Header
