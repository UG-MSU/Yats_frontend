function LoginInput(){
    return (
        <>
            <label className="input-label">Login</label>
            <input className="input" placeholder="Login"></input>
        </>
    );
} 
function Registration() {
    return (
        <>
            <h1 className="center-header">Registration</h1>
            <LoginInput/>
        </>
    );
}