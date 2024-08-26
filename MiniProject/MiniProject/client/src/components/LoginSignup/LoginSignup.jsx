import React, { useState } from "react";
import "./LoginSignup.css";

 const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});
  const [errors, setErrors] = useState({});

   const changeHandler = (e) => {
     setFormData({...formData,[e.target.name]:e.target.value});
    }

    const validateForm = () => {
      let errorsObj = {};
  
      if (state === "Sign Up" && formData.username.trim() === "") {
        errorsObj.username = "Username is required";
      }
  
      if (formData.email.trim() === "") {
        errorsObj.email = "Email is required";
      }
  
      if (formData.password.trim() === "") {
        errorsObj.password = "Password is required";
      }
  
      setErrors(errorsObj);
      return Object.keys(errorsObj).length === 0;
    };

 const login = async () => {
  if (!validateForm()) return;
    let dataObj;
    await fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
   }

  const signup = async () => {
    if (!validateForm()) return;
    let dataObj;
    await fetch('http://localhost:8081/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
   }

   return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <div className="form-group">
              <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
          )}
          <div className="form-group">
            <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
        </div>

        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>

        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>
          :
          <p className="loginsignup-login">Already have an account? <span onClick={() => {setState("Login")}}>Login here</span></p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );


};

export default LoginSignup;

//====================================================================================
// import React, { useState } from "react";
// import "./LoginSignup.css";

// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [agreed, setAgreed] = useState(false);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let errorsObj = {};

//     if (state === "Sign Up" && formData.username.trim() === "") {
//       errorsObj.username = "Username is required";
//     }

//     if (formData.email.trim() === "") {
//       errorsObj.email = "Email is required";
//     }

//     if (formData.password.trim() === "") {
//       errorsObj.password = "Password is required";
//     }

//     setErrors(errorsObj);
//     return Object.keys(errorsObj).length === 0;
//   };

//   const handleAuth = async (url) => {
//     if (!validateForm()) return;
//     if (!agreed) {
//       alert("You must agree to the terms and conditions.");
//       return;
//     }

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (data.success) {
//         localStorage.setItem('auth-token', data.token);
//         window.location.replace("/");
//       } else {
//         alert(data.errors);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" && (
//             <div className="form-group">
//               <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} />
//               {errors.username && <span className="error">{errors.username}</span>}
//             </div>
//           )}
//           <div className="form-group">
//             <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>
//           <div className="form-group">
//             <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>
//         </div>

//         <button onClick={() => { state === "Login" ? handleAuth('http://localhost:8081/login') : handleAuth('http://localhost:8081/signup') }}>Continue</button>

//         {state === "Login" ?
//           <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up"); setFormData({ username: "", email: "", password: "" }); setErrors({}); }}>Click here</span></p>
//           :
//           <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login"); setFormData({ username: "", email: "", password: "" }); setErrors({}); }}>Login here</span></p>
//         }

//         <div className="loginsignup-agree">
//           <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


