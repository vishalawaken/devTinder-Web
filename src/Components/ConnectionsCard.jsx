import React from 'react'

const ConnectionsCard = ({user}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={user.photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  );
};

export default ConnectionsCard;