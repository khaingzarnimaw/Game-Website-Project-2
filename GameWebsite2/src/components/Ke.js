import React from 'react';

import KeItem from './KeItem';

import './Ke.css';

import image1 from './vid/keke2.jpg';
import image2 from './vid/keke3.jpg';
import image3 from './vid/keke4.jpg';




function Ke(){
    return (
        
        <div className='Ke'>
         
         {/* <div className="Ke__container">
            <div className="Ke__wrapper">
                <ul className="Ke__items"> */}
                    <KeItem 
                     
                     img src={image1} alt="keke2.jpg"                     
                   /> 
                  
                   <KeItem 
                     
                     img src={image2} alt="keke3.jpg"                     
                   /> 
                    <KeItem 
                     
                     img src={image3} alt="keke4.jpg"                     
                   /> 
{/* 
                   <KeItem 

                     img src={image2} alt="keke3.jpg"
                     text="Impossible is nothing.We can do it"
                     label='水中ビューを楽しむ'
                     path='/services'
                    />  */}
   
                {/* </ul> */}

                {/* <ul className="Ke__items">
                <KeItem 

                    img src={image3} alt="img-9.jpg"
                    text="{あ(or)A} ボタンを押したら戦えることができます。"
                    label='危険なモンスターを倒して平和を守る'
                    path='/services'
                   /> 

                   <KeItem 

                     img src={image2} alt="img-2a.jpg"
                     text="Impossible is nothing.We can do it"
                     label='水中ビューを楽しむ'
                     path='/services'
                    /> 
                </ul> */}

            </div>
        //  </div>
        // </div>
    );
}

export default Ke;