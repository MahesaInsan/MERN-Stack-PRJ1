const Navbar = ()=>{
    return(
        <div className="grid grid-rows-6 h-screen" style={{backgroundColor:"white"}}>
            <div className="grid grid-cols-3 p-2">
                <img src="" alt="" />
                <p className="col-span-2">Finance Tracker</p>
            </div>
            <div className="grid grid-rows-3 p-2">
                <a href="/">Dashboard</a>
                <a href="">Account</a>
                <a href="/card">Card</a>
            </div>
        </div>
    )
}

export default Navbar