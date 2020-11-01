import React from 'react';
import "./style.css";
import image from './boredjar.png';

function Project02() {
    return (
        <section class="projectthree position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center container-flex">    
                <div class="row shrink">
                    <div class="col-md-6 text-center align-self-center">
                            <img class="boredjar-image" src= {image} alt="Bored Jar App preview"></img>
                    </div>
                    <div class= "col-md-6 text-left align-self-center">
                        <div class="project-text">
                            <h1 >Bored Jar</h1>
                            <h4>A mobile first application that helps users decide how to spend their free time.</h4>
                            <p>
                                This application lets users add quick tasks to a 'bored-jar'. When the user has free time on their hands, the application will present them with a random
                                task based on the length of the activity. I was a key contributor in a group of four.
                            </p>
                            <div>
                                <a class="buttons btn btn-outline-secondary" href="https://bored-jar.herokuapp.com/jar">Preview Application</a>
                                <a class="buttons btn btn-outline-secondary" href="https://github.com/kimcredit/bored-jar">View Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Project02;