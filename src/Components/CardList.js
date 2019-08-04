import React from 'react';
import Card from './Card';

const CardList = ({Robot}) => {
    // if(true){
    //     throw new Error('ERROR!!!');
    // }
    return(
        <div>
            {Robot.map((user, i) => {
                //console.log(`Robot Array Element`, user);
                return <Card key={i} id={Robot[i].id} name={Robot[i].name} email={Robot[i].email}/>
                //having key prop minimizes work done by jvascript, 
                //no need to re-render whole dom when an object is deleted
            })}
        </div>
    );
}

export default CardList;