import Card from "../component/Card";
import { getAllTransactions } from "../payment/api.service";
import {useState, useEffect} from 'react';


const Admin = () =>  {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(false)
    const handleFetch = async () => {
        setLoading(true)
       const result = await getAllTransactions();
       setTransactions(result.data.data);
       setLoading(false)
    }

    const listify = (tr) => {
        let theList = []
        for(let keys in tr){
            theList.push({[keys] : tr[keys]})
            }

        return theList
    }

    useEffect(()=>{
        handleFetch()
    }, [])

    return <div className="admin">
                <section className="admin__sidebar">
                    AdMiN dAsBoArD
                </section>
                <section className="admin__main">
                   <div className="admin__section-title"> Transactions </div>
                   <div className="admin__transactions">
                    {loading?"Loading...":transactions?transactions.map((tr, index)=>{
                       return <Card key={index} tr={listify(tr)}/>
                    }):"Loading..."}

                   </div>

                   <div className="admin__section-title"> Customers </div>
                   <div className="admin__customers">

                        
                       <Card/>
                       
                       <Card/>

                       <Card/>
                       
                       <Card/>
                       
                       <Card/>
                       
                   </div>
                </section>
    </div>
}

export default Admin;