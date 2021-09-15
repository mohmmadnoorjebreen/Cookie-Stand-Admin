

export default function LoginForm({login}) {

    function onLogin (event) {
        event.preventDefault();
       let users = event.target.user.value
       let passwords = event.target.password.value
      login(users,passwords)
    }

    
    return (
        <>
           <form onSubmit={onLogin} >
            <label>user name</label>
            <input name='user' type="text"></input>
            <label>password</label>
            <input name='password' type="password"></input>
            <button>sign in</button>
           </form>
        </>
    )
}

