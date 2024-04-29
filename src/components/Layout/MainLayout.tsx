import { useState } from 'react';
import { Button, ItemBox } from '../Elements';
import './MainLayout.css';

const MainLayout = () => {
    const [allChecked, setAllChecked] = useState(false);
    
    return (
        <div className="main-layout">
            <div className="main-frame">
                <div className="main-card">
                    <ItemBox text={'All pages'} allChecked={allChecked} setAllChecked={setAllChecked}/>
                    <div className="line">
                        <hr/>
                    </div>
                    <ItemBox text={'Page 1'} allChecked={allChecked} setAllChecked={setAllChecked}/>
                    <ItemBox text={'Page 2'} allChecked={allChecked} setAllChecked={setAllChecked}/>
                    <ItemBox text={'Page 3'} allChecked={allChecked} setAllChecked={setAllChecked}/>
                    <ItemBox text={'Page 4'} allChecked={allChecked} setAllChecked={setAllChecked}/>
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
