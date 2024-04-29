import './ItemBox.css';

const ItemBox = () => {
    return (
        <div className='item-box'>
            <p>All pages</p>
            <div className="check-container">
                <input type="checkbox" name="item" />
            </div>
        </div>
    );
};

export default ItemBox;
