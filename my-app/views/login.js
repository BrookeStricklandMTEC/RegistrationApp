import './App.css';

if (messages.error) {
    messages.error
}

function Login() {
  return (
    <div className="LoginWrapper">
      <header className="Login-header">
        <h1> Login </h1>
        <form action="/login" method="POST"> 

        <div className="Email-Field"> 
            <label for="email"> Email </label>
            <input type="email" id="email" name="email" required> </input>
        </div>

        <div className="Password-Field"> 
            <label for="password"> Password </label>
            <input type="password" id="password" name="password" required> </input>
        </div>
        
        <button type="submit"> Login </button>
        </form>
    
        <a href="/register"> Register </a>

      </header>
    </div>
  );
}

export default Register;