import { createContext, useContext, useState } from "react";
import {SettingsItem} from '@/app/types/settings' 
import {GroupItem} from '@/app/types/group'
type AppContextProps = {
    settingsContext:{
        settings: SettingsItem,
        setSettings: React.Dispatch<React.SetStateAction<SettingsItem>>;
    },
    groupContext:{
        groups?:GroupItem[],
        setGroup: React.Dispatch<React.SetStateAction<GroupItem[]>>;
    }
}

const AppContext = createContext<AppContextProps|undefined>(undefined);

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider:React.FC<AppProviderProps> = ({children}) => {
    const [settings, setSettings] = useState<SettingsItem>({
        currency: '₱'
    });
    const [groups, setGroup] = useState<GroupItem[]|[]>([]);
    const groupContext = {
        groups,
        setGroup
    }
    const settingsContext = {
        settings,
        setSettings
    }
    return(
        <AppContext.Provider value={{settingsContext, groupContext}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error('useAppContext must be within an AppProvider')
    }
    return context
}