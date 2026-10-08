import Link from 'next/link';
import React from 'react';

const SignButton = () => {
    return (
        <div className="flex gap-2">
            <Link href="/signin"><button className=" text-black px-4 py-2 rounded-md hover:bg-gray-300 ">সাইন ইন</button></Link>
            <Link href="/signup"><button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">সাইন আপ</button></Link>
        </div>
    );
};

export default SignButton;