import "./About.css";
import crowsForWebsite from "../images/CrowsForWebsite.png";
import meetTheTeam from "../images/MeetTheTeam.png";

const About = () => {
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
                    <li><a id="about" href="./About">About</a></li>
                    <li><a href="./Store">Store</a></li>
                    <li><a href="./Events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>
            <main class="main">
                <section class="flexbox box1">
                    <img src={crowsForWebsite} height="650px" width="500px" alt="200x100"></img>
                    <div class="text">
                        <h3>What Is CrowPing Games?</h3>
                        <p>CrowPing Games is not just an online gaming shop! We cater to those online and offline, with cyber deals, event hosting, gaming sessions, and a community game shop for all! Our physical store serves to connect customers into groups that can game together for years, catering especially to TTRPGs such as Dungeons & Dragons. Our digital store, on the other hand, provides fantastic prices for new and old gamers alike, catering to a broader audience with a wide variety of games!</p>
                    </div>
                </section>
                <section class="flexbox box2">
                    <img src={meetTheTeam} height="650px" width="500px" alt="200x100"></img>
                    <div class="text">
                        <h3>Meet The Team</h3>
                        <p>Our talented staff includes the site manager, Erin Blaskowski, as well as our on-site employees, Lilith Hardwick and Martin Nguyen. Erin is an avid player of all board games, and Lilith and Erin play Dungeons & Dragons together at the shop from time to time, hosting events for those looking to play. Martin primarily manages inventory, but is always happy to discuss the best strategies for board games. </p>
                    </div>
                </section>
        </main>

        {/* iframe and form not implemented yet
        <iframe id="iframe"
            width = "560";
            height = "315";
            src = "https://www.youtube.com/embed/BgvHNlgmKro?si=sX8OzWESY8ovoN__";
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            allowFullscreen = true; >
        </iframe>
        */}
        <footer class="footer">
            <div id="banner-menu">
                <h2>Contact Us</h2>
                <p>CrowPingGames@Outlook.com ~ 843-227-4592</p>
            </div>
        </footer>

        {/*
        </><form method="POST" id="form">
            <input type="hidden" name="access_key" value="1ee4ff90-fa7d-4874-ab3c-1c5908dc72d9">

            <input type="text" name="name" margin-top="5px" required>
            <input type="email" name="email" margin-top="5px" required>
            <textarea name="message" margin-top="5px" required></textarea>
            <input type="checkbox" name="botcheck" class="hidden" margin-top="5px" style="display: none;">

            <button type="submit">Submit Form</button>

            <div id="result"></div>
        </form>
        <script src="form.js"></script>
        </input>
        */}
        </body>
        </>
    )
};

export default About;