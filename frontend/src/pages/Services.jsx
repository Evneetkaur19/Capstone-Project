import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Services = () => {
  const { service } = useParams();
  const { services } = useContext(AppContext);
  const [filteredSer, setFilteredSer] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (services) {
      setFilteredSer(service.filter(ser => ser.services === services));
    } else {
      setFilteredSer(services);
    }
  };

  // useEffect(() => {
  //   applyFilter();
  // }, [services, service]);

  return (
    <div>
      <p className='text-pink-600'>Browse through the available services.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        {/* Services List */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filteredSer.length > 0 ? (
            filteredSer.map((item,index)=> (
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border-2 border-pink-700 bg-pink-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-pink-100' src={item.image} alt="" />
              <div className='p-4'>
                      <p className='text-pink-700 text-lg font-medium'>{item.name}</p>
                      <p className='text-blue-500 text-sm'>${item.prices} </p>
                  </div>
              </div>
          ))
          ) : (
            <p className='text-pink-500'>No services found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
