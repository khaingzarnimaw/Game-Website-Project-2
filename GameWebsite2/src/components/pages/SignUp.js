import React from 'react';
import '../../App.css';


//
import '../../components/pages/signup_component';





function SignUp(){
    return(
        <form>
           <div>
               <h1 className='sign-up'>Auth</h1>
               <h2> Sign UP</h2>

               <div className="mb-3">
                 <label>First name</label>
                 <input 
                   type="text"
                   className="form-control"
                   placeholder="First name"
                 />
               </div>

               <div className="mb-3">
                 <label>First name</label>
                 <input 
                   type="text"
                   className="form-control"
                   placeholder="First name"
                 />
               </div>

               <div className="mb-3">
                 <label>First name</label>
                 <input 
                   type="text"
                   className="form-control"
                   placeholder="First name"
                 />
               </div>

               <div className="mb-3">
                 <label>First name</label>
                 <input 
                   type="text"
                   className="form-control"
                   placeholder="First name"
                 />
               </div>



            
               {/* <figure>
               <img src={image1} alt="img-1a.jpg"/>
               </figure>
                */}
            </div>
        </form>
        
        
    );
     
}
export default SignUp;