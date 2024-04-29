import { useState } from 'react';
import { BoxItem } from '../../../@types/app';
import './ItemBox.css';

const ItemBox = ({text, allChecked, setAllChecked}: BoxItem) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (text === 'All pages') {
            setAllChecked(!allChecked);
        }
    };
    return (
        <div className='item-box'>
            <p>{text}</p>
            <div className="check-container">
                <input 
                    type="checkbox" 
                    name="item" 
                    checked={allChecked? allChecked : isChecked} 
                    onChange={handleCheckboxChange}
                />
            </div>
        </div>
    );
};

export default ItemBox;
