import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Image src='/assets/images/NiN-Ai.svg' alt='logo' width={180} height={28} />
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar