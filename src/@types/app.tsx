import { Dispatch, SetStateAction } from 'react';
export type AppProviderProps = {
    children: React.ReactNode;
};


export interface BoxItem {
    text: string,
    setAllChecked:Dispatch<SetStateAction<boolean>>,
    allChecked: boolean
}