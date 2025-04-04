import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import diceSet from "../images/DiceSet.png";
import diceTrayGame from "../images/DiceTrayGame.png";
import dominos from "../images/Dominos.png";
import funkyChessSet from "../images/FunkyChessSet.png";
import setOfEightPuzzles from "../images/SetOfEightPuzzles.jpeg";

import {useState} from "react";

const Home = () => {
    {/*
        const [menuUopen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        }

        in return in main nav:

        <button>Menu</button>
        
        */}

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
                <li><a id="home" href="./Home">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Store">Store</a></li>
                <li><a href="./Events">Events</a></li>
            </ul>
        </nav>
        <h1 id="title">CrowPing Games</h1>

        <main class="main">
            <section class="left-flex">
                <div class="flex-item3">
                    <a href="./Store"><img src={diceTrayGame} alt="300x600" height="600px" width="400"></img></a>
                    <p>Check out the newest expansions <b>here!</b></p>
                </div>
            </section>
            <h1>Popular Items!</h1>
            <section class="mid-flex">
                <div class="flex-item">
                    <section class="box">
                        <a href="./Store"><img src={diceSet} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>White Dice Set - $13.99</h3>
                    </section>
                </div>
                <div class="flex-item">
                    <section class="box">
                        <a href="./Store"><img src={dominos} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Dominos - $15.99</h3>
                    </section>
                </div>
                <div class="flex-item2">
                    <section class="box">
                        <a href="./Store"><img src={funkyChessSet} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Layered Chess Set - $44.99</h3>
                    </section>
                </div>
                <div class="flex-item2">
                    <section class="box">
                        <a href="./Store"><img src={setOfEightPuzzles} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Set of 8 Puzzles - $25.99</h3>
                    </section>
                </div>
            </section>
        </main>
    </body>
    <Outlet />
    </>
  )
};

export default Home;