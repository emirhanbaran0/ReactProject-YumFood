import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

const Featured = () => {
    
    const sliders=[
        {
            url:'https://cdn.create.vista.com/api/media/small/36567413/stock-photo-pizza'
        },
        {
            url:'https://media.istockphoto.com/id/882144216/tr/foto%C4%9Fraf/bo%C5%9Fnak-b%C3%B6re%C4%9Fi-manti-yo%C4%9Furt-ve-fried-tereya%C4%9F%C4%B1-sosu-ile-bosnak-boregi.jpg?s=1024x1024&w=is&k=20&c=uf0B8h5XQlWuSY4Cus7CRbg7Edt4hZdp0T6f122dX5s='
        },
        {
            url:'https://media.istockphoto.com/id/1189709277/tr/foto%C4%9Fraf/kavrulmu%C5%9F-domates-sos-mozzarella-peyniri-ile-makarna-penne-gri-ta%C5%9F-arka-plan-%C3%BCst-te.jpg?s=1024x1024&w=is&k=20&c=wdGR1cl4xyr6kmHgjEe8G9iqD0CkdU6ZgbWejgeAMII='
        }
    ]   
    const [currentIndex, setCurrentIndex]= useState(0)
    const prevSlider=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide ? sliders.length-1 : currentIndex-1;
        setCurrentIndex(newIndex)
    }
    const nextSlider=()=>{
        const isLastSlide=currentIndex===sliders.length-1;
        const newIndex=isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex)
    }

    const moveToSlide=(slideIndex)=>{setCurrentIndex(slideIndex)}
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>
        <div className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
            
        </div>
        <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor'> 
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor'> 
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems,slideIndex)=>(
                    <div
                    key={slideIndex}
                    onClick={()=>moveToSlide(slideIndex)}
                     className='text-2xl cursor-pointer'><RxDotFilled /> </div>       
                ))
            }
        </div>
    </div>
  )
}

export default Featured
