import type { Customer } from '@/interfaces/Customer'

const fetchCustomerData = async (): Promise<Response> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await fetch('/profile', options)
}

export default fetchCustomerData
