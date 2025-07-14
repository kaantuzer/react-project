export default function CheckBox({ value, onChange, formData }) {
    const isChecked = formData.toppings.includes(value);
    const isDisabled = !isChecked && formData.toppings.length >= 10;

    return (
        <label>
            <input
                type="checkbox"
                name="malzemeler"
                value={value}
                checked={isChecked}
                onChange={onChange}
                disabled={isDisabled}
            />
            {value}
        </label>
    );
}
