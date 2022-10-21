import React from 'react';
import Produk from '../Classes/Produk';
// import Blog from './Blog';

const Home = () => {
    return <div>
        {<Produk nama="MacBook pro 2021" stock="10" harga="33.000.000" />}
        {<Produk nama="MacBook pro 2021" stock="15" harga="29.300.000" />}
        {<Produk nama="MacBook pro 2021" stock="27" harga="26.970.000" />}


        {/* <Blog
            tanggal="11 Oktober 2022"
            judul="Rekayasa Perangkat Lunak"
            summary=" RPL (Rekayasa Perangkat Lunak) Termasuk Jurusan Teknologi dan 
            Informasi yang didalamnya berisi banyak Pelajaran pelajaran yang berbasis Teknologi ."
        />
        <Blog
            tanggal="12 Oktober 2022"
            judul="Teknik Kendaraan Ringan Otomotif"
            summary=" Teknik Kendaraan Ringan Otomotif 
            merupakan kompetensi keahlian pada rumpun program keahlian teknik otomotif di bidang Mobil."
        />
        <Blog
            tanggal="13 Oktober 2022"
            judul="Teknik Bisnis Sepeda Motor"
            summary="Teknik Bisnis Sepeda Motor adalah teknik mesin yang mempelajari,
            merancang, dan mengembangkan alat transportasi mesin (Motor).."
        />  */}
    </div>
}

export default Home;