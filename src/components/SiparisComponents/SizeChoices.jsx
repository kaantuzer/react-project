import { Sizes } from '../../sahteVeri'


function SizeChoices(props) {
    const { register, errors } = props;
    return (
        <div className="flex flex-col">

            <h2 className='baslik'>Pizza Boyutu<span className='text-red-500 pl-1'>*</span></h2>

            <div className="flex gap-4 pb-6">
                {Sizes.map(item => (
                    <label key={item.id} className="relative">
                        <input
                            type="radio"
                            id={item.value}
                            value={item.value}
                            {...register("size", { required: "Pizza boyutu seçmelisiniz." })}
                            className="peer hidden"
                        />
                        <div
                            className="w-12 h-12 rounded-full bg-bej flex items-center justify-center 
                         text-gray-600 font-semibold cursor-pointer transition-all duration-200 
                         peer-checked:bg-projectRed peer-checked:text-white"
                        >
                            {item.checkbox}
                        </div>
                    </label>
                ))}
            </div>
            {errors.size && <p className='text-red-500'>{errors.size.message}</p>}
        </div>
    )
}

export default SizeChoices;

