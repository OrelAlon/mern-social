import "./favorite.css";

function Favorite({ restaurant }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className='rightbarRestaurants'>
      <div className='rightbarProfileImgContainer'>
        <img
          className='rightbarProfileImg'
          src={restaurant.profilePicture}
          alt=''
        />
      </div>
      <span className='rightbarRestaurant'> {restaurant.name}</span>
    </li>
  );
}

export default Favorite;
