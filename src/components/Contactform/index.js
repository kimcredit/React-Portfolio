import React from 'react';
import './style.css';

function Contactform() {
    return (
        <section class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-8 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Get in touch</h1>
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="Name" class="form-control" id="exampleFormControlInput1"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                            </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-light">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contactform;