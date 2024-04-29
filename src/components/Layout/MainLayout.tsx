import { Button, ItemBox } from '../Elements';
import './MainLayout.css';

const MainLayout = () => {
    
    return (
        <div className="main-layout">
            <div className="main-frame">
                <div className="main-card">
                    <ItemBox text={'All pages'}/>
                    <div className="line">
                        <hr/>
                    </div>
                    <ItemBox text={'Page 1'} />
                    <ItemBox text={'Page 2'} />
                    <ItemBox text={'Page 3'} />
                    <ItemBox text={'Page 4'} />
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
