import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
    })

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        console.log(result.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
  )
}
