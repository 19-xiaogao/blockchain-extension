import React, { useCallback, useState } from "react";

export default function Steps({ index }: { index: number }) {

    const [point, setPoint] = useState(Array.from({ length: 4 }, (_, index) => index))

    const renderPoint = useCallback(() =>
        point.map((i) => (<div className={`w-2 h-2 rounded-full bg-[#32302f] mr-3 ${index === i ? 'bg-[#e2724a]' : 'bg-[#32302f]'}`}></div>))
        , [point])

    return <div className="flex">
        {renderPoint()}
    </div>
}