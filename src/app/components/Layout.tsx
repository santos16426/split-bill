import React, { ReactNode } from 'react';
import '@/app/styles/globals.scss';
import { Quicksand } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import Head from 'next/head';

const quicksand = Quicksand({ subsets: ['latin'] });

interface LayoutProps {
    children: ReactNode;
} 
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={cn("relative h-full font-sans antialiased", quicksand.className)}>
            <Head>
                <title>Split Bill App</title>
                <meta name="description" content='' />
            </Head>
            <main className='relative flex flex-col min-h-screen'>
                <div className='flex-grow flex-1'>
                {children}
                <div className='absolute bottom-0 w-full flex flex-row justify-center items-center text-white text-xs'>Copyright 2024 Billy Joe Santos</div>
                </div>
            </main>
            
        </div>
    );
};

export default Layout;
