import Image from "next/image";
import React from "react";

const allbrand = [
  { id: 'b1',
    brandimg: 'https://i.ibb.co/31d22S1/menufacture-1-225x150.png'
  },
  { id: 'b2',
    brandimg: 'https://i.ibb.co/J7fGPmK/menufacture-5-225x150.png' 
  },
  { id: 'b3',
    brandimg: 'https://i.ibb.co/YDmLpzw/menufacture-3-225x150.png'
  },
  { id: 'b4',
    brandimg: 'https://i.ibb.co/J5FmyZP/menufacture-2-225x150.png'
  },
  { id: 'b5',
    brandimg: 'https://i.ibb.co/qrn7Qcv/menufacture-4-225x150.png'
  },
  { id: 'b6',
    brandimg: 'https://i.ibb.co/X5WG4xP/menufacture-8-225x150.png'
  },
  
];
const Brands = () => {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center container-fluid px-4 mx-auto">
        {allbrand.map((brand) => (
          <div key={brand.id} className="mx-6" >
            <Image
              src={brand.brandimg}
              alt="Picture of the brand"
              width="120px"
              height='80px'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
