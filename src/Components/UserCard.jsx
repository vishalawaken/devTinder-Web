import React from 'react'

const UserCard = ({user}) => {
    console.log(user);
  return (
    <div>
        <div className="card bg-gray-800 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoUrl}
      alt={user.firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard