import "./contact.css"
import { useRef, useState} from "react";
import { useFormik } from 'formik';// Install using npm install formik --save
import * as Yup from 'yup';// Install using npm install yup --save
import emailjs from '@emailjs/browser';// Install using npm install emailjs --save
import Lottie from "lottie-react";//Install using npm install lottie-react(for animation)
import doneAnimation from "../../animation/done.json"
import contactAnimation from "../../animation/contact.json"
import {motion} from "framer-motion";//Install using npm install framer-motion

// Formik keeps track of your form’s state and then exposes it plus a few reusable methods and 
//        event handlers (handleChange, handleBlur, and handleSubmit) to your form via props.
// Yup is a JavaScript schema builder for value parsing and validation.
// EmailJS helps users to “send emails, html and attachments — files, streams and strings — from node.js to any smtp”.
// EmailJS to send email from react web app.
//- EmailJS only allows a maximum of 200 emails per month for a free account, so use wisely.

export default function FormContact() { 

    const form = useRef();
    const lottieRef= useRef();
    const [showMsg,setShowMsg]=useState(false);
    //************define what happens after the user submits the form
    const sendEmail = (event) => {
            // event.preventDefault();
            emailjs.sendForm('service_u9xf9lt', 'template_portfolio', form.current, 'FVYpFvuYGpTQX9pln')
            .then((result) => {
                console.log(result.text);
                //alert("Success!")
            }, (error) => {
                console.log(error.text);
                //alert("Failed...",error)
            });
    }

     //*******************//////////////////////////////           
    const Formik=useFormik({
        initialValues:{
                user_name: "",
                user_email: "",
                user_message: "",
        },
        /*******************start by defining a schema. This is an object that specifies all values you want to check*/
        validationSchema: Yup.object().shape({
                                    user_name: Yup.string().required("Name is required!"),
                                    user_email: Yup.string().email("Invalid email address format!").required("Email is required!"),
                                    user_message: Yup.string().required("Message is required!").min(10,"Message must be 10 characters at minimum!"),
        }),
        onSubmit: (values, {setStatus, resetForm, setSubmitting}) => {
            console.log('values', values);
            sendEmail();
            setSubmitting(false);
            setShowMsg(true);
            resetForm(); //clears the form after sending the email
      }
    })


    return (
        <section id="contact" className="contact" >
           <motion.h1 className="title "
                      initial={{
                        scale:0,
                      }}
                      animate={{
                        scale:1,
                       }}
                       transition={{duration:2}}
           >
               <span style={{marginRight: "15px"}} className="icon-envelope-o"/>
               Contact Us
            </motion.h1>
            <p className="subtitle">Contact us for more information and Get notified when I publish something new.</p>
            <div className="flex" style={{justifyContent: "space-between"}} >
                <div className="left-section">
                        <form ref={form} onSubmit={Formik.handleSubmit}>
                            {/*<-- name input -->*/}
                            <div className="flex">
                                <label htmlFor="name">Your full name</label>
                                <input type="text" 
                                       id="name" 
                                       name="user_name" 
                                       className={Formik.errors.user_name && Formik.touched.user_name? " form-control border-danger ": "form-control"}
                                       value={Formik.values.user_name}
                                       onChange={Formik.handleChange}
                                />
                                {Formik.errors.user_name && Formik.touched.user_name && <div className='text-danger'>{Formik.errors.user_name}</div>}
                            </div>  
            
                           {/*<-- Email input -->*/}
                            <div className="flex">
                                <label htmlFor="email">Email address</label>
                                <input type="text" 
                                       id="email" 
                                       autoComplete="off"//"autoComplete=Off" not work on Google Chrome Browser
                                       name="user_email" 
                                       value={Formik.values.user_email}
                                       onChange={Formik.handleChange}
                                       className={Formik.errors.user_email && Formik.touched.user_email? " form-control border-danger ": "form-control"} 
                                />
                                {Formik.errors.user_email && Formik.touched.user_email && <div className='text-danger'>{Formik.errors.user_email}</div>}
                            </div>

                            {/*<-- Message input -->*/}
                            <div style={{marginTop:"24px"}} className="flex">
                                <label htmlFor="message">Your message</label>
                                <textarea id="message" 
                                          name="user_message"
                                          value={Formik.values.user_message}
                                          onChange={Formik.handleChange} 
                                          className={Formik.errors.user_message && Formik.touched.user_message? " form-control border-danger ": "form-control"}
                                 />
                                 {Formik.errors.user_message && Formik.touched.user_message && <div className='text-danger'>{Formik.errors.user_message}</div>}                           
                            </div>

                            {/* show message when the form is submited */}
                            {showMsg && (
                               
                               <p className="text-success flex" style={{fontSize:"18px", marginTop:"1.7rem"}}>
                                        <Lottie style={{height:37}} loop={false} animationData={doneAnimation}/>
                                        Email has been submitted successfully  !
                                </p> 
                            )}

                            {/*<-- Submit -->
                            disable button clicks 
                                 1. during submission (Formik.isSubmitting) 
                                 2. all the fields are valid(!Formik.isValid)
                                3. if the fields values have been changed from their initial values (!Formik.dirty)
                            */}
                            <button type="submit" disabled={Formik.isSubmitting || !Formik.isValid || !Formik.dirty} className="submit" >Submit</button>
                        </form>
                </div>
                <div className="right-section">
                <Lottie className="contact-animation" 
                        style={{height:400}} 
                        animationData={contactAnimation}
                        lottieRef={lottieRef}
                      onLoadedImages={()=>{
                        //https://Lottiereact.com
                        lottieRef.current.setSpeed(0.5);
                      }}
                />
                </div>
        </div>
        </section>
   )          
}