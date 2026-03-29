export const Header = () => {
    let customCss = "code"
    const isLoggedIn = true;
    const greeting = isLoggedIn? <p>Welcome Back!</p> : <p>Please Login...</p>
    const items = ["Item 1", "Item 2", "Item 3"]


  return (
    <>
        <div>
            <h1 className="bannerText">Preetha Kumar</h1>
            <p className="slogan">Lorem distinctio veniam illum qui perferendis minima, quam dolor nihil a id.</p>
            
            {/* Javascript Expression in JSX */}
            <p className={customCss} style={{fontSize:"20px", fontStyle:"italic"}}>40+45={40+45}</p>

            {/* JSX with Condtional Rendering */}
            {greeting}

            <ul>
                {items.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
