
import reactLogo from '../../assets/logo.svg';

export default function OrderHeader() {
    return (
        <div className="flex flex-col justify-center items-center bg-projectRed p-8">
            <img src={reactLogo} className="w-80 md:w-96" alt="High logo" />
        </div>
    )
}