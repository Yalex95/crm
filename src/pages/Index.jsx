import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";


export function loader(){
  // function similar as a use effect
  const clients = [
    {
        id: 1,
        name: 'Juan',
        phone: 102013313,
        email: "juan@gmail.com",
        company: 'Example Company'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@gmail.com",
        company: 'Example Company'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@gmail.com",
        company: 'Example Company'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 319381983,
        email: "miguel@gmail.com",
        company: 'Example Company'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@gmail.com",
        company: 'Example Company'
    },
];

  return clients //it has to return something
}

function Index (){
  const clients = useLoaderData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
      <p className='mt-3'>Manage your clients</p>
      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Client</th>
                <th className="p-2">Contact info</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                  clients.map(client=>(
                    <Client
                    client = {client}
                    key={client.id}
                    />
                  ))
                }
            </tbody>
        </table>
      ):
    (<p className='text-center mt-10'>No clients to show</p> )
    }
    </>
  )
}

export default Index