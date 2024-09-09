import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import React, { createContext } from 'react';
import Image from 'next/image';

function DashboardHeader() {
    // const { user } = useKindeBrowserClient();
    return (
        <div>
            {/* {user?.picture && (
                <Image 
                    src={user.picture} 
                    alt="User profile" 
                    width={40} 
                    height={40}
                    className="rounded-full"
                />
            )} */}
            Dashbaord Header
        </div>
    );
}

export default DashboardHeader;
