import React from 'react';

export default function TestAccordion() {
    const numbers = [[1,2,3],[4,5,6],[-1,-2,-3],[0,0,0]];

    return (
        <div>
            <h1> TEST </h1>
            {numbers.map((item, index) => (
                <div>
                {numbers.at(index).map((jtem, jndex) => (
                    <h1>{jtem}</h1>
                ))}
                </div>
            ))}
        </div>
    )
}