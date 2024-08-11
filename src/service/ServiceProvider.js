import { createContext, useRef, useState } from 'react'
import axios from 'axios'
import * as xlxs from 'xlsx'
export const contextProvider = createContext()



const ServiceProvider = ({ children }) => {

    const appName = "Send a Bulk_Mail"
    const [from, setFrom] = useState("")
    const [subject, setSubject] = useState("")
    const [composeMail, setComposeMail] = useState("")
    const [gmails, setGamilList] = useState([])
    const [responce, setResponce] = useState(false)
 
    const fileValue=useRef(null)

    const allFile = (e) => {
        
        const file = e.target.files[0]
      
        const reader = new FileReader();

        reader.onload = function (event) {
            const data = event.target.result;
            const workBook = xlxs.read(data, { type: 'binary' });
            const sheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[sheetName]
            const emailList = xlxs.utils.sheet_to_json(workSheet, { header: "A" })
            const final = emailList.map((e) => {
                return e.A
            })
            console.log(final)
            setGamilList(final)

        };
        reader.readAsBinaryString(file)
    }






    const onSubmit = async () => {
        setResponce(true)
        try {

            // const responce = await axios.post(`http://localhost:5000/sent`, { from: from, subject: subject, composeMail: composeMail, file: gmails })
            const responce = await axios.post(`https://bulk-mail-3.onrender.com/sent`, { from: from, subject: subject, composeMail: composeMail, file: gmails })
          
            if (responce.data) {
                alert("All Mails Sennd Succssfully")
                setResponce(false)
                setSubject("")
                setComposeMail("")
                setGamilList(null)
                setFrom("")
            }
            if(fileValue.current){
                fileValue.current.value=""
            }


        } catch (e) {
            console.log(e)
            setResponce(false)
        }



    }

    return (
        <contextProvider.Provider value={{
            appName, from, setFrom, setSubject,subject, composeMail, setComposeMail, onSubmit, allFile, responce, setResponce,fileValue

        }}>
            {children}

        </contextProvider.Provider>
    )
}


export default ServiceProvider