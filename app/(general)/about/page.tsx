
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO description',
    keywords: ['About Page', 'Información', ''],
    
}

export default function AboutPage() {
    return (
        <>
            <span className='text-7xl'>About page</span>
        </>
    )
}