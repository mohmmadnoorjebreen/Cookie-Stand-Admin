

export default function LoginForm({login}) {

    function onLogin (event) {
        event.preventDefault();
       let users = event.target.user.value
       let passwords = event.target.password.value
      login(users,passwords)
    }

    
    return (
        <>
           <form onSubmit={onLogin} className="m-8 p-4 bg-green-300 rounded-md" >
           <h2 className ="text-center text-xl">LogIn Form </h2> 
           <div className="m-3 p-4 bg-green-200"> 
            <label className=" m-3" >user name</label>
            <input name='user' type="text"></input>
            </div>
            <div className="m-3 p-4 bg-green-200"> 
            <label className=" m-3" >password</label>
            <input name='password' type="password"></input>
            </div>
            <button className="mx-auto px-2 p-1 m-3 bg-green-500 text-black-50" >sign in</button>
           </form>
        </>
    )
}