import { useEffect, useState } from 'react';
import api from '../services/api';
import { Package, Plus, Trash2, Edit } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Veri çekilemedi', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2"><Package className="text-primary" /> Ürün Yönetimi</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90">
          <Plus size={20} /> Yeni Ürün
        </button>
      </div>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-bottom">
              <tr>
                <th className="p-4">Ürün Adı</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Fiyat</th>
                <th className="p-4">Stok</th>
                <th className="p-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">{product.name}</td>
                  <td className="p-4">{product.category?.name || 'Genel'}</td>
                  <td className="p-4">{product.price} ₺</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4 text-right">
                    <button className="text-secondary hover:text-primary mr-3"><Edit size={18} /></button>
                    <button className="text-accent hover:text-red-700"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;