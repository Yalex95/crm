const CrmForm = ({client}) => {
    // const {name, company, email, phone, notes} = client
    return (
        <>
            <div className="mb-4 ">
                <label
                    className="text-gray-800"
                    htmlFor="Name"
                >Name:</label>
                <input 
                    id="Name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Name"
                    name="name"
                    defaultValue={client?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Company"
                    name="company"
                    defaultValue={client?.company}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor='phone'
                >Phone:</label>
                <input 
                    id='phone'
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Phone"
                    name='phone'
                    defaultValue={client?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notes"
                    name="notes"
                    defaultValue={client?.notes}
                />
            </div>
        </>
    )
}

export default CrmForm