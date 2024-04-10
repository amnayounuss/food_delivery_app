import { Button } from '@/components/ui/button';
import { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import { SquarePlus } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from "sonner";
import { CartUpdateContext } from '@/app/_context/CartUpdateContext';

const MenuSection = ({ restaurant }) => {
    const [menuItem, setMenuItem] = useState(null);
    const { user } = useUser();
    const { updateCart, setUpdateCart } = useContext(CartUpdateContext);

    useEffect(() => {
        restaurant?.menu && filterMenu(restaurant?.menu[0].category);
    }, [restaurant]);

    const filterMenu = (category) => {
        const result = restaurant?.menu?.find((item) => item.category === category);
        setMenuItem(result);
        console.log(result);
    };

    const addToCartHandler = (item) => {
        toast('Adding to Cart');
        const data = {
            email: user?.primaryEmailAddress?.emailAddress,
            name: item?.name,
            description: item?.description,
            productImage: item?.productImage[0]?.url,
            price: item?.price,
            restaurantSlug:restaurant.slug
        };
        GlobalApi.AddToCart(data).then(resp => {
            console.log(resp);
            setUpdateCart(!updateCart);
            toast("Successfully added to Cart");
        }).catch(error => {
            toast('Error adding to cart');
        });
    };

    return (
        <div className='grid grid-cols-4 mt-2 cursor-pointer'>
            <div className='hidden md:flex flex-col mr-10 g-2'>
                {restaurant?.menu?.map((item, index) => (
                    <Button
                        variant="ghost"
                        key={index}
                        className="flex justify-start"
                        onClick={() => filterMenu(item.category)}
                    >
                        {item.category}
                    </Button>
                ))}
            </div>
            <div className='col-span-3 cursor-pointer'>
                {menuItem && (
                    <div className='md:col-span-3 col-span-4'>
                        <h2 className='font-extrabold text-lg'>{menuItem.category}</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                            {menuItem.menuItem && menuItem.menuItem.map((item, index) => (
                                <div
                                    className='p-2 flex gap-2 border rounded-xl hover:border-primary cursor-pointer'
                                    key={index}>
                                    {item.productImage && item.productImage.length > 0 && (
                                        <Image
                                            src={item.productImage[0].url}
                                            alt={item.name}
                                            width={120}
                                            height={120}
                                            className='object-cover w-[120px] h-[120px] rounded-xl'
                                        />
                                    )}
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='font-bold'>{item.name}</h2>
                                        <h2>$ {item.price}</h2>
                                        <h2 className='text-sm text-gray-400 line-clamp-2'>{item.description}</h2>
                                        <SquarePlus className='cursor-pointer' onClick={() => addToCartHandler(item)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuSection;
