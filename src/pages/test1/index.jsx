import React, {Suspense} from "react";
import { lazy } from "react";
const Bitcoin = lazy(()=>import("../modules/components/bitcoin"));
export const Test1 = () => {
    return(

        <div>
            <Suspense fallback={<div className="text-white text-4xl">Loading....</div>}>
                <Bitcoin/>
            </Suspense>
        </div>

    );
};
