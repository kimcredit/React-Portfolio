import React from 'react';
import "./style.css";

function Project02() {
    return (
        <section class="projecttwo position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center container-flex">    
                <div class="row shrink">
                    <div class="col-md-6 text-center align-self-center">
                            <img class="snacktime-image" src="images/snacktime.png" alt="Snack time app preview"></img>
                    </div>
                    <div class= "col-md-6 text-left align-self-center">
                        <div class="project-text">
                            <h1 >Snack Time</h1>
                            <h4>A simple web application that lets the user add and eat their favorite foods.</h4>
                            <p>
                                The user is able to add their own snacks. They are asked for the snack's name, to decide if the snack is healthy or unhealthy, and then submit 
                                it to an 'uneaten' list. When the user wishes to eat the snack, they can click 'devour it!' to move it to the devoured column. This lets them track what they've eaten.
                            </p>
                            <div>
                                <a class="buttons btn btn-outline-secondary" href="https://kcredit-snack-time.herokuapp.com/">Preview Application</a>
                                <a class="buttons btn btn-outline-secondary" href="https://github.com/kimcredit/Snack-Time">View Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Project02;