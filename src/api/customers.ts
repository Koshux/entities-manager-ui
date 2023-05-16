interface Circuit {
  id: number
  installationDate: Date
  isMain: boolean
  circuits: Circuit[]
}

interface Meter {
  serialNumber: string
  installationDate: Date
  circuits: Circuit[]
}

interface Site {
  id: number
  coordinates: string
  address: string
  postCode: string
  meters: Meter[]
  circuits: Circuit[]
}

interface Customer {
  id: number
  email: string
  vatNumber: string
  sites: Site[]
}

// const customerData: Customer = {
//   name: 'Customer 1',
//   sites: [
//     {
//       site: 'Site A',
//       meters: [
//         {
//           name: 'meter 1',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit B',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit C',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit D',
//               installationDate: '2023/05/14'
//             }
//           ]
//         },
//         {
//           name: 'meter 2',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             }
//           ]
//         },
//         {
//           name: 'meter 3',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit B',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit C',
//               installationDate: '2023/05/14'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       site: 'Site B',
//       meters: [
//         {
//           name: 'meter 1',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             }
//           ]
//         },
//         {
//           name: 'meter 2',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             }
//           ]
//         },
//         {
//           name: 'meter 3',
//           circuits: [
//             {
//               name: 'Circuit A',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit B',
//               installationDate: '2023/05/14'
//             },
//             {
//               name: 'Circuit C',
//               installationDate: '2023/05/14'
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

const fetchCustomerData = async (): Promise<Customer> => {
  // return Promise.resolve(customerData)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = window.fetch('/profile', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
    .catch(error => {
      console.error(error)
    })

  return data
}

export default fetchCustomerData
