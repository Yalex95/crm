import Error from '../components/Error'
import {getClient} from '../data/clients'
import { Form,useActionData,useNavigate,useLoaderData, redirect} from 'react-router-dom'
import CrmForm from '../components/Form'

export async function loader(params){
  const client = await getClient(params.params.clientId)

  if(Object.values(client).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'No results found'
    })
  }
  return client
}

const EditClient = () => {
  const navigate = useNavigate()
  const client = useLoaderData()
  // const errors = useActionData()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit Client</h1>
      <p className='mt-3'>Fill up the form to update client information</p>

      <div className="flex justify-end">
        <button 
        className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        onClick={()=> navigate(-1)}
        >
          Return
        </button>
      </div>
      <div className="mt-20 bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {/* {errors?.length && errors.map((error,i)=>(
          <Error key={i}>{error}</Error>
        ))} */}
        <Form 
        method='post'
        noValidate
        >
          <CrmForm client={client}/>
          <input 
          type="submit" 
          className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg' 
          value="Update Client"/>
        </Form>
      </div>
    </>
  )
}

export default EditClient