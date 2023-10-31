function LoginInput(){
    return (
        <>
            <label className="input-label">Login</label>
            <input className="input" placeholder="Login"></input>
        </>
    );
} 
export default function Registration() {
    return (
        <>
            <h1 className="center-header">Registration</h1>
            <LoginInput/>
        </>
    );
}