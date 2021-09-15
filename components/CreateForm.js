
import useResource from '../hooks/useResource'
export default function FormStandHeader({setCookie}) {

    const { resources, loading, createResource, deleteResource } = useResource();

    function onCreate (event) {
        event.preventDefault();
         
        const obj = {
         'location': event.target.location.value,
         'minCustomers': event.target.minimum.value,
         'maxCustomers': event.target.Maximum.value,
         'avgCustomers': event.target.avgCustomers.value,
         'data' : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] 
        }
        createResource(obj)
        console.log(resources);
  
    }
    
    return (
        <form onSubmit={onCreate } className='flex w-1/2 p-2 p-10 mx-auto my-4 mt-10 bg-green-200 j' >
        <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <label className='block pr-4 mb-1 font-bold md:text-right md:mb-0' > Cookie Stand Admin </label>
            <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0'> location </label>
            <input name="location" type = "text" />
            <div className="flex flex-wrap items-center " >
            <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0'> minimum Customer pre Hour  </label>
            <input name="minimum" type = "number"/>
            <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0'> Maximum Customer pre Hour </label>
            <input name="Maximum" type = "number"/>
            <label className='block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0'> Average Cookies pre sale  </label>
            <input name="avgCustomers" type = "number" />
            <button>Create</button>
            </div>
        </div>
        </div>
        </form>
    )
}

