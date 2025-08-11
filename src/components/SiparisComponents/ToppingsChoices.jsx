import { extraToppings } from '../../sahteVeri';

function Toppings(props) {
    const { register, errors, toppings } = props;
    const isValid = toppings.length < 10;

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Ek Malzemeler</h2>
            <p className="text-gray-500 text-sm">En fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {extraToppings.map((topping) => (
                    <label
                        key={topping.id}
                        htmlFor={topping.id}
                        className="cursor-pointer relative flex items-center"
                    >
                        {/* input görünmez */}
                        <input
                            type="checkbox"
                            id={topping.id}
                            value={topping.name}
                            {...register("malzeme", {
                                required: false,
                                validate: {
                                    maxLimit: (value) =>
                                        value.length <= 9 || "En fazla 10 malzeme seçebilirsiniz.",
                                    minLimit: (value) =>
                                        value.length >= 3 || "En az 3 malzeme seçmelisiniz.",
                                },
                            })}
                            disabled={
                                toppings.length >= 10 && !toppings.includes(topping.name)
                            }
                            className="peer hidden"
                        />

                        {/* kutu */}
                        <div
                            className={`w-6 h-6 rounded-md border border-gray-300 
                          flex items-center justify-center 
                          peer-checked:bg-projectRed peer-checked:border-projectRed 
                          transition duration-200 `}
                        >
                        </div>

                        {/* malzeme adı */}
                        <span className="text-sm p-2 font-normal">{topping.name}</span>
                    </label>
                ))}
            </div>

            {errors.malzeme && (
                <p className="text-red-500 text-sm font-bold">{errors.malzeme.message}</p>
            )}
        </div>
    );
}

export default Toppings;
