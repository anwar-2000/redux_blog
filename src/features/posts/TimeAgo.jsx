import { parseISO , formatDistanceToNow, parse } from "date-fns";

import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo=''
    if(timestamp){
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date) // calculate the period between now and the timsstamp
    timeAgo = `${timePeriod} ago `;
        }
    
    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo