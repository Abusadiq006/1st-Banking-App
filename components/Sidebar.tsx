import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className="mb-12 cursor-pointer
                items-center gap-2">
                    <Image 
                    src="/icons/logo-icon.png"
                    width={34}
                    height={34}
                    alt="Horizon logo"
                    className="size-[24px]
                    max-xl:size-14"
                    />
                    <h1 className='sidebar-logo'>Horizon</h1>
            </Link>

            {sidebarLinks.map((item)
                => {
                    const isActive =
                    return (
                        <Link href={item.route}
                         key={item.label}
                         className={cn('sidebar-link')}>
                            {item.label}
                        </Link>
                    )
                }
            )}
        </nav>
    </section>
  )
}

export default Sidebar