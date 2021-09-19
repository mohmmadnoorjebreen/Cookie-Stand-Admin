import { hours } from "./data"
import useResource from '../hooks/useResource'
export default function ReportTableStandHeader() {
   const { resources, loading, createResource, deleteResource } = useResource();

    return (
        <table className="mx-auto w-1/2 my-4" >
            <thead>
                 <tr>
                 <th className="p-3 border border-gray-70 bg-green-600" >location</th>
        {hours.map((value)=>{
          return <th className="p-3 border border-gray-70 bg-green-600" >{value}</th>
           
          })}
          <th className="p-3 border border-gray-70 bg-green-600" >Total</th>
        </tr>
        </thead>
          { resources.map(value=>
          <tbody>
              <tr key={value.id}  className="" > <td> {value.location}</td>  
             
               {value.hourly_sales.map(sale=>{
                   return <td>{sale}</td>
                    })}
             <td>{(value.hourly_sales.reduce((a, b) => a + b, 0))}</td>
              <td onClick={() => deleteResource(value.id)}>X</td></tr>
          </tbody>
              )
        }
           <tfoot>
           <td className="p-3 pl-2 border bg-green-500" >Total</td>
           { resources[0].hourly_sales.map(value=>
             <td>{(value)}</td>
              )
        }
        <td >{516*resources.length}</td>

           </tfoot>
      </table> 
    )
}
