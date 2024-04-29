import { AppProviderProps } from '../@types/app';


const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AppProvider;
