import './Products.css';

export const buttons = [
    { id: 'ramen', value: 'Ramen' },
    { id: 'pizza', value: 'pizza' },
    { id: 'burger', value: 'Burger' },
    { id: 'french-fries', value: 'French Fries' },
    { id: 'fast-food', value: 'Fast Food' },
    { id: 'soft-drink', value: 'Soft Drink' },
]

function ProductsButton({ setSelectedCategory }) {
    return (
        <>
            {buttons.map(button => (
                <button key={button.id} onClick={() => setSelectedCategory(button.value)}>{button.value}</button>
            ))}

        </>
    )
}
export default ProductsButton;