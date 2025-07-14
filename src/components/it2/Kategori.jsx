import { useParams } from 'react-router-dom';

const tumUrunler = [
    { id: 1, ad: 'Margarita', kategori: 'pizza' },
    { id: 2, ad: 'Pepperoni', kategori: 'pizza' },
    { id: 3, ad: 'Kola', kategori: 'icecek' },
    { id: 4, ad: 'Su', kategori: 'icecek' },
];

function Kategori() {
    const { kategori } = useParams();
    const urunler = tumUrunler.filter(urun => urun.kategori === kategori);

    return (
        <div className="kategori">

            <ul>
                {urunler.map(urun => (
                    <li key={urun.id}>{urun.ad}</li>
                ))}
            </ul>
        </div>
    );
}

export default Kategori;