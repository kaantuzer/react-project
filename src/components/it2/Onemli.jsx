import './Onemli.css';
import OnemliButton from './OnemliButton';
import Kategori from './Kategori';

function Onemli() {
    return (
        <div className="home2">
            <div className="onemli">
                <OnemliButton />
            </div>
            <Kategori />
        </div>
    );
}
export default Onemli;