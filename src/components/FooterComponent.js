import React from 'react';


function FooterComponent() {
  return (
    <footer className="footer nes-container is-rounded is-dark">
      <p>Feature Of Project</p>
      <p>
        <a href="https://github.com/cscolabear/weather-crawler/">weather-crawler</a> | puppeteer, ci, travis, nodejs
      </p>

      <div className="github-area">
        {/* <div className="nes-balloon is-rounded-dark from-left ">
          <p>
              used <i className="nes-jp-logo"></i> NES.css + <i className="polar-bear"></i> Cola
          </p>
          <p>
            <i className="nes-icon star"></i> Please~~~
          </p>
        </div> */}
      </div>
    </footer>
  );
}

export default FooterComponent;
