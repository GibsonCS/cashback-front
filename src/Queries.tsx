// const clients = [
//   {
//     client_type: "Lindsay Walton",
//     value: "Front-end Developer",
//     cashback: "lindsay.walton@example.com",
//     ip_address: "Member",
//   },
//   {
//     client_type: "Lindsay Walton",
//     value: "Front-end Developer",
//     cashback: "lindsay.walton@example.com",
//     ip_address: "Member",
//   },
//   {
//     client_type: "Lindsay Walton",
//     value: "Front-end Developer",
//     cashback: "lindsay.walton@example.com",
//     ip_address: "Member",
//   },
// ];

export default function Queries({ clients }: any) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Client Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Cashback
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Ip Address
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client: any) => (
                  <tr>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {client.client_type}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {client.value}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {client.cashback}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {client.ip_address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
