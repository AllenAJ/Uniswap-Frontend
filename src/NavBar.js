import React, { useState } from 'react';

function Navbar() {
  const [action, setAction] = useState('Swap'); // State to manage the selected action

  return (
    <div class="top-bar">
    <nav class=" top-bar-nav navbar navbar-expand-lg navbar">
    <div class="logo">
        <a class="navbar-brand" href="#"><img src="https://cryptologos.cc/logos/uniswap-uni-logo.png"></img> </a>
    </div>
    <div class="center">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-swap-tab" data-toggle="pill" href="#" role="tab" aria-selected="true">Swap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-pool-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Pool</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="pills-vote-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Vote</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-chart-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Chart</a>
                    </li>
                </ul>
            </div>
    <div className="right">
    <div >
        <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="eth-button dropdown show">
            <a class="ethereum-coin btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span><img src="https://cdn-icons-png.flaticon.com/512/6001/6001368.png" ></img></span>
                Ethereum
            </a>
        </div>
        </div>
        <div class="top-connect">
            <button type="button" class="btn-wallet" id="top-connect-wallet-button">Connect Wallet</button>
        </div>
        <div>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="ethereum-coin1 dropdown show">
                <a class="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"><span>...</span>

                </a>
            </div>
        </div>
        </div>
</nav>
</div>
  );
}

export default Navbar;
