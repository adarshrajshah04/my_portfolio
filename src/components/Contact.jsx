import React from 'react'

import Swal from 'sweetalert2'
import classes from '../assets/CSS/Contact.module.css'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "a62a45fa-b652-4fac-9b34-802682787e22");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });

            event.target.reset(); // form clear
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };
    
    
    return (

        <div className={classes.main} id='contact'>
            <h1 className={classes.main_h1}>Get In Touch</h1>
            <p className={classes.para}>I'm currently looking for Software Developer opportunities where I can contribute, learn, and grow. Let's connect!</p>

            <div className={classes.info}>
                <a className={classes.info_a} href="mailto:adarshrajshah04@gmail.com?subject=Job Opportunity"><i className="bi bi-envelope"></i>      adarshrajshah04@gmail.com</a>
                <p className={classes.info_p}> <i className="bi bi-geo-alt-fill"></i> Mmumbai</p>
            </div>


            <div className={classes.form_div}>
                <form  className={classes.form}  onSubmit={onSubmit}>
                    <div className={classes.input_div}>
                        <input type="text" placeholder='Your Name' name='name' className={classes.inp} required/>
                        <input type="email" placeholder='Your Email' name='email' className={classes.inp} required/>
                    </div>
                    <input type="text" placeholder='Subject' name='subject' className={classes.inp_sub} required/>
                    <textarea className={classes.inp_text} name="message" id="" placeholder='Youe Message' required></textarea>

                    <button className={classes.btn} type='submit' >Send Message</button>
                </form >
            </div>

        </div>
    )
}

export default Contact
