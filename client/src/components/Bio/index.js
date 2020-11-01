import React from 'react';

function Bio() {
    return (
        <section class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-8 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal"> Hello. I'm Kim</h1>
                <p class="lead font-weight-normal">
                    I am a designer and full-stack web developer based in Baltimore, MD. 
                    I am passionate about working on interdisciplinary teams combining the digital and the physical.
                    With each new project I aim to leverage my design background and web development knowledge to create
                    clean user interfaces and impactful user experiences that blend seamlessly with their products.
                </p>
                <a class="buttons btn btn-outline-secondary" href="kcredit-resume.pdf">Resume</a>
            </div>
        </section>
    )
}

export default Bio;