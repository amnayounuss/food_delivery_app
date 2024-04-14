import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function ReviewSection({restaurant}) {
    const [rating, setRating] = useState(0)
    const [reviewText, setReviewText] = useState();
    const { user } = useUser();

    const handleSubmit=()=>{
        const data = {
          email:user.primaryEmailAddress.emailAddress,
          profileImage:user?.imageUrl,
          userName:user?.fullName,
          star:rating,
          reviewText:reviewText,
          RestroSlug: restaurant.slug
           
        };
        console.log(data);

        GlobalApi.AddNewReview(data).then(resp=>{
          console.log(resp);
          toast('Review Added!!')
        })

    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-20'>
        <div className='flex flex-col gap-2 p-5 rounded-lg border shadow-lg '>
            <h2 className='font-bold text-lg'>Add your review</h2>
              <ReactRating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
            <Textarea onChange={(e)=>setReviewText(e.target.value)} />
            <Button disabled={rating==0||!reviewText}
              onClick={()=>handleSubmit()}
            >Submit</Button>
        </div>
        <div className='col-span-2'>
            list of review
        </div>
      
    </div>
  )
}

export default ReviewSection
