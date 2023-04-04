import React,{useState} from 'react';
import Sheader from "./ShopHeader";
import Sleft from "./ShopLeft";
import Sright from "./ShopRight";
import Layout from "./../Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
const Shope = () => {
  const [selectedBrands, setselectedBrands] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <Layout>
      <Sheader />
      <div className="row">
        <div className="col-md-3 mb-4">
          <Sleft setselectedBrands={setselectedBrands} selectedBrands={selectedBrands} searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </div>
        <div className="col-md-9">
          <Sright selectedBrands={selectedBrands} searchTerm={searchTerm} selectedCategories={selectedCategories} />
        </div>
      </div>



    </Layout>
  )
}

export default Shope