import { useEffect, useState } from "react";
import "./ProfileFinder.css";

const ProfileFinder = () => {
    const [username, setUsername] = useState("riyazsheikh89");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUserGithubDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        if (data && data.id) {
          setUserData(data);
        } else {
            setUserData(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchUserGithubDetails();
    }, []);

    if (loading) {
        return <h3>Loding...</h3>
    }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="username"
          placeholder="Enter github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserGithubDetails}>Search User</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> 
      : <h3 style={{color: "red"}}>User not found!</h3>}
    </div>
  );
};

export default ProfileFinder;



function UserCard({ user }) {
    const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      created_at,
    } = user;
  
    const createdDate = new Date(created_at);
  
    return (
      <div className="user-card">
        <div className="basic-info-container">
          <img src={avatar_url} className="avatar" alt="User" />

          <div className="user-info">
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>User joined on</p>
            <p>{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
              })} ${createdDate.getFullYear()}`}</p>
          </div>
        </div>

        <div className="user-stats">
          <p>Public Repos: {public_repos}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    );
  }
