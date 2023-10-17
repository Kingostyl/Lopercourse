import { useEffect, useState } from "react";

const useUser = () => {
  const defaultName = "example";
  const [name, setName] = useState(defaultName);
  const [users, setUsers] = useState("");
  const [location, setLocation] = useState("🇮🇩 indonesia");
  const [activity, setActivity] = useState("Just Holiday");
  const [isEditing, setIsEditing] = useState(false);

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateUsers = (event) => {
    setUsers(event.target.value);
  };

  const updateLocation = (event) => {
    setLocation(event.target.value);
  };

  const updateActivity = (event) => {
    setActivity(event.target.value);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    setIsEditing(false);
    localStorage.setItem("profileName", name);
    localStorage.setItem("Location", location);
    localStorage.setItem("User", users);
    localStorage.setItem("activity", activity);
  };

  const clearName = () => {
    localStorage.removeItem("profileName");
    setName(defaultName);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("profileName");
    const storedLocation = localStorage.getItem("Location");
    const storedUser = localStorage.getItem("User");
    const storedActivity = localStorage.getItem("activity");

    if (storedName) {
      setName(storedName);
    }

    if (storedLocation) {
      setLocation(storedLocation);
    }

    if (storedUser) {
      setUsers(storedUser);
    }

    if (storedActivity) {
      setActivity(storedActivity);
    }
  }, []);

  return {
    name,
    users,
    location,
    activity,
    startEditing,
    updateActivity,
    updateLocation,
    updateUsers,
    updateName,
    saveChanges,
    clearName, 
    isEditing,
  };
};

export default useUser;
