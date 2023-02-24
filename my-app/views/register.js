import './App.css';

function Register() {
  return (
    <div className="RegisterWrapper">
      <header className="Register-header">
        <h1> Register </h1>
        <form action="/register" method="POST"> 

        <div className="Name-Field"> 
            <label for="name"> Name </label>
            <input type="text" id="name" name="name" required> </input>
        </div>
        <div className="Email-Field"> 
            <label for="email"> Email </label>
            <input type="email" id="email" name="email" required> </input>
        </div>

        <div className="Password-Field"> 
            <label for="password"> Password </label>
            <input type="password" id="password" name="password" required> </input>
        </div>
        
        <button type="submit"> Register </button>
        </form>
    
        <a href="/login"> Login</a>

      </header>
    </div>
  );
}

export default Register;