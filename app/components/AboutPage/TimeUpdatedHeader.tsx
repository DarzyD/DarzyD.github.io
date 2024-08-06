"use client";
import React, { useState, useEffect } from 'react'

const getRecentTimeCommitted = async () => {
    try {
        const response = await fetch(`https://api.github.com/repos/DarzyD/DarzyD.github.io/branches/main`);
        const data = await response.json();

        return new Date(data.commit.commit.author.date).toLocaleString();
    } catch (error) {
        console.error(error);
        return 'Error fetching time';
    }
}
const TimeUpdatedHeader = () => {
    const [timeCommitted, setTimeCommitted] = useState<string | null>(null);

    useEffect(() => {
        const fetchTime = async () => {
            const time = await getRecentTimeCommitted();
            setTimeCommitted(time ?? 'Error fetching time');
        };

        fetchTime();
    }, []);
    return (
        <div className="flex flex-col justify-center items-center ml-1 mr-1 mt-1 mb-2 p-0.5">
            Last updated: {timeCommitted ? timeCommitted : 'Loading...'}
        </div>
    )
}

export default TimeUpdatedHeader