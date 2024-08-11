import React, { useContext } from 'react'
import { contextProvider } from '../service/ServiceProvider'

const AllInputs = () => {

    const {onSubmit,from,setFrom, subject, setSubject, composeMail, setComposeMail,responce, allFile,fileValue } = useContext(contextProvider)

    return (
        <div className="px-2 py-2 flex  flex-col gap-2 h-full">
            <div className=" flex gap-2 flex-col md:flex-row ">
             
                <div className="w-full flex justify-center items-center bg-white px-2 rounded  font-semibold">From
                    <input className='w-full focus:outline-none  px-2 py-2' type="text" value={`${from}`} onChange={(e) => setFrom(e.target.value)} />
                </div>

            </div>
            <input className='w-full px-2 py-2 rounded focus:outline-none' type="text"  value={subject}  placeholder='Subject'onChange={(e) => setSubject(e.target.value)} />

            <textarea className='px-2 py-2 rounded min-h-[150px] focus:outline-none' name="" value={composeMail} placeholder='ComposeMail' onChange={(e) => setComposeMail(e.target.value)} id=""></textarea>

            <div className="px-5 py-3 border-4 w-full max-w-[400px] border-dashed flex justify-center" >
                <input type="file" name="" id="" ref={fileValue}   onChange={(e) => allFile(e)} />
            </div>

            <button className='px-2 py-1 bg-blue-400 rounded font-semibold ' onClick={onSubmit} type="submit">{responce?"sending...":"send"}</button>


        </div>
    )
}

export default AllInputs