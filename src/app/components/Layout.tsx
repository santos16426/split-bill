import React, { ReactNode } from 'react';
import '@/app/styles/globals.scss';
import { Quicksand } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import Head from 'next/head';
import { Coins } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/app/components/ui/select"
  
const quicksand = Quicksand({ subsets: ['latin'] });

interface LayoutProps {
    children: ReactNode;
} 
const Layout:React.FC<LayoutProps> = ({ children }) => {
    const {settingsContext} = useAppContext();
    return (
        <div className={cn("relative h-full font-sans antialiased", quicksand.className)}>
            <Head>
                <title>Split Bill App</title>
                <meta name="description" content='' />
            </Head>
            <main className='relative flex flex-col min-h-screen'>
                <div className='absolute z-99 w-full h-20 flex flex-row justify-around px-20 py-5 bg-teal-300 items-center'>
                    <div className='flex flow-row gap-2 items-center text-black cursor-pointer'>
                        <p className='text-3xl font-bold'>Split Bill</p><div>
                        <Coins />
                    </div>
                    </div>
                    <div/>
                    <div className='flex flex-row gap-5 text-black items-center font-bold'>
                        <Select 
                            value={settingsContext.settings.currency} 
                            onValueChange={(e:string):void=>settingsContext.setSettings({currency:e})}                            
                        >
                            <SelectTrigger className="w-[70px]">
                                <SelectValue placeholder="Currency"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='font-bold' value="₱">PHP</SelectItem>
                                <SelectItem className='font-bold' value="$">USD</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='flex-grow flex-1 flex flex-row relative'>
                    <div className='w-1/4 h-full'></div>
                    <div className='w-full pt-24 px-5 h-screen'>{children}</div>
                    <div className='w-1/4 h-full'></div>
                    <div className='absolute bottom-0 w-full flex flex-row justify-center items-center text-black text-xs'>Copyright 2024 Billy Joe Santos</div>
                </div>
            </main>
            
        </div>
    );
};

export default Layout;
