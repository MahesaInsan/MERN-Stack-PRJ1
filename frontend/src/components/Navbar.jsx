const Navbar = ()=>{
    return(
        <div className="grid grid-rows-3 h-screen">
            <div className="grid grid-cols-3">
                <img src="" alt="" />
                <p className="col-span-2">Finance Tracker</p>
            </div>
            <div className="grid grid-rows-5">
                <h1>Menu</h1>
                <ul>
                    <li>Overview</li>
                    <li>Transaction</li>
                    <li>Analytic</li>
                    <li>Cards</li>
                </ul>
            </div>
            <div className="grid grid-rows-4">
                <h1>General</h1>
                <ul>
                    <li>Settings</li>
                    <li>Help/Support</li>
                    <li>Dark Mode</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar