
import { useContext } from 'react';
import { useForm,Controller} from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../Provider/AuthProvider';


const handicraftCategories = [
    'Pottery',
    'Woodworking',
    'Textiles',
    'Jewelry',
    'Glass Art',
    'Metalwork',
    'Paper Crafts',
    'Other'
  ];

const SellerForm = () => {
  
    const {user}=useContext(AuthContext)
   
  const { register,
    handleSubmit,control,reset,
     } = useForm();

  const onSubmit = (data) => {
    
    fetch(`${import.meta.env.VITE_URL}/sellerForm`,{
    method : "POST",
    headers :{"Content-Type":"application/json"},
    body : JSON.stringify(data)
})
.then((res)=>res.json())
.then((data)=>{
    if(data.insertedId){
        toast.success("Your form has been recorded.Please wait for the admin approval")
        reset()
    }
})
  };



return <div className="hero min-h-screen bg-base-100 shadow-2xl pt-20 pb-14" style={{ backgroundImage:
        `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
         url('https://img.freepik.com/premium-photo/colorful-vase-with-red-yellow-design-bottom_865967-463128.jpg?w=900&fbclid=IwAR0WB9Lb7sxelWOt_7WVbgNAjZYzFf1NGXSHHEDU3g0-olw5E8ZxJ2iPuZU')` }}>
   
        <div className="card px-5 w-full  max-w-sm shadow-2xl bg-[#f0dcdc55]">
            <h3 className='text-4xl  pt-5 font-serif'>Seller Form</h3>
        
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="">
                    <input type="text" {...register('sellerName')} 
                    defaultValue={user?.displayName}
                    readOnly
                    placeholder="Name" className="bg-transparent placeholder:text-black w-full border-b border-primary  focus:outline-none rounded-xl  p-3" />
                   
                </div>
                <div className="">
                    <input type="email" {...register('sellerEmail')} 
                     defaultValue={user?.email}
                     readOnly
                    placeholder="Email Address" className="bg-transparent placeholder:text-black w-full border-b border-primary  rounded-xl focus:outline-none  p-3" />
                  
                </div>
                <div>
          <label htmlFor="category" className="block text-sm font-medium text-black my-3">
            Handicraft Category
          </label>
          <Controller
          
            name="category"
            control={control}
            render={({ field }) => (
              <select {...field} className="input rounded-xl ">
                <option value="" className=' ' disabled>Select a category</option>
                {handicraftCategories.map((category,i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
                <div className="form-control mt-3">
                    
                    <input onSubmit={handleSubmit} type="submit" className='btn border-primary btn-sm mt-4 bg-[#1589FF]' value={'Submit'} name="" id="" />

                </div>
            </form>

           
        </div>
    
</div>



};

export default SellerForm;
