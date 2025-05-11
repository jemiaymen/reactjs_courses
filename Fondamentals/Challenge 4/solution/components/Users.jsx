const Users = () => {
    const users = [
      { id: 1, name: "Foulen", age: 25 },
      { id: 2, name: "Foulena", age: 30 },
      { id: 3, name: "Joe", age: 22 },
    ];
  
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default Users;