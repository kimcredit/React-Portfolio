import React from 'react';
import "./style.css";

function Project01() {
    return (
        <section class="project position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center container-flex">    
            <div class="row shrink">
                <div class="col-md-6 text-center align-self-center">
                        <img class="bcard-image" src="images/project_image.png" alt="birthday card generator example"></img>
                </div>
                <div class= "col-md-6 text-left align-self-center">
                    <div class="project-text">
                        <h1 >Birthday Card Generator</h1>
                        <h4>An application that allows a user to make a birthday card featuring a fun item related to the recipient's date of birth.</h4>
                        <p>
                            When the user enters the birthday of the intended recipient and chooses a card theme, they are presented with an automatically generated 
                            birthday card featuring appropriate styling and relevant imagery. I was a core collaborator in a group of four.
                        </p>
                        <div>
                            <a class="buttons btn btn-outline-secondary" href="https://kimcredit.github.io/bcard/">Preview Application</a>
                            <a class="buttons btn btn-outline-secondary" href="https://github.com/kimcredit/bcard">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Project01;