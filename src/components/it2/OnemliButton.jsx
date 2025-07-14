import './Onemli.css';
export const buttons = [
    { id: 'siparis', value: 'Ramen' },
    { id: 'siparis-iptal', value: 'Pizza' },
    { id: 'siparis-guncelle', value: 'Burger' },
    { id: 'siparis-tmm', value: 'French Fries' },
    { id: 'siparis-tamqwewqamla', value: 'Fast Food' },
    { id: 'siparis-qweasda', value: 'Soft Drink' },
]

function OnemliButton() {
    return (
        <div className="buttonlar-div">
            {buttons.map(button => (
                <button key={button.id}>{button.value}</button>
            ))}
        </div>
    )
}
export default OnemliButton;