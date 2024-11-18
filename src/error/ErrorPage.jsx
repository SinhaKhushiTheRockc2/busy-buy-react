// Error Page component
function ErrorPage(){
    return(
        <>
        {/* Error Message */}
            <h1 style={{color:"red",textAlign:"center",marginTop:"3%"}}>Page Not Found , Something went wrong</h1>
            <div style={{width:"30%",margin:"auto",marginTop:"3%"}}>
            <img src="https://myaccess.myflfamilies.com/icons/critical.gif" alt="errorimage"/>
            </div>
        </>
    )
}


// Exporting error-page
export default ErrorPage;