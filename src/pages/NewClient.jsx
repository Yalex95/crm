import { Form,useActionData,useNavigate} from 'react-router-dom'
import CrmForm from '../components/Form'
import Error from '../components/Error'
export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  // validation
  const errors = []
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }

  if(errors.length > 0){
    return errors
  }
  
}

function NewClient() {
  const navigate = useNavigate()
  const errors = useActionData()
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
      <p className='mt-3'>Fill up the form to register a new client</p>

      <div className="flex justify-end">
        <button 
        className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        onClick={()=> navigate(-1)}
        >
          Return
        </button>
      </div>
      <div className="mt-20 bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errors?.length && errors.map((error,i)=>(
          <Error key={i}>{error}</Error>
        ))}
        <Form 
        method='post'
        >
          <CrmForm/>
          <input 
          type="submit" 
          className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg' 
          value="Register Client"/>
        </Form>
      </div>
    </>
  )
}

export default NewClient