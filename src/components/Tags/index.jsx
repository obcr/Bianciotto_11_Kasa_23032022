import React from 'react';

const Tags = ({ tags }) => {
    return (
        <div className='tag'>
                        {
                tags.map(tag => {
                    return (
                        <div className='tags' key={tag}>{tag}</div>
                    )
                    }
                )
            }
        </div>
    );
};

export default Tags;