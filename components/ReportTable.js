import { hours } from "./data"

export default function ReportTableStandHeader({data}) {
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
              <tr className=""> <td> {value.location}</td>  
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


