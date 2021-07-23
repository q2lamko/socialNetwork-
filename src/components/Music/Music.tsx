import React from 'react';
import classes from './Music.module.css'

const Music = () => {
    return (
        <div>
            <p>'Вам дано число, состоящее из нескольких цифр. Напишите функцию,
            которая поменяет местами цифры так, чтобы получилось максимально большое число.
            Примеры:<br/>
            (123) =&gt; 321<br/>
            (786) =&gt; 876<br/>
            ("001") =&gt; 100<br/>
            (999) =&gt; 999<br/>
            (10543) =&gt; 54310'<br/></p>
        </div>
    )
}

const n = 123476;
const arr = n.toString(10).split('').map(Number);
arr.sort(( a, b ) =>  b - a);  


const number = '50$'



export default Music;