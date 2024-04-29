import { Button } from '../Elements';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="main-frame">
                <div className="main-card">
                    Hello world
                    <hr/>
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
