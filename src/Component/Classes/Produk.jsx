import React, { Component } from 'react';
import './css/Produk.css'

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        })

        if (this.state.stock === 1) {
            this.setState({
                status: "Barang Kosong",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div className='box-stock'>
                <h2>{this.props.nama}</h2>
                <img src="https://placeimg.com/640/480/nature" alt="" />
                <p>Harga: {this.props.harga}</p>
                <p>Stok: {this.state.stock}</p>
                <p>Status: {this.state.status}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
            </div>
        )
    }
}

export default Produk;