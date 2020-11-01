import React from 'react';
import Bio from '../components/Bio';
import Project01 from '../components/Project01';
import Project02 from '../components/Project02';
import Project03 from '../components/Project03';
import Comingsoon from '../components/Comingsoon';

function Home() {
   return (
       <React.Fragment>
            < Bio />
            < Project01 />
            < Project02 />
            < Project03 />
            < Comingsoon />
       </React.Fragment>
       
   );
}

export default Home;