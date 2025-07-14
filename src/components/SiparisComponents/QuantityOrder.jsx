function QuantityOrder(props) {
    const { formData, increase, decrease, handleChange } = props;
    return (
        <div className="quantity-order">
            <button type="button" onClick={decrease} onChange={handleChange} name="quantity">-</button>
            <span>{formData.quantity}</span>
            <button type="button" onClick={increase} onChange={handleChange} name="quantity">+</button>
        </div>
    )
}

export default QuantityOrder;