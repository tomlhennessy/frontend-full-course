
export default function Layout(props) {
    const { children } = props

    const header = (
        <header></header>
    )

    const footer = (
        <footer></footer>
    )

    return (
        <div>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </div>
    )
}
