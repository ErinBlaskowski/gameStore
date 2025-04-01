import "./Store.css";

const Store = () => {
    return (
        <>
        <head>
            <title>CrowPing Games</title>
        </head>
        <body>
            <section class="header">
                <section class="login">
                    <h2>Sign In</h2>
                    <h3 id="input">Enter Username</h3>
                    <h3 id="input">Enter Password</h3>
                </section>
                <section id="cart">
                    <h4>Your Cart</h4>
                </section>
            </section>
            <nav id="main-nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a id="store" href="/store">Store</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>
        </body>
        </>
    )
};

export default Store;