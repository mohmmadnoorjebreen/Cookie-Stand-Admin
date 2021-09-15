import { hours } from "./data"
import useResource from '../hooks/useResource'
export default function ReportTableStandHeader({data}) {
  const { resources, loading, createResource, deleteResource } = useResource();

    return (
        <table className="" >
            <thead>
                 <tr>
                 <th>location</th>
        {hours.map((value)=>{
          return <th>{value}</th>
           
          })}
          <th>Total</th>
        </tr>
        </thead>
          { data.map(value=>
          <tbody>
              <tr key={value.id}  className="" > <td> {value.location}</td>  
              <span onClick={() => deleteResource(value.id)}>X</span>
               {value.data.map(sale=>{
                   return <td>{sale}</td>
                    })}
              <td>516</td></tr>
          </tbody>
              )
        }
           <tfoot>
           <td>Total</td>
           { data[0].data.map(value=>
             <td>{value*data.length}</td>
              )
        }
        <td>{516*data.length}</td>

           </tfoot>
      </table> 
    )
}


