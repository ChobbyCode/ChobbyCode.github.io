// Note: I don't like how this page is in pure HTML, but thou doth not know how to read MarkDown in tsx, I will figuire that out when I make the Blog Page


function AboutPage() {

    return (
      <div className="content">
        <h1>About</h1>
        
        <section>
          <p>
            Hello, I am ChobbyCode, an almost self-taught programming, 14 year old programmer. I have taught my self multiple languages such as C#, HTML, CSS, Typescript, and C++, for some odd reason I have been taught BASIC at school, I did not even know that people still used that, but I made a graphics library with :). My primary programming language is C#, and you can see some of my projects on my projects section of this page. My primary code editor is neovim, you can view my config in my dotfiles. 
          </p>
        </section>

        <section>
          <h2>Experience & Knowledge</h2>
          <section>
            <h4>C# Frontend & Backend Development</h4>
            <p>
              My primary programming language is C#, and I have used this to create Frontend applications - with Blazor -, and Backend server applications - with ASP.NET -, this also means I have experience with SQL, and deploying applications.
            </p>
          </section>
          <section>
            <h4>HTML Frontend Development</h4>
            <p>
              I have created multiple websites with HTML, most notably: this website, I have used a range of tooling to create these websites, but the common tooling I have overall used is pure HTML, and CSS - which is not good practice, and is hard to maintain, I mainly created these websites when I was younger ( between the ages of 8, and 12 when I was less experienced at programming ). Instead now, I prefer to use a framework paired with a library, for this website I am using react, bootstrap, and wouter for routing.
            </p>
          </section>
          <section>
            <h4>Networking & Infrastructure</h4>
            <p>
              I have experience with HTTP infrastructure, and server infrastructure. I understand how to 'theorectically' setup infrastructure for a server using routers, switchers, and forwarding ports; however, on the downside I have actually failed to set one up - except quickly locally exposing my Rasberry Pi 4 to connect to a website on my computer, however I intend to take a Networking course in College or University (UK), so that I can learn how this works in more detail, and so I can improve on my previous qualities.
            </p>
          </section>
          <section>
            <h4>Low-level System Programming</h4>
            <p>
              I have created my own Terminal Based Operating System in C# using a framwork known as Cosmos, which allows for easy computation of an Operating System in C#, I further have programmed low-level code in C, C++, and Asm on my Arduino, and Rasberry Pi.
            </p>
          </section>
          <section>
            For further information on my Experiences please contact me directly.
          </section>
        </section>
        <section>
          <h2>Qualifications</h2>
          <p> 
            I currently don't have any qualifications as I have not completed school yet, in the following years I will have my first qualifications, these will be visible here then.
          </p>
        </section>
      </div>
    );
}

export default AboutPage;
