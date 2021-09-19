
import useResource from '../hooks/useResource'

export default function FormStandHeader({setCookie}) {

    const { resources, loading, createResource, deleteResource } = useResource();

    function onCreate (event) {
        event.preventDefault();
        let array=[]
        for (let index = 0; index < 14; index++) {
           let value= Math.floor((Math.random() * (event.target.Maximum.value - event.target.minimum.value) ))
           array.push(Number(value)+ Number(event.target.minimum.value))
        }
         
        const obj = {
            
                "location": event.target.location.value,
                "description": "nice ",
                "hourly_sales": [
                    10
                ],
                "minimum_customers_per_hour": event.target.minimum.value,
                "maximum_customers_per_hour": event.target.Maximum.value,
                "average_cookies_per_sale":event.target.avgCustomers.value,
                'hourly_sales':array,
            
        }
        createResource(obj)
    }
    
    return (
        <form onSubmit={onCreate }  className="m-8 p-4 bg-green-300 rounded-md" >
        <h2 className ="text-center text-xl">Cookie Stand Admin  </h2> 
        <div className="flex items-stretch"> 
        <label className=" m-3 "> location </label>
        <input className= "bg-gray-100 m-3 w-2/3"  name="location" type = "text" />
        </div>
        <div className="flex items-stretch"> 
        <label className=" m-3 "> minimum Customer pre Hour  </label>
        <input className= "bg-gray-100 m-3 w-2/3"  name="minimum" type = "number"/>
        </div>
        <div className="flex items-stretch"> 
        <div className="m-3 p-4 bg-green-200">  
        <label className=" m-3 "> Maximum Customer pre Hour </label>
        <input className= "bg-gray-100 m-3 w-2/3"  name="Maximum" type = "number"/>
        </div>
        <div className="m-3 p-4 bg-green-200">  
        <label className=" m-3 "> Average Cookies pre sale  </label>
        <input className= "bg-gray-100 m-3 w-2/3"  name="avgCustomers" type = "number" />
        </div>
        
        <button className="px-2 p-1 m-3 bg-green-500 text-black-50" >Create</button>
        </div>
  
        </form>
    )
}

