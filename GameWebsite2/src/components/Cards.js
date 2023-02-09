import React from 'react';

import CardItem from './CardItem';

import './Cards.css';

import image1 from './vid/img-1a.jpg';
import image2 from './vid/img-2a.jpg';
import image3 from './vid/img-3a.jpg';
import image4 from './vid/shopping.jpg';


function Cards(){
    return (
        
        <div className='cards'>
         <h1>　これらの　EPIC ゲームをチェックしてください</h1>
         <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                     

                     
                     img src={image1} alt="img-1a.jpg"
                     text="ジャンプしたい場合はスパ＿スボタンを押す。スパ＿スボタンを2回押したら（たか）から取られて空を飛ぶことができます。"
                     label='空を飛んで攻撃'
                    
                     
                     
                   
                   /> 

                   <CardItem 

                     img src={image2} alt="img-2a.jpg"
                     text=""
                     label='水中ビューを楽しむ'
                     path='/services'
                    /> 
   
                </ul>

                <ul className="cards__items">
                <CardItem 

                    img src={image3} alt="img-9.jpg"
                    text="{あ(or)A} ボタンを押したら戦えることができます。"
                    label='危険なモンスターを倒して平和を守る'
                    path='/services'
                   /> 

                   <CardItem 

                     img src={image4} alt="shopping.jpg"
                     text="レベルアップしますしょうか?"
                     label='ゲームの中に楽しむ'
                     path='/services'
                    /> 
                </ul>

            </div>
         </div>
        </div>
    );
}

export default Cards;