import './ItemBox.css';

const ItemBox = ({text}:{text: string}) => {
    return (
        <div className='item-box'>
            <p>{text}</p>
            <div className="check-container">
                <input type="checkbox" name="item" />
            </div>
        </div>
    );
};

export default ItemBox;
