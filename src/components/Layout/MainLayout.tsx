import { Button, ItemBox } from '../Elements';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="main-frame">
                <div className="main-card">
                    <ItemBox />
                    <div className="line">
                        <hr/>
                    </div>
                    <ItemBox/>
                    <ItemBox/>
                    <ItemBox/>
                    <ItemBox/>
                    <div className="line">
                        <hr/>
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
