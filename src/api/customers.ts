interface Circuit {
  name: string
  installationDate: string
}

interface Meter {
  name: string
  circuits: Circuit[]
}

interface Site {
  site: string
  meters: Meter[]
}

interface Customer {
  name: string
  sites: Site[]
}

const customerData: Customer = {
  name: 'Customer 1',
  sites: [
    {
      site: 'Site A',
      meters: [
        {
          name: 'meter 1',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit B',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit C',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit D',
              installationDate: '2023/05/14'
            }
          ]
        },
        {
          name: 'meter 2',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            }
          ]
        },
        {
          name: 'meter 3',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit B',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit C',
              installationDate: '2023/05/14'
            }
          ]
        }
      ]
    },
    {
      site: 'Site B',
      meters: [
        {
          name: 'meter 1',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            }
          ]
        },
        {
          name: 'meter 2',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            }
          ]
        },
        {
          name: 'meter 3',
          circuits: [
            {
              name: 'Circuit A',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit B',
              installationDate: '2023/05/14'
            },
            {
              name: 'Circuit C',
              installationDate: '2023/05/14'
            }
          ]
        }
      ]
    }
  ]
}

const fetchCustomerData = () => {
  return Promise.resolve(customerData)
}

export default fetchCustomerData
