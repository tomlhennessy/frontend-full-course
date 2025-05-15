
export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className='text-medium text-gradient'>
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small>Created by</small>
            <a target="_blank" href="https://www.linkedin.com/in/tomlhennessy96/">
                <img alt="pfp" src="https://media.licdn.com/dms/image/v2/D4D03AQFgeqmGk2KFlg/profile-displayphoto-shrink_400_400/B4DZSRP7VeHcAk-/0/1737603659935?e=1752710400&v=beta&t=5q3XeH3eYaiuRFviRuIOrFwQ_1BPQnOa2_Smkdwrk7Y" />
                <p>@tomlhennessy96</p>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
