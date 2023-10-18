import Sidebar from './Sidebar';
import axiosURL from '../../tools/axiosInstance'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BeersCreateForm() {

    const navigate = useNavigate()

    const [newBeers, setNewBeers] = useState({
        "name": "",
        "description": "",
        "price": "",
        "img": ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewBeers(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const obj = {
            "data": {
                "name": newBeers.name,
                "description": newBeers.description,
                "price": newBeers.price
            }
        }

        try {
            const response = await axiosURL.post('/api/beers', obj);

            //console.log('Respuesta del servidor:', response.data);

            setNewBeers({
                "name": "",
                "description": "",
                "price": "",
                "img": ""
            });

            navigate('/admin/beers')
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            console.log('Detalles del error:', error.response);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label htmlFor="name" className='mb-5'>
                        <span>Nombre:</span>
                        <input type="text" placeholder='Ingresa el nombre del producto' name="name" id="name" key="name" value={newBeers.name} onChange={handleChange} required />
                    </label>
                    <label htmlFor="description" className='mb-5'>
                        <span>Descripción:</span>
                        <input type="text" placeholder='Ingresa la descripcion del producto' name="description" id="description" key="description" value={newBeers.description} onChange={handleChange} required />
                    </label>
                    <label htmlFor="price" className='mb-5'>
                        <span>Precio:</span>
                        <input type="text" placeholder='Ingresa el precio del producto' name="price" id="price" key="price" value={newBeers.price} onChange={handleChange} required />
                    </label>
                    <label htmlFor="" className='mb-5'>
                        <span>Imagen:</span>
                        <input type="text" name="img" id="img" key="img" value={newBeers.img} onChange={handleChange} />
                    </label>
                    <button type='submit' className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary">Guardar</button>
                </form>
            </div>
        </div>
    )
}

