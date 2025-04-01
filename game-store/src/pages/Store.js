import "./Store.css";

import monolopy from "../images/Monopoly.png";
import diceSet from "../images/DiceSet.png";
import dominos from "../images/Dominos.png";
import funkyChessSet from "../images/FunkyChessSet.png";
import medievalChessSet from "../images/MedievalChessSet.png";
import virtualHeadset from "../images/VirtualHeadset.png";
import redDiceSet from "../images/RedDiceSet.png";
import bicycleCardSet from "../images/BicycleCardSet.png";
import setOfEightPuzzles from "../images/SetOfEightPuzzles.jpeg";

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
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a id="store" href="./Store">Store</a></li>
                    <li><a href="./Events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>
            <main class="main">
                <h1>THE BEST GAMES AT THE BEST PRICES!</h1>

                <section class="columns">
                    <div class="column1">
                        <section id="box">
                            <a href="./itemPreview"><img src={bicycleCardSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Standard Card Set - $6.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={diceSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>White Dice Set - $13.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={dominos} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Dominos - $15.99</h3>
                        </section>
                    </div>
                    <div class="column2">
                        <section id="box">
                            <a href="./itemPreview"><img src={funkyChessSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Layered Chess Set - $44.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={medievalChessSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Medieval Chess Set - $49.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={redDiceSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Red Dice Set - $13.99</h3>
                        </section>
                    </div>
                    <div class="column3">
                        <section id="box">
                            <a href="./itemPreview"><img src={setOfEightPuzzles} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Set of 8 Puzzles - $25.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={virtualHeadset} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>VR Headset - $199.99</h3>
                        </section>
                        <section id="box">
                            <a href="./itemPreview"><img src={monolopy} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Monopoly - $24.99</h3>
                        </section>
                    </div>
                </section>
            </main>
            {/* Not currently implemented: <script src="storeScript.js"></script> */}
        </body>
        </>
    )
};

export default Store;