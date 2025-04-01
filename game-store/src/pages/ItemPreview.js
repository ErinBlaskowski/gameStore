import "./ItemPreview.css";

const ItemPreview = () => {
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
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a href="./Store">Store</a></li>
                    <li><a href="./Events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>
        </body>
        </>
    )
};

export default ItemPreview;